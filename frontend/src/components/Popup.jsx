import React, { useState, useEffect, useContext, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { StoreContext } from "../Context/Context";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { haddleError, haddleSuccess } from "../Utils/Toastify";

// Lazy load the welcome styles component
const WelcomeStyles = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        default: ({ styleType, nickname }) => {
          const styles = {
            style1: (
              <div className="flex items-center justify-center gap-1">
                <div className="bg-gradient-to-r from-[#263821] to-[#395831] px-4 py-1.5 rounded-lg shadow-md">
                  <p className="text-[#ffb701] text-[12px] font-bold">
                    Hi, {nickname} 👋
                  </p>
                </div>
              </div>
            ),
            style2: (
              <div className="flex items-center justify-center gap-1">
                <div className="border-2 border-[#263821] px-4 py-1 rounded-md hover:bg-[#263821] hover:text-[#ffb701] transition-colors duration-300">
                  <p className="text-[12px] font-medium">
                    Welcome back, {nickname}!
                  </p>
                </div>
              </div>
            ),
            style3: (
              <div className="flex items-center justify-center gap-1">
                <div className="relative">
                  <div className="absolute w-2 h-2 bg-[#263821] rounded-full -top-1 -left-1"></div>
                  <p className="text-[#263821] text-[12px] font-medium border-b-2 border-[#263821] px-2 py-1">
                    {nickname}
                  </p>
                </div>
              </div>
            )
          };
          return styles[styleType] || null;
        }
      });
    }, 100); // Small delay to simulate module loading
  });
});

const Popup = () => {
  const [playAnimation, setPlayAnimation] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const { token, setToken } = useContext(StoreContext);
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

    // Check screen size
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    // Initial check
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);

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
          localStorage.setItem("userStored", "true");
          localStorage.setItem("nickname", user.nickname);
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

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isAuthenticated, getAccessTokenSilently, user, url]);

  // Function to toggle popup visibility on mobile
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      {isMobile && (
        <button 
          onClick={togglePopup} 
          className="fixed top-0 right-0 z-50 bg-[#ffb701] text-[#263821] p-2 rounded-bl-md"
        >
          {showPopup ? "▲" : "▼"}
        </button>
      )}
      
      <motion.div
        className={`popup ${isMobile ? 'h-auto py-2' : 'h-[50px]'} w-full bg-[#ffb701] absolute flex ${
          isMobile ? 'flex-col gap-2' : 'flex-row items-center justify-around'
        } ${isMobile && !showPopup ? 'hidden' : ''}`}
        initial={{ top: "-18rem" }}
        animate={playAnimation ? { top: "0rem" } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className={`left ${isMobile ? 'w-full px-4' : isTablet ? 'w-[70%]' : 'w-[60%]'} h-full flex ${
          isMobile ? 'flex-col gap-2' : 'justify-start'
        }`}>
          <div className="flex items-center justify-center gap-1 text-[#263821] text-[12px]">
            <FaLocationDot className="text-[#263821] text-[15px]" />
            <p>Chittaranjan, Asansol</p>
          </div>
          
          <div className={`flex items-center justify-center ${isMobile ? '' : 'ml-6'} gap-1 text-[#263821] text-[12px]`}>
            <MdEmail className="text-[#263821] text-[15px]" />
            <p>CoffeeAdda@gmail.com</p>
          </div>
          
          <div className={`flex items-center justify-center ${isMobile ? '' : 'ml-6'} gap-1 text-[#263821] text-[12px]`}>
            <IoCall className="text-[#263821] text-[15px]" />
            <p>1111+895222</p>
          </div>
          
          {localStorage.userStored && (
            <Suspense fallback={
              <div className="flex items-center justify-center ml-6 gap-1">
                <div className="bg-gray-300 animate-pulse h-6 w-24 rounded-lg"></div>
              </div>
            }>
              <div className={`${isMobile ? '' : 'ml-6'}`}>
                <WelcomeStyles 
                  styleType="style1" 
                  nickname={localStorage.getItem("nickname")} 
                />
              </div>
            </Suspense>
          )}
        </div>

        <div className={`right ${isMobile ? 'w-full px-4 pb-2' : ''} flex ${
          isMobile ? 'flex-col' : 'items-center'
        } justify-center gap-${isMobile ? '2' : '10'}`}>
          <p className="font-mono text-[#263821] text-center">Monday to Friday 8am to 10pm</p>
          <div className="btn flex justify-center items-center gap-5">
            <button
              className="bg-[#263821] text-white px-4 py-1 rounded hover:bg-[#395831] transition-colors"
              onClick={() => {
                if (isAuthenticated) {
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
              {!localStorage.getItem("userStored") ? "Log In" : "Log Out"}
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Popup;