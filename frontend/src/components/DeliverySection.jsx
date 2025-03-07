import React, { Suspense, lazy, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../css/HomeCard.css";

// Lazy load the Counter component
const Counter = lazy(() => import("./Counter"));

const DeliverySection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Image preloading
  useEffect(() => {
    const imageUrls = [
      "https://res.cloudinary.com/dhdmbwnak/image/upload/v1741243217/delivery-man_guqsf5.webp",
      "https://res.cloudinary.com/dhdmbwnak/image/upload/v1741243217/arrow-shape_twpido.webp"
    ];
    
    const preloadImages = imageUrls.map((url) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve();
        img.onerror = () => resolve();
      });
    });

    Promise.all(preloadImages).then(() => setIsLoaded(true));
  }, []);

  return (
    <div className="w-full h-auto md:h-[600px] bg-[#f4f1ea] flex relative items-center justify-center py-8">
      <div className="green w-[95%] md:w-[90%] bg-[#00813e] py-6 md:py-10 px-4 md:px-10 rounded-3xl flex flex-col md:flex-row items-center relative overflow-hidden shadow-lg">
        {/* Main Delivery Image */}
        <motion.img
          initial={{ rotateX: "80deg" }}
          whileInView={{ rotateX: "0deg" }}
          transition={{ duration: 2 }}
          src="https://res.cloudinary.com/dhdmbwnak/image/upload/v1741243217/delivery-man_guqsf5.webp"
          alt="Delivery Man"
          className="w-[200px] md:w-[300px] h-[200px] md:h-[300px] object-contain"
          loading="lazy"
        />

        {/* Content Section */}
        <div className="content mt-6 md:mt-0 md:ml-10 text-center md:text-left">
          <h1 className="roboto-bold text-3xl md:text-5xl text-[#ffb701]">
            Free Shipping?
          </h1>
          <p className="text-lg md:text-xl text-[#fcffff] mt-4 leading-relaxed">
            It's on us –{" "}
            <span className="text-[#ffb701] font-semibold">free delivery</span>{" "}
            for all!
            <br />
            No minimum order value, no restrictions. Shop your favorites now and
            enjoy seamless, reliable delivery with no extra cost.
          </p>

          {/* Call to Action Button */}
          <motion.button
            className="mt-6 bg-[#ffb701] text-[#00813e] font-bold py-2 md:py-3 px-6 md:px-8 rounded-full shadow-md cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Know More
          </motion.button>

          {/* Number of Orders Section */}
          <div className="mt-6">
            <p className="text-base md:text-lg text-[#fcffff] font-semibold">
              Number of orders till now:
            </p>
            <p className="text-2xl md:text-3xl">
              <Suspense fallback={<div>Loading...</div>}>
                {isLoaded && <Counter targetValue={1250} duration={5} />}
              </Suspense>
            </p>
          </div>
        </div>

        {/* Decorative Background Images */}
        {isLoaded && (
          <>
            <img
              src="https://res.cloudinary.com/dhdmbwnak/image/upload/v1741243217/delivery-man_guqsf5.webp"
              className="hidden md:block w-[150px] md:w-[250px] h-[120px] md:h-[200px] opacity-20 absolute top-[50%] right-[20%] translate-x-1/2 translate-y-1/2"
              alt="Delivery Man Background"
              loading="lazy"
            />
            <img
              src="https://res.cloudinary.com/dhdmbwnak/image/upload/v1741243217/arrow-shape_twpido.webp"
              className="absolute bottom-4 md:bottom-10 left-[30%] opacity-50 w-[100px] md:w-[150px]"
              alt="Arrow Shape"
              loading="lazy"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default DeliverySection;