import React, { useContext, useState } from "react";
import { StoreContext } from "../Context/Context"; // Context for accessing global state
import MenuLine from "../components/MenuComponents/MenuLine"; // Component for menu category selection
import Sort from "../components/MenuComponents/Sort"; // Component for sorting options
import Footer from "../components/Footer"; // Footer component
import { FaCartPlus } from "react-icons/fa"; // Icon for adding items to cart
import { FaEye } from "react-icons/fa"; // Icon for viewing item details
import { motion } from "framer-motion"; // Library for animations

const Menu = () => {
  const [sortfoodType, setSortfoodType] = useState("Default Sort");

  // State for currently selected menu category
  const [onMenuSelect, setonMenuSelect] = useState("All");

  // Accessing food list from the global store context
  const { food_list } = useContext(StoreContext);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Number of items per page

  // Filter food items based on selected category
  const filterItems =
    onMenuSelect === "All"
      ? food_list
      : food_list.filter((item) => item.category === onMenuSelect);

  //sortfunc
  const sortItems = (items, type) => {
    if (type === "Top Rating") {
      return [...items].sort((a, b) => b.rating - a.rating);
    } else if (type === "Price: low to high") {
      return [...items].sort((a, b) => a.price - b.price);
    } else if (type === "Price: High to low") {
      return [...items].sort((a, b) => b.price - a.price);
    } else {
      return items;
    }
  };

  const sortedItems = sortItems(filterItems, sortfoodType);

  // Calculate total pages for pagination
  const totalPages = Math.ceil(filterItems.length / itemsPerPage);

  // Get the items for the current page
  const currentItems = sortedItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Function to render star ratings based on the item's rating
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

  return (
    <>
      {/* Main Container */}
      <div className="bg-gray-900 flex flex-col -z-10">
        {/* Header Divider */}
        <hr className="h-[10px] w-full bg-[#ffb701]" />

        {/* Menu Line and Sort Section */}
        <div className="foodline h-[150px] w-full flex flex-col md:flex-row justify-between items-center p-4 gap-4">
          <MenuLine onMenuSelect={setonMenuSelect} />{" "}
          {/* Menu category selector */}
          <Sort sortType={setSortfoodType} /> {/* Sorting options */}
        </div>

        {/* Food Items Section */}
        <div className="item w-full py-8 bg-gray-900">
          {currentItems.length > 0 ? (
            <div className="flex flex-wrap justify-center m-5">
              {currentItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="w-[350px] h-[400px] m-3 p-7 bg-gray-800 rounded-lg shadow-lg relative overflow-hidden"
                >
                  {/* Food Image */}
                  <div className="w-[300px] h-[150px] rounded-lg">
                    <img
                      src={item.imagePaths[4]?.url} // Display the 5th image if available
                      alt={item.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Food Details */}
                  <div className="p-4 text-white">
                    {/* Food Name */}
                    <h1 className="text-xl font-semibold mb-2 overflow-hidden text-ellipsis whitespace-nowrap">
                      {item.name}
                    </h1>

                    {/* Food Description */}
                    <h1 className="text-sm mb-2 line-clamp-2">
                      {item.description}
                    </h1>

                    {/* Price */}
                    <p className="text-lg font-bold text-yellow-500">
                      ₹{item.price}
                    </p>

                    {/* Rating */}
                    <div className="rating flex items-center gap-1 mt-2">
                      {renderStars(item.rating)} {/* Render star ratings */}
                      <span className="text-gray-500 text-sm">
                        ({item.rating})
                      </span>
                    </div>

                    {/* Hover Effect for Icons */}
                    <motion.div
                      className="icons flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 bg-opacity-60 bg-black"
                      initial={{ opacity: 0, y: -50 }} // Initial animation state
                      whileHover={{ opacity: 1, y: 0 }} // Animation on hover
                      transition={{ duration: 0.3 }}
                    >
                      <FaCartPlus className="text-3xl cursor-pointer mx-2 hover:text-[#ffb701]" />
                      <FaEye className="text-3xl cursor-pointer mx-2 hover:text-[#ffb701]" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-center text-white text-lg">
              No food items available
            </p>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="pagination mt-8 flex justify-center items-center gap-4">
              {/* Previous Button */}
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className={`px-4 py-2 bg-gray-700 text-white rounded-md ${
                  currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={currentPage === 1} // Disable button if on first page
              >
                Previous
              </button>

              {/* Page Info */}
              <p className="text-white">
                Page {currentPage} of {totalPages}
              </p>

              {/* Next Button */}
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                className={`px-4 py-2 bg-gray-700 text-white rounded-md ${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                disabled={currentPage === totalPages} // Disable button if on last page
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Menu;
