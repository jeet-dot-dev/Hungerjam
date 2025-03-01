import React, { useContext, useState } from "react";
import "../css/HomeCard.css";
import { motion } from "framer-motion";
import { FaOpencart } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import {
  MdOutlineRestaurantMenu,
  MdPhonelinkRing,
  MdOutlineFastfood,
  MdDeliveryDining,
} from "react-icons/md";
import { TiHome } from "react-icons/ti";
import { Link, NavLink } from "react-router-dom";
import { StoreContext } from "../Context/Context";

const Navbar = ({ show, scrollValue }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track hovered item by index

  const menuItems = [
    { icon: <TiHome />, label: "Home", path: "/" },
    { icon: <MdOutlineRestaurantMenu />, label: "Menu", path: "/menu" },
    { icon: <MdPhonelinkRing />, label: "Contact us", path: "/contact" },
    { icon: <MdOutlineFastfood />, label: "About us", path: "/about" },
    { icon: <MdDeliveryDining />, label: "Delivery", path: "/delivery" },
  ];

  //cartcount
  const { cartItems } = useContext(StoreContext);

  return (
    <div
      className={`w-full h-[100px]   fixed ${show ? "mt-[50px]" : ""} ${
        scrollValue * 100 > 1 ? "bg-[#000] opacity-60" : "bg-black"
      } flex items-center justify-start gap-10`}
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
        <div className="flex justify-center items-center gap-10">
          <Link to="/cart">
            <span className="relative h-[50px] bg-[#ffb701] inline-block px-5 py-3 hover:bg-zinc-700 hover:text-white duration-500 rounded-lg cursor-pointer text-[18px]">
              <div className="flex justify-center items-center gap-2">
                <p className="roboto text-[22px]">Cart</p>
                <FaOpencart className="text-[22px]" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[14px] w-6 h-6 flex items-center justify-center rounded-full">
                    {cartItems.length}
                  </span>
                )}
              </div>
            </span>
          </Link>
          {localStorage.userStored && (
            <>
              <Link to="/profile">
                <CgProfile className="text-[30px] mr-10"></CgProfile>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
