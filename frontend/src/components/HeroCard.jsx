import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../css/HomeCard.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const HeroCard = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Adjust text animation based on screen size
  const getTextAnimation = (isMobile) => {
    return {
      initial: { x: isMobile ? -300 : -550, opacity: 0 },
      animate: { x: isMobile ? 0 : 50, opacity: 1 },
    };
  };

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  return (
    <div className="w-full relative h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
      <LazyLoadImage
        src="https://res.cloudinary.com/dhdmbwnak/image/upload/v1741250367/fx_slider_2_1_m2qmuf.webp"
        alt="Delicious Food"
        effect="blur"
        wrapperClassName="w-full h-full"
        className="object-cover w-full h-full"
        threshold={200}
        placeholderSrc="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg=="
      />
      
      <div className="absolute top-1/4 left-0 right-0 text-white space-y-2 md:space-y-4 px-4 md:px-10">
        <motion.p
          className="heading text-2xl sm:text-3xl md:text-4xl font-bold rock-3d-regular text-center md:text-left"
          initial={getTextAnimation(isMobile).initial}
          animate={getTextAnimation(isMobile).animate}
          transition={{ duration: 1.3, type: "spring" }}
        >
          Food&Adda
        </motion.p>
        <motion.p
          className="text-3xl sm:text-4xl md:text-5xl pt-4 md:pt-14 font-medium roboto-bold text-center md:text-left"
          initial={getTextAnimation(isMobile).initial}
          animate={getTextAnimation(isMobile).animate}
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
          className="text-sm sm:text-base md:text-lg caveat text-center md:text-left"
          initial={getTextAnimation(isMobile).initial}
          animate={getTextAnimation(isMobile).animate}
          transition={{ duration: 2, type: "spring", delay: 0.8 }}
        >
          Welcome to Food & Adda, the ultimate destination for food lovers!{" "}
          <br className="hidden md:block" />
          Indulge in a delightful array of dishes that satisfy every craving,{" "}
          <br className="hidden md:block" />
          served with a touch of love and a sprinkle of magic...
        </motion.p>
        <motion.div 
          className="flex justify-center md:justify-start md:ml-14 mt-4 md:mt-10"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
        >
          <Link to="/menu">
            <span className="inline-block px-4 sm:px-5 py-2 sm:py-3 bg-[#ffb701] hover:bg-zinc-700 text-white hover:text-white duration-500 rounded-lg cursor-pointer text-base sm:text-lg font-medium">
              Explore Menu
            </span>
          </Link>
        </motion.div>
      </div>

      {!isMobile && (
        <motion.div
          className={`absolute ${isTablet ? 'top-1/4 right-0' : 'top-40 right-3'}`}
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
        >
          <LazyLoadImage
            src="https://res.cloudinary.com/dhdmbwnak/image/upload/v1741250512/fx_slide_side_1_r8bgyn.webp"
            alt="Food decoration"
            effect="blur"
            wrapperClassName={`${isTablet ? 'w-[300px] h-[250px]' : 'w-[400px] h-[350px] md:w-[500px] md:h-[450px] lg:w-[600px] lg:h-[500px]'}`}
            className="object-contain w-full h-full"
            threshold={200}
            placeholderSrc="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg=="
          />
        </motion.div>
      )}
    </div>
  );
};

export default HeroCard;