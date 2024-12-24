import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MdOutlineRestaurantMenu,
  MdPhonelinkRing,
  MdOutlineFastfood,
  MdDeliveryDining,
} from "react-icons/md";
import { TiHome } from "react-icons/ti";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ show,scrollValue}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track hovered item by index

  const menuItems = [
    { icon: <TiHome />, label: "Home", path: "/" },
    { icon: <MdOutlineRestaurantMenu />, label: "Menu", path: "/menu" },
    { icon: <MdPhonelinkRing />, label: "Contact us", path: "/contact" },
    { icon: <MdOutlineFastfood />, label: "About us", path: "/about" },
    { icon: <MdDeliveryDining />, label: "Delivery", path: "/delivery" },
  ];

  return (
    <div
      className={`w-full h-[100px] z-50  fixed ${
        show ? "mt-[50px]" : ""
      } ${scrollValue*100>1 ?"bg-[#000] opacity-60" : "bg-black"} flex items-center justify-start gap-10`}
    >
      <div className="logo h-20 rounded-full m-2">
        <img
          src="https://opc.webdigify.com/OPC02/OPC032_hungerjam/image/catalog/logo.png"
          alt="Coffee Adda Logo"
          className="h-20"
        />
      </div>
      <div className="menu text-white flex w-[50%] items-center justify-center gap-10 font-medium">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="home flex items-center gap-1"
            onMouseEnter={() => setHoveredIndex(index)} // Set the index of the hovered item
            onMouseLeave={() => setHoveredIndex(null)} // Reset when hover ends
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }} // Start hidden
              animate={
                hoveredIndex === index
                  ? { scale: 1, opacity: 1 }
                  : { scale: 0, opacity: 0 }
              } // Pop up when hovered
              transition={{ type: "spring", stiffness: 500, damping: 25 }}
              className="font-medium text-[#ffb701] text-2xl"
            >
              {item.icon}
            </motion.div>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `text-lg ${
                  isActive
                    ? "text-white border-b-2 border-white"
                    : "text-gray-300"
                }`
              }
            >
              {item.label}
            </NavLink>
          </div>
        ))}
      </div>
      <div className="btn text-white ml-36">
        <span className="h-[50px] bg-[#ffb701] inline-block px-5 py-3 hover:bg-zinc-700 hover:text-white  duration-500 rounded-lg cursor-pointer text-[18px]">
          <Link to='/menu'>Order Now</Link>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
