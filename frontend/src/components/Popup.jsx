import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Popup = () => {
  const [playAnimation, setPlayAnimation] = useState(true);

  useEffect(() => {
    setPlayAnimation(true); // Trigger animation after component mounts
  }, []);

  return (
    <motion.div
      className="popup w-full h-[50px] bg-[#ffb701] absolute flex items-center justify-around z-30 "
      initial={{ top: "-18rem" }}
      animate={playAnimation ? { top: "0rem" } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }} // Adding easing
    >
      <div className="left w-[60%] h-full flex justify-start ">
        <div className="flex items-center justify-center  gap-1  text-[#263821] text-[12px]  ">
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
      </div>
      <div className="right flex items-center justify-center gap-10">
        <p className="font-mono text-[#263821]">
          Monday to Friday 8am to 10pm{" "}
        </p>
        <div className="btn flex justify-between items-center gap-5">
          <Link to="/login" className="font-semibold">
            Login
          </Link>
          <Link to="/signup">SignUp</Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Popup;
