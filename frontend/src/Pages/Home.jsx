import React from "react";
import { motion } from "framer-motion";
import "../css/HomeCard.css";
import add from "../Assets/restaurant_ad.mp4";
import FoodCardsHome from '../components/FoodCardsHome'
import BannerLogo from '../components/BannerLogo'
import DeliverySection from "../components/DeliverySection";
import Footer from "../components/Footer";

const Hero = () => {
  return (
    <>
      <div className="sec1 w-full h-[1000px] -z-10">
        <div className="home w-full h-[450px]  flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
          {/* Left Section with Text */}
          <div className="relative w-[50%] h-full flex flex-col items-center justify-center  px-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5 }}
            >
              <h1 className="text-3xl font-bold text-yellow-500 text-center rasa">
                The Fine Art of HungerJam's Food Services
              </h1>
              <p className="text-[13px] text-gray-300 text-center mt-3">
                HungerJam brings to the table a fusion of comfort and innovation
                in every bite. From our legendary rolls to the sizzling flavors
                of chowmein, each dish is crafted with love and precision to
                satisfy your cravings. And our creamy, cheesy pasta combos?
                They’re a delight for every palate, perfect for a quick lunch or
                an indulgent treat.
              </p>
            </motion.div>
            <div className="icon flex items-center justify-center gap-32 mt-10">
              <div className="1st  flex flex-col items-center justify-center">
                <motion.img
                  initial={{ rotate: "0deg" }}
                  whileHover={{ rotateY: "180deg" }}
                  transition={{ duration: 1 }}
                  src="https://wordpress.themeholy.com/restar/wp-content/uploads/2024/05/feature_card_2.svg"
                  alt=""
                  className="h-12 w-12"
                />
                <p className="text-center text-xs mt-3 lavishly-yours-regular hover:text-[#97804e] cursor-default  duration-500">
                  Original Recipes
                </p>
              </div>
              <div className="2nd  flex flex-col items-center justify-center">
                <motion.img
                  initial={{ rotate: "0deg" }}
                  whileHover={{ rotateY: "180deg" }}
                  transition={{ duration: 1 }}
                  src="https://wordpress.themeholy.com/restar/wp-content/uploads/2024/05/feature_card_1.svg"
                  alt=""
                  className="h-12 w-12 "
                />
                <p className="text-center text-xs mt-3 lavishly-yours-regular hover:text-[#97804e] cursor-default  duration-500">
                  Discount Voucher
                </p>
              </div>
              <div className="2nd flex flex-col items-center justify-center">
                <motion.img
                  initial={{ rotate: "0deg" }}
                  whileHover={{ rotateY: "180deg" }}
                  transition={{ duration: 1 }}
                  src="https://wordpress.themeholy.com/restar/wp-content/uploads/2024/05/feature_card_3.svg"
                  alt=""
                  className="h-13 w-13"
                />
                <p className="text-center text-xs mt-2 lavishly-yours-regular hover:text-[#97804e] cursor-default  duration-500">
                  Fast Serve On Table
                </p>
              </div>
            </div>
          </div>

          {/* Right Section with Video */}
          <div className="w-[50%] h-full flex flex-col items-center justify-center space-y-4">
            <video
              className="w-[80%] h-[85%] rounded-lg shadow-lg border-4 border-yellow-500"
              src={add}
              autoPlay
              loop
              muted
            />
          </div>
        </div>
        <div className="sec2 w-full h-[500px] bg-white flex  justify-center ">
          <div className="post1 w-[55%] ">
            <div className="w-[90%] h-[90%] m-5 rounded-3xl relative ">
              <img
                src="https://img.freepik.com/premium-photo/ingredients-cooking-food-background-top-view-black-background_1040174-351.jpg"
                className="w-full h-full rounded-3xl"
                alt=""
              />
              <div className="left-content absolute top-7 left-10 text-white ">
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 1.5 }}
                  className="text-5xl rasa text-[#ffb701] capitalize "
                >
                  {" "}
                  Double the Flavor
                </motion.span>
                <motion.img
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
                  src="https://foodking-react.vercel.app/assets/img/offer/50percent-off-2.png"
                  className="top-[20px] left-[340px] absolute"
                  alt=""
                />
                <br />
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 1.5 }}
                  className="roboto-bold"
                >
                  Eat, Save, Repeat – Today’s Offers <br /> are Unbeatable!
                </motion.span>
              </div>
              <motion.img
                initial={{ x: 0 }}
                whileHover={{
                  scale: 1.1,
                }}
                transition={{
                  duration: 0.2, // Time for one back-and-forth cycle
                  ease: "easeInOut", // Smooth easing
                }}
                src="https://foodking-react.vercel.app/assets/img/food/roller-box.png"
                className="absolute top-[100px] left-[50px] w-[400px] h-[350px]"
                alt=""
              />
            </div>
          </div>
          <div className="post2 w-[45%] relative">
            <div className="w-[90%] h-[90%] mt-5 rounded-3xl ">
              <img
                src="https://img.pikbest.com/wp/202344/assorted-an-assortment-of-various-fast-food-items-on-a-textured-gray-table_9906835.jpg!bw700"
                className="w-full h-full rounded-3xl"
                alt=""
              />
              <div className="left-content absolute top-12 left-10 text-white ">
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 2 }}
                  className="text-4xl   text-[#ffb701] roboto-bold  "
                >
                  {" "}
                  Chow Down on Savings
                </motion.span>
                <motion.img
                  initial={{ rotate: 0 }} // Starts at 0 degrees
                  animate={{
                    rotate: [0, 360], // Rotates fully around
                  }}
                  transition={{
                    duration: 7, // Time for one full rotation
                    ease: "linear", // Ensures smooth and consistent rotation
                    repeat: Infinity, // Infinite looping
                  }}
                  src="https://foodking-react.vercel.app/assets/img/shape/spicy.png"
                  className="top-[30px] left-[340px] absolute"
                  alt="Spicy Image"
                />

                <br />
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 1.5 }}
                  className="roboto-bold"
                >
                  Today's Treat: Combos That’ll Make You <br /> Crave for More!
                </motion.span>
              </div>
            </div>
          </div>
        </div>
        <div className="bar w-full h-[50px] bg-[#f3efe3] mt-5  flex justify-center items-center gap-3" >
          <img src="https://wordpress.themeholy.com/restar/wp-content/plugins/restar-core/assets/img/title_icon.svg" 
           className="mt-3"
           alt="" />
           <span className="mt-5 text-[#ddc99e] font-bold">What’s on the Table</span>
        </div>
        <FoodCardsHome></FoodCardsHome>
        <BannerLogo/>
        <DeliverySection/>
        <Footer/>
      </div>
    </>
  );
};

export default Hero;
