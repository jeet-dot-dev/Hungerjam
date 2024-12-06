import React from "react";
import { motion } from "framer-motion";
import "../css/HomeCard.css";

const HeroCard = () => {
  const animation = () => {};

  return (
    <div onMouseEnter={animation} className="w-full h-[700px] bg-pink-400 ">
      <img
        src="https://demo.themexbd.com/html/sk/foodx/assets/images/fx_slider_2.jpg"
        className="object-cover w-full h-full"
        alt="Delicious Food"
      />
      <div className="absolute top-60 left-10 text-white space-y-4">
        <motion.p
          className=" heading text-4xl font-bold rock-3d-regular"
          initial={{ x: -550 }}
          animate={{ x: 50 }}
          transition={{ duration: 1.3, type: "spring" }}
        >
          Food&Adda
        </motion.p>
        <motion.p
          className="text-5xl pt-8 font-medium  .roboto-bold"
          initial={{ x: -550 }}
          animate={{ x: 50 }}
          transition={{ duration: 0.8, type: "spring", delay: 0.2 }} 
        >
          Where <motion.span    className="text-[#ffb701] font-bold">Taste</motion.span> Meets <motion.span className="text-[#ffb701] font-bold">Moments</motion.span>
        </motion.p>
        <motion.p
          className="text-lg caveat"
          initial={{ x: -550 }}
          animate={{ x: 50 }}
          transition={{ duration: 0.9, type: "spring", delay: 0.4 }}
        >
          Welcome to Food & Adda, the ultimate destination for food lovers! <br/>
          Indulge in a delightful array of dishes that satisfy every craving, <br/>
          served with a touch of love and a sprinkle of magic.  <br/>
          
        </motion.p>
      </div>
    </div>
  );
};

export default HeroCard;
