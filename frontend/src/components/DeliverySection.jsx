import React from "react";
import { motion } from "framer-motion";
import Counter from "./Counter"; // Import the Counter component
import "../css/HomeCard.css";

const DeliverySection = () => {
  return (
    <div className="w-full h-[600px] bg-[#f4f1ea] flex relative items-center justify-center">
      <div className="green w-[90%] bg-[#00813e] py-10 px-10 rounded-3xl flex items-center relative overflow-hidden shadow-lg">
        {/* Main Delivery Image */}
        <motion.img
          initial={{ rotateX: "80deg" }}
          whileInView={{ rotateX: "0deg" }}
          transition={{ duration: 2 }}
          src="https://res.cloudinary.com/dhdmbwnak/image/upload/v1741243217/delivery-man_guqsf5.webp"
          alt="Delivery Man"
          className="w-[300px] h-[300px] object-contain"
        />

        {/* Content Section */}
        <div className="content ml-10">
          <h1 className="roboto-bold text-5xl text-[#ffb701]">
            Free Shipping?
          </h1>
          <p className="text-xl text-[#fcffff] mt-4 leading-relaxed">
            It’s on us –{" "}
            <span className="text-[#ffb701] font-semibold">free delivery</span>{" "}
            for all!
            <br />
            No minimum order value, no restrictions. Shop your favorites now and
            enjoy seamless, reliable delivery with no extra cost.
          </p>

          {/* Call to Action Button */}
          <motion.button
            className="mt-6 bg-[#ffb701] text-[#00813e] font-bold py-3 px-8 rounded-full shadow-md cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Know More
          </motion.button>

          {/* Number of Orders Section */}
          <div className="mt-6">
            <p className="text-lg text-[#fcffff] font-semibold">
              Number of orders till now:
            </p>
            <p className="text-3xl">
              <Counter targetValue={1250} duration={5} />
            </p>
          </div>
        </div>

        {/* Decorative Background Images */}
        <img
          src="https://res.cloudinary.com/dhdmbwnak/image/upload/v1741243217/delivery-man_guqsf5.webp"
          className="w-[250px] h-[200px] opacity-20 absolute top-[50%] right-[20%] translate-x-1/2 translate-y-1/2"
          alt="Delivery Man Background"
        />
        <img
          src="https://res.cloudinary.com/dhdmbwnak/image/upload/v1741243217/arrow-shape_twpido.webp"
          className="absolute bottom-10 left-[30%] opacity-50 w-[150px] "
          alt="Arrow Shape"
        />
      </div>
    </div>
  );
};

export default DeliverySection;
