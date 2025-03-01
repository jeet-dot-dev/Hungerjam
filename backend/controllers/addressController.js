// addressController.js
import jwt from 'jsonwebtoken';
import User from '../models/userSchema.js';
import Address from '../models/addressSchema.js';

export const storeAddress = async (req, res) => {
    const data = req.body;
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Authorization token is missing' });
    }

    try {
        // Decode the Auth0 JWT token
        const decodedToken = jwt.decode(token);
        const userId = decodedToken?.sub;

        // Fetch the internal user from your database using the Auth0 user ID
        const user = await User.findOne({ auth0UserId: userId });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Create and save the address with the internal user ID
        const newAddress = new Address({ ...data, user: user._id });
        await newAddress.save();

        // Update the user with the new address ID
        user.address = newAddress._id; // Directly assign the address ID
        await user.save();

        res.status(201).json({ message: 'Address stored successfully', address: newAddress });
    } catch (error) {
        console.error('Error storing address:', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};

  
  export const updateAddress = async () => {
    // Your logic here
  };
  