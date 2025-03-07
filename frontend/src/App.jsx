import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Form from './Pages/Form'
import Popup from "./components/Popup";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import CartPage from "./Pages/Cart";
import ProtectedRoute from "./components/ProtectedRoute";
import ProfilePage from "./Pages/ProfilePage";

const App = () => {
  const [scrollValue, setScrollValue] = useState(0); // Tracks scroll progress
  const { scrollYProgress } = useScroll();


  // Update scroll progress value
  useEffect(() => {
    scrollYProgress.on("change", setScrollValue);
  }, [scrollYProgress]);

  return (
    <div className=" flex flex-col ">
      {/* Fixed Navbar with optional Popup */}
      <motion.div className="w-screen h-[50px] fixed z-50">
      <Popup />
        <Navbar scrollValue={scrollValue} />
      </motion.div>

      {/* Routes for navigating between pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/form"
          element={
            <ProtectedRoute>
              <Form />
            </ProtectedRoute>
          }
        />
        
      </Routes>
    </div>
    
  );
};

export default App;
