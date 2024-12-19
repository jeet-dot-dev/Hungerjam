import React, { useContext } from "react";
import { StoreContext } from "../context/Context";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
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
    } catch (error) {
      console.log(error);
      haddleError(error);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" className="mt-16" />
      <div className="h-screen w-full bg-gray-50">
        <div 
          className="p-6 overflow-y-auto h-full"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '::-webkit-scrollbar': {
              display: 'none'
            }
          }}
        >
          <div className="grid grid-cols-4 gap-6 auto-rows-min">
            {food_list.length > 0 ? (
              food_list.map((item, index) => (
               
                <div
                  key={index}
                  className="food-item bg-white shadow-md rounded-lg overflow-hidden transform transition hover:scale-105 h-[400px] flex flex-col"
                >
                  <div className="h-40 w-full bg-gray-100 flex-shrink-0">
                    <img
                       src={item.imagePaths[2]?.url} // Accessing the 3rd image
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col flex-grow p-4 justify-between">
                    <div>
                      <h1 className="text-lg font-bold text-gray-800 truncate">
                        {item.name}
                      </h1>
                      <h4 className="text-sm text-gray-600 line-clamp-2 mt-1">
                        {item.description}
                      </h4>
                      <div className="rating flex items-center gap-1 mt-2">
                        {renderStars(item.rating)}
                        <span className="text-gray-500 text-sm">({item.rating})</span>
                      </div>
                      <p className="text-lg font-semibold text-green-600 mt-2">
                        ₹{item.price}
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                        <Link to="/edit">Edit</Link>
                      </button>
                      <button
                        onClick={() => delete_food_list(item._id)}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No food items available</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;