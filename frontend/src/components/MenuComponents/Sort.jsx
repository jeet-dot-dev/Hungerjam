import React from "react";
import { FaBars } from "react-icons/fa";
import { HiOutlineBarsArrowDown } from "react-icons/hi2";

const Sort = ({ sortType }) => {
  //handdleChange func
  const handdleChange = (e) => {
    const selectedValue = e.target.value; // Get the selected value
    sortType(selectedValue);
  };

  return (
    <div className="sort flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 md:gap-11 bg-gray-800 p-2 sm:p-3 md:p-4 rounded-lg shadow-lg w-full md:w-[30%] mt-3 md:mt-0">
      {/* Sort Dropdown */}
      <div className="option w-full sm:w-auto">
        <select
          onChange={handdleChange}
          className="select_items bg-gray-700 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full sm:w-auto text-sm md:text-base"
        >
          <option value="Default Sort">Default Sort</option>
          <option value="Top Rating">Top Rating</option>
          <option value="Price: low to high">Price: low to high</option>
          <option value="Price: High to low">Price: High to low</option>
        </select>
      </div>
      {/* Icons Section */}
      <div className="icons flex items-center gap-4 text-white mt-2 sm:mt-0">
        <FaBars className="cursor-pointer hover:text-yellow-500 text-lg md:text-xl transition duration-300" />
        <HiOutlineBarsArrowDown className="cursor-pointer hover:text-yellow-500 text-xl md:text-2xl transition duration-300" />
      </div>
    </div>
  );
};

export default Sort ;
