import mongoose, { model } from "mongoose";
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  imagePaths: {
    type: Object, // or you could use [String] if it's an array of strings (URLs)
    required: true, // Optional, based on your requirement
  },
  reviews: {
    type: Array, // Or you can define an array of subdocuments here if reviews have a structure
    default: [], // Initialize as empty array by default
  },
  category: {
    type: String,
    required: true,
  },
});

const Food = mongoose.model("Food", foodSchema);

export default Food;
