import mongoose from "mongoose";
import Order from "../models/orderSchema.js";
import User from "../models/userSchema.js";
import connectDB from "../config/dbConnect.js";

const deleteAll = async ()=>{
   // await User.deleteMany({});
    await Order.deleteMany({})
}
connectDB()
deleteAll();