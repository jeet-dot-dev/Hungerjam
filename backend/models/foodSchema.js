import mongoose from "mongoose";
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
    min: 0,
    max: 5, // Assuming ratings are out of 5
  },
  imagePaths: {
    
  },
  reviews: {
    type: [
      {
        user: { type: String, required: true }, // User who left the review
        comment: { type: String },             // Review text
        rating: { type: Number, min: 0, max: 5 }, // Review rating (optional)
      },
    ],
    default: [], // Default is an empty array if no reviews are added
  },
  category: {
    type: String,
    required: true,
    enum: ["Rolls", "Coffee", "Chowmein", "Pasta", "potato-spiral"], // Example categories
  },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

const Food = mongoose.model("Food", foodSchema);

export default Food;
