import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { StoreContext } from "../Context/Context";

const Popup = () => {
  const [playAnimation, setPlayAnimation] = useState(true);
  const { token, setToken } = useContext(StoreContext);

  useEffect(() => {
    setPlayAnimation(true);
  }, []);

  //handleclick
  const handleClick = () => {
    console.log(localStorage.token);
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInuser");
    setToken("");
    navigate("/");
  };

  // Choose one of these welcome message styles
  const welcomeStyles = {
    // Style 1: Gradient background with shadow
    style1: (
      <div className="flex items-center justify-center ml-6 gap-1">
        {localStorage.token && (
          <div className="bg-gradient-to-r from-[#263821] to-[#395831] px-4 py-1.5 rounded-lg shadow-md">
            <p className="text-[#ffb701] text-[12px] font-bold">
              Hi, {localStorage.loggedInuser} 👋
            </p>
          </div>
        )}
      </div>
    ),

    // Style 2: Border with hover effect
    style2: (
      <div className="flex items-center justify-center ml-6 gap-1">
        {localStorage.token && (
          <div className="border-2 border-[#263821] px-4 py-1 rounded-md hover:bg-[#263821] hover:text-[#ffb701] transition-colors duration-300">
            <p className="text-[12px] font-medium">
              Welcome back, {localStorage.loggedInuser}!
            </p>
          </div>
        )}
      </div>
    ),

    // Style 3: Underlined with dot accent
    style3: (
      <div className="flex items-center justify-center ml-6 gap-1">
        {localStorage.token && (
          <div className="relative">
            <div className="absolute w-2 h-2 bg-[#263821] rounded-full -top-1 -left-1"></div>
            <p className="text-[#263821] text-[12px] font-medium border-b-2 border-[#263821] px-2 py-1">
              {localStorage.loggedInuser}
            </p>
          </div>
        )}
      </div>
    ),
  };

  return (
    <motion.div
      className="popup w-full h-[50px] bg-[#ffb701] absolute flex items-center justify-around z-30"
      initial={{ top: "-18rem" }}
      animate={playAnimation ? { top: "0rem" } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="left w-[60%] h-full flex justify-start">
        <div className="flex items-center justify-center gap-1 text-[#263821] text-[12px]">
          <FaLocationDot className="text-[#263821] text-[15px]"></FaLocationDot>
          <p>Chittaranjan,Asansol</p>
        </div>
        <div className="flex items-center justify-center ml-6 gap-1 text-[#263821] text-[12px]">
          <MdEmail className="text-[#263821] text-[15px]"></MdEmail>
          <p>CoffeeAdda@gmail.com</p>
        </div>
        <div className="flex items-center justify-center ml-6 gap-1 text-[#263821] text-[12px]">
          <IoCall className="text-[#263821] text-[15px]"></IoCall>
          <p>1111+895222</p>
        </div>
        {/* Replace the welcome div with any of the styles above */}
        {welcomeStyles.style1} {/* Or style2 or style3 */}
      </div>
      <div className="right flex items-center justify-center gap-10">
        <p className="font-mono text-[#263821]">
          Monday to Friday 8am to 10pm{" "}
        </p>
        <div className="btn flex justify-between items-center gap-5">
          {localStorage.token ? (
            <>
              {" "}
              <Link onClick={handleClick} className="font-semibold">
                <div className="flex">
                  <p>Logout</p>
                  <IoIosLogOut className="mt-1 ml-1"></IoIosLogOut>
                </div>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="font-semibold">
                Signup/Login
              </Link>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Popup;
