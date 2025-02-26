import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { StoreContext } from "../Context/Context";
import { useAuth0 } from "@auth0/auth0-react";

import axios from "axios";
import { haddleError, haddleSuccess } from "../Utils/Toastify";

const Popup = () => {
  const [playAnimation, setPlayAnimation] = useState(true); // Animation control state
  const { token, setToken } = useContext(StoreContext); // Context for token management
  const url = import.meta.env.VITE_API_URL; // API URL from environment variables

  const {
    loginWithRedirect,
    user,
    isAuthenticated,
    logout,
    getAccessTokenSilently,
  } = useAuth0();

  useEffect(() => {
    setPlayAnimation(true); // Trigger animation

    const storeUser = async () => {
      if (isAuthenticated && !localStorage.getItem("userStored")) {
        try {
          const token = await getAccessTokenSilently(); // Get Auth0 token
          console.log("token:",token);
          const response = await axios.post(
            `${url}/api/user/signup`,
            {
              email: user.email,
              name: user.name,
              picture: user.picture,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );
          console.log(response);
          localStorage.setItem("userStored", "true"); // Set the flag
          localStorage.setItem("nickname", user.nickname); // Set the flag
          haddleSuccess(response.data.message);
        } catch (error) {
          console.error(
            "Error storing user:",
            error.response?.data?.message || error.message
          );
          haddleError(error.response?.data?.message);
        }
      }
    };

    storeUser(); // Store user details
  }, [isAuthenticated, getAccessTokenSilently, user, url]);

  console.log(localStorage.getItem("nickname"));
  // Welcome message styles
  const welcomeStyles = {
    style1: (
      <div className="flex items-center justify-center ml-6 gap-1">
        {localStorage.userStored && (
          <div className="bg-gradient-to-r from-[#263821] to-[#395831] px-4 py-1.5 rounded-lg shadow-md">
            <p className="text-[#ffb701] text-[12px] font-bold">
              Hi, {localStorage.getItem("nickname")} 👋
            </p>
          </div>
        )}
      </div>
    ),
    style2: (
      <div className="flex items-center justify-center ml-6 gap-1">
        {localStorage.userStored && (
          <div className="border-2 border-[#263821] px-4 py-1 rounded-md hover:bg-[#263821] hover:text-[#ffb701] transition-colors duration-300">
            <p className="text-[12px] font-medium">
              Welcome back, {localStorage.getItem("nickname")}!
            </p>
          </div>
        )}
      </div>
    ),
    style3: (
      <div className="flex items-center justify-center ml-6 gap-1">
        {localStorage.userStored && (
          <div className="relative">
            <div className="absolute w-2 h-2 bg-[#263821] rounded-full -top-1 -left-1"></div>
            <p className="text-[#263821] text-[12px] font-medium border-b-2 border-[#263821] px-2 py-1">
              {localStorage.getItem("nickname")}
            </p>
          </div>
        )}
      </div>
    ),
  };

  return (
    <motion.div
      className="popup w-full h-[50px] bg-[#ffb701] absolute flex items-center justify-around  "
      initial={{ top: "-18rem" }}
      animate={playAnimation ? { top: "0rem" } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="left w-[60%] h-full flex justify-start">
        <div className="flex items-center justify-center gap-1 text-[#263821] text-[12px]">
          <FaLocationDot className="text-[#263821] text-[15px]" />
          <p>Chittaranjan, Asansol</p>
        </div>
        <div className="flex items-center justify-center ml-6 gap-1 text-[#263821] text-[12px]">
          <MdEmail className="text-[#263821] text-[15px]" />
          <p>CoffeeAdda@gmail.com</p>
        </div>
        <div className="flex items-center justify-center ml-6 gap-1 text-[#263821] text-[12px]">
          <IoCall className="text-[#263821] text-[15px]" />
          <p>1111+895222</p>
        </div>
        {welcomeStyles.style1} {/* Replace with style2 or style3 as needed */}
      </div>

      <div className="right flex items-center justify-center gap-10">
        <p className="font-mono text-[#263821]">Monday to Friday 8am to 10pm</p>
        <div className="btn flex justify-between items-center gap-5">
          <button
            onClick={() => {
              // If the user is authenticated, log out and remove the data from localStorage
              if (isAuthenticated) {
                logout({
                  logoutParams: { returnTo: window.location.origin },
                });

                // Removing items from localStorage after logging out
                localStorage.removeItem("nickname");
                localStorage.removeItem("userStored");

                haddleSuccess("Logged out successfully!");
              } else {
                loginWithRedirect(); // Log in if not authenticated
              }
            }}
          >
            {!localStorage.getItem("userStored") ? "Log In" : "Log Out"}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Popup;