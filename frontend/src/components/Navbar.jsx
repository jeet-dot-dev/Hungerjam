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
  MdMenu,
} from "react-icons/md";
import { TiHome } from "react-icons/ti";
import { Link, NavLink } from "react-router-dom";
import { StoreContext } from "../Context/Context";

const Navbar = ({ scrollValue }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const menuItems = [
    { icon: <TiHome />, label: "Home", path: "/" },
    { icon: <MdOutlineRestaurantMenu />, label: "Menu", path: "/menu" },
    { icon: <MdPhonelinkRing />, label: "Contact", path: "/contact" },
    { icon: <MdOutlineFastfood />, label: "About", path: "/about" },
    { icon: <MdDeliveryDining />, label: "Delivery", path: "/delivery" },
  ];

  const { cartItems, isAuthenticated, loginWithRedirect, logout } =
    useContext(StoreContext);

  // Check screen size on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
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
      className={`w-screen  ${
        isMobile ? "h-auto" : "h-[100px]"
      } fixed lg:top-[50px] ${
        scrollValue * 100 > 1 ? "bg-[#000] opacity-60" : "bg-black"
      } flex ${isMobile ? "flex-col" : "flex-row"} items-center ${
        isMobile ? "justify-between py-2" : "justify-start gap-10"
      }`}
    >
      <div
        className={`flex items-center ${
          isMobile ? "w-full justify-between px-4" : ""
        }`}
      >
        <div
          className={`logo ${
            isMobile ? "h-14" : "h-20"
          } rounded-full m-2 relative`}
        >
          {!imageLoaded && (
            <div
              className={`${
                isMobile ? "h-14 w-14" : "h-20 w-20"
              } bg-gray-700 rounded-full animate-pulse`}
            ></div>
          )}
          <img
            src="https://res.cloudinary.com/dhdmbwnak/image/upload/v1741251247/logo_1_plyqqv.webp"
            alt="Coffee Adda Logo"
            className={`${isMobile ? "h-12 pt-1" : "h-20"} ${
              imageLoaded ? "opacity-100" : "opacity-0"
            } transition-opacity duration-300`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </div>

      <div
        className={`menu text-white ${
          isMobile
            ? `w-full ${
                menuOpen ? "max-h-96" : "max-h-0"
              } overflow-hidden transition-all duration-300`
            : "flex w-[50%] items-center justify-center md:gap-6 xl:gap-10"
        } font-medium`}
      >
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`home flex items-center gap-1 ${
              isMobile ? "py-3 border-b border-gray-700 px-4" : ""
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
                `${isMobile ? "text-base w-full" : "text-lg"} ${
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
      <div className="flex items-center gap-10  ml-32">
        <Link to="/cart">
          <span className="relative bg-[#ffb701] lg:inline-block px-3 py-2 hidden hover:bg-zinc-700 hover:text-white duration-500 rounded-lg cursor-pointer">
            <FaOpencart className="text-[24px]" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[12px] w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            )}
          </span>
        </Link>

        {localStorage.userStored && (
          <Link to="/profile">
            <CgProfile className="text-[40px] text-white hidden lg:block"></CgProfile>
          </Link>
        )}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white p-2 absolute right-6 top-6 lg:hidden"
        >
          <MdMenu className="text-[32px]" />
        </button>
      </div>

      {isMobile && (
        <div
          className={`w-full ${
            menuOpen ? "block" : "hidden"
          } bg-black py-4 px-6 border-t border-gray-700`}
        >
          <div className="flex flex-col gap-5">
            {/* Cart Section */}
            <Link to="/cart" onClick={handleMenuItemClick}>
              <div className="relative flex items-center justify-center bg-[#ffb701] text-black px-5 py-3 rounded-lg hover:bg-yellow-600 transition duration-300">
                <span className="flex items-center gap-3 text-lg">
                  <FaOpencart className="text-2xl" />
                  Cart
                </span>
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cartItems.length}
                  </span>
                )}
              </div>
            </Link>

            {/* Profile & Auth Options */}
            {isAuthenticated ? (
              <>
                <Link to="/profile" onClick={handleMenuItemClick}>
                  <div className="flex items-center gap-3 justify-center text-white px-5 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-300">
                    <CgProfile className="text-2xl" />
                    <span className="text-lg">Profile</span>
                  </div>
                </Link>

                <button
                  onClick={() => {
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    });
                    localStorage.clear();
                    haddleSuccess("Logged out successfully!");
                    handleMenuItemClick();
                  }}
                  className="bg-red-600 text-white w-full py-3 rounded-lg hover:bg-red-700 transition duration-300"
                >
                  Log Out
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  loginWithRedirect();
                  handleMenuItemClick();
                }}
                className="bg-green-600 text-white w-full py-3 rounded-lg hover:bg-green-700 transition duration-300"
              >
                Log In
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
