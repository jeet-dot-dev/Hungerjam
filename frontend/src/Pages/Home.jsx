import React, { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../css/HomeCard.css";
import add from "../Assets/restaurant_ad.mp4";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// Lazy load components
const FoodCardsHome = lazy(() => import("../components/FoodCardsHome"));
const BannerLogo = lazy(() => import("../components/BannerLogo"));
const DeliverySection = lazy(() => import("../components/DeliverySection"));
const Footer = lazy(() => import("../components/Footer"));
const HeroCard = lazy(() => import("../components/HeroCard"));

// Loading fallback
const LoadingFallback = () => (
  <div className="w-full h-40 flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
  </div>
);

const Hero = () => {
  
  
  return (
    <>
      <Suspense fallback={<LoadingFallback />}>
        <HeroCard  />
      </Suspense>
      <div className="sec1 w-full md:h-[1000px] -z-10">
        {/* First section with text and video */}
        <div className="home w-full md:h-[450px] py-8 md:py-0 flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
          {/* Left Section with Text */}
          <div className="relative w-full md:w-[50%] h-full flex flex-col items-center justify-center px-4 md:px-8 mb-8 md:mb-0">
            <motion.div
            layoutId="heading"
            initial={ { opacity: 0, x: -50 }}
            animate={ { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5 }}
              className="w-full max-w-md"
            >
              <h1 className="text-2xl md:text-3xl font-bold text-yellow-500 text-center rasa">
                The Fine Art of HungerJam's Food Services
              </h1>
              <p className="text-xs md:text-[13px] text-gray-300 text-center mt-3">
                HungerJam brings to the table a fusion of comfort and innovation
                in every bite. From our legendary rolls to the sizzling flavors
                of chowmein, each dish is crafted with love and precision to
                satisfy your cravings. And our creamy, cheesy pasta combos?
                They're a delight for every palate, perfect for a quick lunch or
                an indulgent treat.
              </p>
            </motion.div>
            <div className="icon flex flex-wrap items-center justify-center gap-8 md:gap-16 lg:gap-32 mt-6 md:mt-10">
              <div className="flex flex-col items-center justify-center">
                <motion.div
                  initial={{ rotate: "0deg" }}
                  whileHover={{ rotateY: "180deg" }}
                  transition={{ duration: 1 }}
                >
                  <LazyLoadImage
                    src="https://wordpress.themeholy.com/restar/wp-content/uploads/2024/05/feature_card_2.svg"
                    alt="Original Recipes"
                    effect="blur"
                    height={48}
                    width={48}
                    className="h-10 w-10 md:h-12 md:w-12"
                    threshold={200}
                    placeholderSrc="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg=="
                  />
                </motion.div>
                <p className="text-center text-xs mt-2 md:mt-3 lavishly-yours-regular hover:text-[#97804e] cursor-default duration-500">
                  Original Recipes
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <motion.div
                  initial={{ rotate: "0deg" }}
                  whileHover={{ rotateY: "180deg" }}
                  transition={{ duration: 1 }}
                >
                  <LazyLoadImage
                    src="https://wordpress.themeholy.com/restar/wp-content/uploads/2024/05/feature_card_1.svg"
                    alt="Discount Voucher"
                    effect="blur"
                    height={48}
                    width={48}
                    className="h-10 w-10 md:h-12 md:w-12"
                    threshold={200}
                    placeholderSrc="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg=="
                  />
                </motion.div>
                <p className="text-center text-xs mt-2 md:mt-3 lavishly-yours-regular hover:text-[#97804e] cursor-default duration-500">
                  Discount Voucher
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <motion.div
                  initial={{ rotate: "0deg" }}
                  whileHover={{ rotateY: "180deg" }}
                  transition={{ duration: 1 }}
                >
                  <LazyLoadImage
                    src="https://wordpress.themeholy.com/restar/wp-content/uploads/2024/05/feature_card_3.svg"
                    alt="Fast Serve On Table"
                    effect="blur"
                    height={52}
                    width={52}
                    className="h-11 w-11 md:h-13 md:w-13"
                    threshold={200}
                    placeholderSrc="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg=="
                  />
                </motion.div>
                <p className="text-center text-xs mt-1 md:mt-2 lavishly-yours-regular hover:text-[#97804e] cursor-default duration-500">
                  Fast Serve On Table
                </p>
              </div>
            </div>
          </div>

          {/* Right Section with Video */}
          <div className="w-full md:w-[50%] h-full flex flex-col items-center justify-center p-4 md:p-0 space-y-4">
            <video
              className="w-full md:w-[80%] h-auto md:h-[85%] rounded-lg shadow-lg border-4 border-yellow-500"
              src={add}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
          </div>
        </div>

        {/* Promotion sections */}
        {/* <div className="sec2 w-full md:h-[500px] bg-white flex flex-col md:flex-row justify-center">
          <div className="post1 w-full md:w-[55%] mb-4 md:mb-0">
            <div className="w-[95%] md:w-[90%] h-auto md:h-[90%] mx-auto md:m-5 rounded-3xl relative">
              <LazyLoadImage
                src="https://res.cloudinary.com/dhdmbwnak/image/upload/v1741329141/ingredients-cooking-food-background-top-view-black-background_1040174-351_bflgxk.webp"
                alt="Food background"
                effect="blur"
                className="w-full h-full rounded-3xl"
                threshold={200}
                placeholderSrc="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg=="
              />
              <div className="left-content absolute top-4 md:top-7 left-4 md:left-10 text-white">
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 1.5 }}
                  className="text-3xl md:text-5xl rasa text-[#ffb701] capitalize"
                >
                  Double the Flavor
                </motion.span>
                <motion.div
                  initial={{ x: 0 }}
                  animate={{
                    x: [5, 0, 5],
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="relative h-16 w-16 md:h-auto md:w-auto"
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/dhdmbwnak/image/upload/v1741329140/50percent-off-2_qzqcm3.webp"
                    alt="50% off"
                    effect="blur"
                    className="absolute top-0 right-[-50px] md:top-[20px] md:left-[340px] w-16 md:w-auto"
                    threshold={200}
                    placeholderSrc="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg=="
                  />
                </motion.div>
                <br />
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 1.5 }}
                  className="text-sm md:text-base roboto-bold"
                >
                  Eat, Save, Repeat – Today's Offers <br /> are Unbeatable!
                </motion.span>
              </div>
              <motion.div
                initial={{ x: 0 }}
                whileHover={{
                  scale: 1.1,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                }}
                className="absolute bottom-0 left-0 right-0 md:top-[100px] md:left-[50px] flex justify-center md:justify-start"
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/dhdmbwnak/image/upload/v1741329141/roller-box_icgpkg.webp"
                  alt="Roller box"
                  effect="blur"
                  className="w-[250px] h-[200px] md:w-[400px] md:h-[350px]"
                  threshold={200}
                  placeholderSrc="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg=="
                />
              </motion.div>
            </div>
          </div>
          <div className="post2 w-full md:w-[45%] relative">
            <div className="w-[95%] md:w-[90%] h-auto md:h-[90%] mx-auto md:mt-5 rounded-3xl">
              <LazyLoadImage
                src="https://res.cloudinary.com/dhdmbwnak/image/upload/v1741329141/assorted-an-assortment-of-various-fast-food-items-on-a-textured-gray-table_9906835_1_qzv0hi.webp"
                alt="Fast food items"
                effect="blur"
                className="w-full h-full rounded-3xl"
                threshold={200}
                placeholderSrc="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg=="
              />
              <div className="left-content absolute top-4 md:top-12 left-4 md:left-10 text-white">
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 2 }}
                  className="text-2xl md:text-4xl text-[#ffb701] roboto-bold"
                >
                  Chow Down on Savings
                </motion.span>
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 7,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  className="relative h-16 w-16 md:h-auto md:w-auto"
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/dhdmbwnak/image/upload/v1741329456/spicy_kqgrw1.webp"
                    alt="Spicy Image"
                    effect="blur"
                    className="absolute top-0 right-[-50px] md:top-[30px] md:left-[340px] w-16 md:w-auto"
                    threshold={200}
                    placeholderSrc="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg=="
                  />
                </motion.div>
                <br />
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 1.5 }}
                  className="text-sm md:text-base roboto-bold"
                >
                  Today's Treat: Combos That'll Make You <br /> Crave for More!
                </motion.span>
              </div>
            </div>
          </div>
        </div> */}

        {/* Menu section title bar */}
        <div className="bar w-full h-[50px] bg-[#f3efe3] mt-5 flex justify-center items-center gap-3">
          <LazyLoadImage
            src="https://wordpress.themeholy.com/restar/wp-content/plugins/restar-core/assets/img/title_icon.svg"
            alt="Title icon"
            effect="blur"
            className="mt-3"
            threshold={200}
            placeholderSrc="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg=="
          />
          <span className="mt-5 text-[#ddc99e] font-bold">
            What's on the Table
          </span>
        </div>

        {/* Lazy loaded components */}
        <Suspense fallback={<LoadingFallback />}>
          <FoodCardsHome />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <BannerLogo />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <DeliverySection />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default Hero;
