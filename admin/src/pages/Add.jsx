import React, { useContext, useState } from "react";
import { StoreContext } from "../context/Context";
import axios from "axios";
import { haddleError, haddleSuccess } from "../Utils/Utils";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

const Add = () => {
  const { url } = useContext(StoreContext);

  const [foodData, setFoodData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    images: [],
    rating: "",
  });

  const handleChange = (e) => {
    const { name, type, files } = e.target;
    if (type === "file") {
      const index = parseInt(name.replace("image", ""), 10) - 1;
      const file = files[0];
      setFoodData((prev) => {
        const updatedImages = [...prev.images];
        updatedImages[index] = file;
        return { ...prev, images: updatedImages };
      });
    } else {
      setFoodData((prev) => ({
        ...prev,
        [name]: e.target.value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(foodData);
    const { name, description, price, category, rating, images } = foodData;

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("rating", rating);
      images.forEach((image, index) => {
        if (image) {
          formData.append(`image${index + 1}`, image);
        }
      });

      const newUrl = `${url}/api/food/add`;
      const res = await axios.post(newUrl, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      haddleSuccess(res.data.message);
      setFoodData({
        name: "",
        description: "",
        price: "",
        category: "",
        images: [],
        rating: "",
      });
    } catch (error) {
      console.log(error);
      haddleError(
        error.response?.data?.errors?.map((err) => err.message).join(", ") ||
          "An unknown error occurred"
      );
    }
  };

  const renderImagePreview = (image) => {
    return image ? (
      <div className="mt-2">
        <img
          src={URL.createObjectURL(image)}
          alt="Image Preview"
          className="w-24 h-24 object-cover rounded-md"
        />
      </div>
    ) : null;
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-50">
      {/* Place ToastContainer outside the main content */}
      <ToastContainer />
      <div className="bg-white shadow-lg rounded-lg p-8 w-[90%] max-w-4xl overflow-y-auto h-[90%]">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add New Food Item
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <div className="flex-1">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
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
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
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
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
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
          <div className="flex gap-4">
            <div className="flex-1">
              <label
                htmlFor="rating"
                className="block text-sm font-medium text-gray-700"
              >
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
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
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
                <option value="Chowmein">Chowmein</option>
                <option value="Pasta">Pasta</option>
                <option value="potato-spiral">Potato Spiral</option>
              </select>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-medium text-gray-700 mb-2">
              Add Images
            </h2>
            <div className="flex flex-wrap gap-4">
              {[1, 2, 3, 4, 5].map((index) => (
                <div key={index} className="flex flex-col items-center">
                  <input
                    type="file"
                    name={`image${index}`}
                    accept="image/*" // Optional: restrict to image files
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  {renderImagePreview(foodData.images[index - 1])}
                </div>
              ))}
            </div>
          </div>
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
