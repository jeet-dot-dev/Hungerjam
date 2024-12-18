import React, { useContext } from "react";
import { StoreContext } from "../context/Context";
import { Link } from "react-router-dom";
import axios from "axios";
import {ToastContainer} from 'react-toastify';
import { haddleError, haddleSuccess } from "../Utils/Utils";

const Home = () => {
  const { food_list, url, fetchFoodList } = useContext(StoreContext);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`text-yellow-400 ${i <= rating ? "" : "opacity-30"}`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  const delete_food_list = async (id) => {
    const newUrl = url + "/api/food/remove";
    try {
      const res = await axios.post(newUrl, { id: id });
      haddleSuccess(res.data.message);
      fetchFoodList();
      // console.log("delete",item._id);
      // console.log(res.data);
    } catch (error) {
      console.log(error);
      haddleError(error)
    }
  };

  return (
    <div className="h-screen w-full overflow-hidden">
      <div className="h-full w-full flex flex-wrap gap-4 pl-16 pt-10 overflow-y-auto">
      <ToastContainer></ToastContainer>
        {food_list.length > 0 ? (
          food_list.map((item, index) => {
            const randomImageIndex = Math.floor(Math.random() * 3); // Random index between 0 and 3
            return (
              <div
                key={index}
                className="food-item w-64 bg-white shadow-md rounded-lg overflow-hidden transform transition hover:scale-105"
              >
                <div className="img w-full h-40 bg-gray-100">
                  <img
                    src={item.imagePaths.image1[0]}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="content p-4">
                  <h1 className="text-lg font-bold text-gray-800">
                    {item.name}
                  </h1>
                  <h4 className="text-sm text-gray-600">{item.description}</h4>
                  <div className="rating flex items-center gap-1 mt-2">
                    {renderStars(item.rating)}
                    <span className="text-gray-500 text-sm">
                      ({item.rating})
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-green-600 mt-3">
                    ₹{item.price}
                  </p>
                </div>
                <div className="flex justify-between items-center p-4">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                    <Link to="/edit">Edit</Link>
                  </button>
                  <button
                    onClick={() => {
                      delete_food_list(item._id);
                    }}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p>No food items available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
