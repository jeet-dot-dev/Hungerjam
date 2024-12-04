import React, { useContext, useState } from "react";
import { StoreContext } from '../context/Context'
import axios from "axios";

const Add = () => {
  // Context: Take URL from StoreContext
  const { url } = useContext(StoreContext);

  // State to manage food data
  const [foodData, setFoodData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    images: [], // Array to hold image URLs
    rating: ""
  });

  // Handles input changes and updates state dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("image")) {
      // Update the `images` array for image inputs
      setFoodData((prev) => ({
        ...prev,
        images: [
          ...prev.images.filter((image) => image !== ""), // Filter out any empty strings
          value, // Add the new image URL
        ],
      }));
    } else {
      // Update other fields normally
      setFoodData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
    console.log(foodData); // Log the updated food data to the console
  };

  // Handles form submission to add the food item
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, description, images, price, category, rating } = foodData;

    try {
      const newUrl = url + "/api/food/add"; // API URL
      // Await the response from axios.post
      const res = await axios.post(newUrl, {
        name,
        description,
        price,
        rating,
        category,
        images
      }, {
        headers: {
          "Content-Type": "application/json",
        }
      });
      console.log("API response:", res.data); // Log the response data
    } catch (error) {
      console.log("Food data being sent:", foodData); // Log the food data
      console.error("Error occurred while submitting the data:", error);
    }
  };

  // Function to generate image preview for each image URL input
  const renderImagePreview = (url) => {
    return url ? (
      <div className="mt-2">
        <img src={url} alt="Image Preview" className="w-24 h-24 object-cover rounded-md" />
      </div>
    ) : null; // Return null if the URL is empty
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-50 overflow-hidden">
      <div className="bg-white shadow-lg rounded-lg p-8 w-[90%] max-w-4xl overflow-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Add New Food Item</h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name and Price (Side-by-Side) */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                onChange={handleChange}
                value={foodData.name}
                type="text"
                name="name"
                id="name"
                placeholder="Enter food name"
                className="w-full mt-1 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Price (₹)
              </label>
              <input
                onChange={handleChange}
                value={foodData.price}
                type="number"
                name="price"
                id="price"
                placeholder="Enter price"
                className="w-full mt-1 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              onChange={handleChange}
              value={foodData.description}
              name="description"
              id="description"
              rows="3"
              placeholder="Enter a short description"
              className="w-full mt-1 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          {/* Rating and Category (Side-by-Side) */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                Rating
              </label>
              <input
                onChange={handleChange}
                value={foodData.rating}
                type="number"
                name="rating"
                id="rating"
                placeholder="Enter rating (1-5)"
                className="w-full mt-1 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                onChange={handleChange}
                value={foodData.category}
                name="category"
                id="category"
                className="w-full mt-1 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Rolls">Rolls</option>
                <option value="Coffee">Coffee</option>
                <option value="Chowmin">Chowmin</option>
                <option value="Pasta">Pasta</option>
              </select>
            </div>
          </div>

          {/* Image Inputs with Preview */}
          <div>
            <h2 className="text-sm font-medium text-gray-700 mb-2">Add Images</h2>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4, 5].map((index) => (
                <div key={index}>
                  <input
                    onChange={handleChange}
                    value={foodData.images[index] || ''}
                    type="url"
                    name={`image${index}`}
                    placeholder={`Image URL ${index}`}
                    className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  {renderImagePreview(foodData.images[index])} {/* Image Preview */}
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition shadow-lg"
            >
              Add Food
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
