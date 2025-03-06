import React, { useContext, useState, useEffect, lazy, Suspense } from "react";
import "../css/HomeCard.css";
import { motion } from "framer-motion";
import { FaOpencart } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import {
  MdOutlineRestaurantMenu,
  MdPhonelinkRing,
  MdOutlineFastfood,
  MdDeliveryDining,
  MdMenu
} from "react-icons/md";
import { TiHome } from "react-icons/ti";
import { Link, NavLink } from "react-router-dom";
import { StoreContext } from "../Context/Context";

const Navbar = ({ show, scrollValue }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const menuItems = [
    { icon: <TiHome />, label: "Home", path: "/" },
    { icon: <MdOutlineRestaurantMenu />, label: "Menu", path: "/menu" },
    { icon: <MdPhonelinkRing />, label: "Contact us", path: "/contact" },
    { icon: <MdOutlineFastfood />, label: "About us", path: "/about" },
    { icon: <MdDeliveryDining />, label: "Delivery", path: "/delivery" },
  ];

  const { cartItems } = useContext(StoreContext);

  // Check screen size on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    // Initial check
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Close mobile menu when a link is clicked
  const handleMenuItemClick = () => {
    if (isMobile) {
      setMenuOpen(false);
    }
  };

  return (
    <div
      className={`w-full ${isMobile ? 'h-auto' : 'h-[100px]'} fixed ${
        show ? "mt-[50px]" : ""
      } ${
        scrollValue * 100 > 1 ? "bg-[#000] opacity-60" : "bg-black"
      } flex ${isMobile ? 'flex-col' : 'flex-row'} items-center ${
        isMobile ? 'justify-between py-2' : 'justify-start gap-10'
      }`}
    >
      <div className={`flex items-center ${isMobile ? 'w-full justify-between px-4' : ''}`}>
        <div className={`logo ${isMobile ? 'h-14' : 'h-20'} rounded-full m-2 relative`}>
          {!imageLoaded && (
            <div className={`${isMobile ? 'h-14 w-14' : 'h-20 w-20'} bg-gray-700 rounded-full animate-pulse`}></div>
          )}
          <img
            src="https://res.cloudinary.com/dhdmbwnak/image/upload/v1741251247/logo_1_plyqqv.webp"
            alt="Coffee Adda Logo"
            className={`${isMobile ? 'h-14' : 'h-20'} ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        
        {isMobile && (
          <div className="flex items-center gap-4">
            <Link to="/cart">
              <span className="relative bg-[#ffb701] inline-block px-3 py-2 hover:bg-zinc-700 hover:text-white duration-500 rounded-lg cursor-pointer">
                <FaOpencart className="text-[20px]" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[12px] w-5 h-5 flex items-center justify-center rounded-full">
                    {cartItems.length}
                  </span>
                )}
              </span>
            </Link>
            
            {localStorage.userStored && (
              <Link to="/profile">
                <CgProfile className="text-[24px] text-white"></CgProfile>
              </Link>
            )}
            
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="text-white p-1"
            >
              <MdMenu className="text-[28px]" />
            </button>
          </div>
        )}
      </div>
      
      <div className={`menu text-white ${
        isMobile 
          ? `w-full ${menuOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden transition-all duration-300`
          : 'flex w-[50%] items-center justify-center gap-10'
        } font-medium`}
      >
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`home flex items-center gap-1 ${
              isMobile ? 'py-3 border-b border-gray-700 px-4' : ''
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={handleMenuItemClick}
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={
                hoveredIndex === index || (isMobile && menuOpen)
                  ? { scale: 1, opacity: 1 }
                  : { scale: 0, opacity: 0 }
              }
              transition={{ type: "spring", stiffness: 500, damping: 25 }}
              className="font-medium text-[#ffb701] text-2xl"
            >
              {item.icon}
            </motion.div>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `${isMobile ? 'text-base w-full' : 'text-lg'} ${
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
      
      {!isMobile && (
        <div className="btn text-white ml-auto mr-6">
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
              <Link to="/profile">
                <CgProfile className="text-[30px] mr-2"></CgProfile>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;