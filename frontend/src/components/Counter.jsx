import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Counter = ({ targetValue = 1250, duration = 5 }) => {
  const [count, setCount] = useState(0); // State to render the animated count
  const controls = useAnimation();
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  useEffect(() => {
    if (isInView) {
      controls.start({
        x: 1, // Dummy animation to track progress
        transition: { duration },
      });

      let start = 0;
      const interval = setInterval(() => {
        start += 1;
        const progress = Math.min(start / (duration * 60), 1); // Increment 60 times per second
        setCount(Math.floor(progress * targetValue));
        if (progress >= 1) clearInterval(interval); // Stop at targetValue
      }, 1000 / 60); // 60 frames per second
    }
  }, [isInView, controls, targetValue, duration]);

  return (
    <motion.span
      ref={ref}
      style={{ fontWeight: "bold", fontSize: "1.5rem", color: "#ffb701" }}
    >
      {count}+
    </motion.span>
  );
};

export default Counter;
