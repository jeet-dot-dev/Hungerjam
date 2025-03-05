import jwt from "jsonwebtoken";
import User from "../models/userSchema.js";
import Address from "../models/addressSchema.js";

export const storeAddress = async (req, res) => {
  const data = req.body;
  console.log(data);
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Authorization token is missing" });
  }

  try {
    // Verify the Auth0 JWT token (Replace with your secret key)
    //const decodedToken = jwt.verify(token,process.env.JWT_SECRET);
    const decodedToken = jwt.decode(token);

    const userId = decodedToken?.sub;
    //console.log(decodedToken);
    // Fetch the user using Auth0 ID
    const user = await User.findOne({ auth0UserId: userId });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.details === false) {
      // Ensure only allowed fields are stored in the Address model
      const newAddress = new Address(data);

      await newAddress.save();

      // Update the user with the new address ID
      user.address = newAddress._id;
      user.details = true; // Mark details as true
      await user.save();

      return res
        .status(201)
        .json({ message: "Address stored successfully", address: newAddress });
    }

    return res.status(409).json({ message: "Address already saved" });
  } catch (error) {
    console.log( error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateAddress = async (req, res) => {
  // Your update logic here
};
