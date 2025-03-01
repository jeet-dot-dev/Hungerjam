import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  pin: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
  },
  deliveryTime: {
    type: String,
  },
  user: {
    type: String,
    required:true,
  },
});

const Address = mongoose.model("Address",addressSchema) ;
export default Address ;