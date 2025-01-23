import React from "react";
import { motion } from "framer-motion";
import "../css/HomeCard.css";
import { Link } from "react-router-dom";

const HeroCard = () => {
 

  return (
    <div  className="w-full h-[700px]   -z-10 ">
      <img
        src="https://demo.themexbd.com/html/sk/foodx/assets/images/fx_slider_2.jpg"
        className="object-cover w-full h-full"
        alt="Delicious Food"
      />
      <div className="absolute top-64 left-10 text-white space-y-4">
        <motion.p
          className=" heading text-4xl font-bold rock-3d-regular"
          initial={{ x: -550, opacity:0 }}
          animate={{ x: 50 ,opacity:1 }}
          transition={{ duration: 1.3, type: "spring" }}
          
        >
          Food&Adda
        </motion.p>
        <motion.p
          className="text-5xl pt-14 font-medium  .roboto-bold"
          initial={{ x: -750 ,opacity:0 }}
          animate={{ x: 50,opacity:1 }}
          transition={{ duration: 1, type: "spring", delay: 0.5 }}
        >
          Where{" "}
          <motion.span className="text-[#ffb701] font-bold">Taste</motion.span>{" "}
          Meets{" "}
          <motion.span className="text-[#ffb701] font-bold">
            Moments
          </motion.span>
        </motion.p>
        <motion.p
          className="text-lg caveat"
          initial={{ x: -600,opacity:0}}
          animate={{ x: 50,opacity:1 }}
          transition={{ duration: 2, type: "spring", delay: 0.8 }}
        >
          Welcome to Food & Adda, the ultimate destination for food lovers!{" "}
          <br />
          Indulge in a delightful array of dishes that satisfy every craving,{" "}
          <br />
          served with a touch of love and a sprinkle of magic.... <br />
        </motion.p>
        <motion.div className="btn text-white ml-14 mt-10 cursor-pointer "
          initial={{y:300}}
          animate={{y:0}}
         transition={{duration:1,ease:"easeIn"}}
        >
        <span className="h-[50px] bg-[#ffb701] inline-block px-5 py-3 hover:bg-zinc-700 hover:text-white  duration-500 rounded-lg cursor-pointer text-[18px]">
          <Link to='/menu'>Explore More</Link>
        </span>
        </motion.div>
      </div>

      <motion.div
        className=" top-40 right-3  absolute"
        initial={{ x: 0 }}
        animate={{
          x: [5, 0, 5], // Moves from 600px -> 0px -> 600px
        }}
        transition={{
          duration: 1.5, // Time for one back-and-forth cycle
          ease: "easeInOut", // Smooth easing
          repeat: Infinity, // Infinite looping
          repeatType: "reverse", // Reverse the animation direction
        }}
      >
        <img
          src="https://demo.themexbd.com/html/sk/foodx/assets/images/fx_slide_side.png"
          alt=""
          className="w-[600px] h-[500px]"
        />
      </motion.div>
    </div>
  );
};

export default HeroCard;
