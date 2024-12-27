import User from "../models/userSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import Token from "../models/tokenSchema.js";
import mailfunc from "../config/Emailsend.js";
import crypto from "crypto";

///////////////////////////////// ------------ addUser ------------------------- /////////////////////////////////////////////////////////////////////

// Function to create a JWT token for a user
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Add a new user
const addUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    // Check if user already exists
    const exists = await User.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    // Validate email format
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    // Hash the user's password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    const user = await newUser.save();

    // Generate a JWT token
    const token = createToken(user._id);

    // Generate an email verification token
    const email_token = await new Token({
      userID: user._id,
      token: crypto.randomBytes(32).toString("hex"),
    }).save();

    // Construct verification email URL
    const url = `${process.env.BASE_URL}api/user/signin/${user._id}/verify/${email_token.token}`;
    await mailfunc(user.email, "Verify Email", url);

    res.json({
      success: true,
      token,
      message: "An email has been sent to your account. Please verify it.",
    });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error });
  }
};



///////////////////////////////// ------------ loginUser ------------------------- //////////////////////////////////////////////////////






// Log in an existing user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User doesn't exist" });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid Password" });
    }

    // Check if user is verified
    if (!user.verified) {
      let token = await Token.findOne({ userID: user._id });

      // If no token exists, generate a new one
      if (!token) {
        const token = await new Token({
          userID: user._id,
          token: crypto.randomBytes(32).toString("hex"),
        }).save();

        // Construct verification email URL
        const url = `${process.env.BASE_URL}api/user/signin/${user._id}/verify/${token.token}`;
        await mailfunc(user.email, "Verify Email", url);
      }

      return res
        .status(400)
        .send({ message: "An email has been sent to your account. Please verify it." });
    }

    // Generate a JWT token
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};



///////////////////////////////// ------------ tokenVerify ------------------------- //////////////////////////////////////////////////////






// Verify the email token and activate the user account
const tokenVerify = async (req, res) => {
  try {
    // Find the user by ID
    const user = await User.findOne({ _id: req.params.id });
    if (!user) return res.status(400).send({ message: "Invalid Link" });

    // Find the token associated with the user
    const token = await Token.findOne({
      userID: user._id,
      token: req.params.token,
    });

    if (!token) return res.status(400).send({ message: "Invalid Link" });

    // Update the user's verified status
    await User.updateOne({ _id: user._id }, { $set: { verified: true } });

    // Remove the token from the database
    await token.deleteOne();

    res.status(200).send({ message: "Email verified successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

// Exporting the user controller functions
export { addUser, tokenVerify, loginUser };
