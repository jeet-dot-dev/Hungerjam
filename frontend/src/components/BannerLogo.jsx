import React from "react";
import { motion } from "framer-motion";

const BannerLogo = () => {
  // Array of logos (you can dynamically pass these if needed)
  const logos = [
    "https://opc.webdigify.com/OPC02/OPC032_hungerjam/image/catalog/logo.png",
    "https://opc.webdigify.com/OPC02/OPC032_hungerjam/image/catalog/logo.png",
    "https://opc.webdigify.com/OPC02/OPC032_hungerjam/image/catalog/logo.png",
    "https://opc.webdigify.com/OPC02/OPC032_hungerjam/image/catalog/logo.png",
    "https://opc.webdigify.com/OPC02/OPC032_hungerjam/image/catalog/logo.png",
  ];

  return (
    <div className="w-full h-[70px] bg-black flex items-center overflow-hidden">
      <motion.div
        className="flex gap-[25px] whitespace-nowrap" // Flex container for smooth horizontal scroll
        animate={{
          x: ["0%", "-100%"], // Animate to scroll left out of view
        }}
        transition={{
          repeat: Infinity, // Loop forever
          duration: 10, // Adjust speed (seconds)
          ease: "linear", // Smooth, consistent scrolling
        }}
        style={{ display: "flex", width: "calc(200% + 25px)" }} // To account for the duplicated logos
      >
        {/* Duplicate logos for seamless animation */}
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="img flex-shrink-0">
            <img src={logo} alt={`logo-${index}`} className="h-[50px] w-auto" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default BannerLogo;
