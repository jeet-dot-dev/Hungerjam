import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const url = process.env.MONGODB_URI; // Ensure MONGODB_URI is set in your .env file

console.log(url);

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://jeet124:tmkLghrl9YRYiKll@cluster0.vhwo1.mongodb.net/adda"
    ); // No need for deprecated options
    console.log("Database is connected");
  } catch (err) {
    console.error("Error connecting to the database:", err.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
