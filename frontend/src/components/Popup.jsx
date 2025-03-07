import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { haddleError, haddleSuccess } from "../Utils/Toastify";

const Popup = () => {
  const [playAnimation, setPlayAnimation] = useState(true);
  const url = import.meta.env.VITE_API_URL;
  const [showPopup, setShowPopup] = useState(true);

  const {
    loginWithRedirect,
    user,
    isAuthenticated,
    logout,
    getAccessTokenSilently,
  } = useAuth0();

  useEffect(() => {
    setPlayAnimation(true);
    const storeUser = async () => {
      if (isAuthenticated && !localStorage.getItem("userStored")) {
        try {
          const token = await getAccessTokenSilently();
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
          localStorage.setItem("userStored", "true"); // Set the flag
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

    storeUser();
  }, [isAuthenticated]);

  return (
    <motion.div
      className="popup h-[50px] w-full bg-[#ffb701] absolute lg:flex flex-row items-center justify-around hidden "
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
      </div>

      <div className="right flex items-center justify-center gap-10">
        <p className="font-mono text-[#263821] text-center">
          Monday to Friday 8am to 10pm
        </p>
        <div className="btn lg:flex justify-center items-center gap-5 sm:hidden mr-1">
          <button
            className="bg-[#263821] text-white px-4 py-1 rounded hover:bg-[#395831] transition-colors"
            onClick={() => {
              if (localStorage.userStored) {
                logout({
                  logoutParams: { returnTo: window.location.origin },
                });
                localStorage.clear();
                haddleSuccess("Logged out successfully!");
              } else {
                loginWithRedirect();
              }
            }}
          >
            {!localStorage.userStored ? "Log In" : "Log Out"}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Popup;
