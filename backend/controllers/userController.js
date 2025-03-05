import User from "../models/userSchema.js";
import jwt from "jsonwebtoken";
///////////////////////////////// ------------ addUser ------------------------- /////////////////////////////////////////////////////////////////////

const signup = async (req, res) => {
  const { email, name, picture } = req.body;

  if (!email || !name || !picture) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ email });
    // console.log(existingUser);
    const token = req.headers.authorization?.split(" ")[1]; // Extract the token from 'Bearer <token>'
    if (!existingUser) {
      const decodedToken = jwt.decode(token); // Use jwt.verify if you have the secret or public key
      console.log("Decoded Token:", decodedToken);

      // Now you can access the user's data from the token payload
      const userId = decodedToken?.sub; // Typically, Auth0 uses 'sub' for the user ID
      console.log("User ID:", userId);
      const newUser = new User({ email, name, picture ,auth0UserId:userId});
      await newUser.save();
      return res.status(201).json({ message: "Account created successfully" });
    }

    return res.status(200).json({ message: "You logged in successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to store user", error });
  }
};


const getUser = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; // Extract the token from 'Bearer <token>'
    if (!token) {
      return res.status(401).json({ message: "Token not found" });
    }

    const decodedToken = jwt.decode(token); // Decode JWT
    const userId = decodedToken?.sub;

    const user_data = await User.findOne({ auth0UserId: userId }).populate("address"); // Populate address field

    if (!user_data) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ data: user_data }); // Send full user details with populated address
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Failed to find user", error });
  }
};


export  {signup,getUser};

// // Function to create a JWT token for a user
// const createToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET);
// };

// // Add a new user
// const addUser = async (req, res) => {
//   const { firstName, lastName, email, password } = req.body;

//   try {
//     // Check if user already exists
//     const exists = await User.findOne({ email });
//     if (exists) {
//       return res.json({ success: false, message: "User already exists" });
//     }

//     // Validate email format
//     if (!validator.isEmail(email)) {
//       return res.json({
//         success: false,
//         message: "Please enter a valid email",
//       });
//     }

//     // Hash the user's password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Create a new user
//     const newUser = new User({
//       firstName,
//       lastName,
//       email,
//       password: hashedPassword,
//     });

//     // Save the user to the database
//     const user = await newUser.save();

//     // Generate a JWT token
//     const token = createToken(user._id);

//     // Generate an email verification token
//     const email_token = await new Token({
//       userID: user._id,
//       token: crypto.randomBytes(32).toString("hex"),
//     }).save();

//     // Construct verification email URL
//     const url = `${process.env.BASE_URL}api/user/signup/${user._id}/verify/${email_token.token}`;
//     await mailfunc(user.email, "Verify Email", url);

//     res.json({
//       success: true,

//       message: "An email has been sent to your account. Please verify it.",
//     });
//   } catch (error) {
//     console.error(error);
//     res.json({ success: false, error });
//   }
// };

// ///////////////////////////////// ------------ loginUser ------------------------- //////////////////////////////////////////////////////

// // Log in an existing user
// const loginUser = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Check if user exists
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.json({ success: false, message: "User doesn't exist" });
//     }

//     // Verify password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.json({ success: false, message: "Invalid Password" });
//     }

//     // Check if user is verified
//     if (!user.verified) {
//       let token = await Token.findOne({ userID: user._id });

//       // If no token exists, generate a new one
//       if (!token) {
//         token = await new Token({
//           userID: user._id,
//           token: crypto.randomBytes(32).toString("hex"),
//         }).save();

//         // Construct verification email URL
//         const url = `${process.env.BASE_URL}api/user/signup/${user._id}/verify/${token.token}`;
//         await mailfunc(user.email, "Verify Email", url);
//       }

//       return res.status(400).json({
//         success: false,
//         message: "An email has been sent to your account. Please verify it.",
//       });
//     }

//     // Generate a JWT token
//     const token = createToken(user._id);
//     return res.json({
//       success: true,
//       token,
//       name: user.firstName,
//       message: "Email verified successfully. You have successfully logged in! Welcome.",
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ message: "Internal Server Error" });
//   }
// };

// ///////////////////////////////// ------------ tokenVerify ------------------------- //////////////////////////////////////////////////////

// // Verify the email token and activate the user account
// const tokenVerify = async (req, res) => {
//   try {
//     // Find the user by ID
//     const user = await User.findOne({ _id: req.params.id });
//     if (!user) return res.status(400).send({ message: "Invalid Link" });

//     // Find the token associated with the user
//     const token = await Token.findOne({
//       userID: user._id,
//       token: req.params.token,
//     });

//     if (!token) return res.status(400).send({ message: "Invalid Link" });

//     // Update the user's verified status
//     await User.updateOne({ _id: user._id }, { $set: { verified: true } });

//     // Remove the token from the database
//     await token.deleteOne();

//     res.status(200).send({ message: "Email verified successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ message: "Internal Server Error" });
//   }
// };

// //getdata
// const getdata = async (req, res) => {
//   try {
//     const user = req.oidc.user; // Fetch the Auth0 user
//     if (user) {
//       return res.json({
//         success: true,
//         user,
//         message: "Authenticated user data retrieved successfully.",
//       });
//     }
//     return res.status(401).json({ success: false, message: "Not authorized" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ message: "Internal Server Error" });
//   }
// };

// // Exporting the user controller functions
// export { addUser, tokenVerify, loginUser,getdata };
