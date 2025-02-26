import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Popup from "./components/Popup";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Cart from "./Pages/Cart";
import { useAuth0 } from "@auth0/auth0-react";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const [show, setShow] = useState(true); // Controls popup visibility
  const [scrollValue, setScrollValue] = useState(0); // Tracks scroll progress
  const { scrollYProgress } = useScroll();

  const {
    loginWithRedirect,
    user,
    isAuthenticated,
    logout,
    getAccessTokenSilently,
  } = useAuth0();

  // Update scroll progress value
  useEffect(() => {
    scrollYProgress.on("change", setScrollValue);
  }, [scrollYProgress]);

  return (
    <div className="w-screen flex flex-col ">
      {/* Fixed Navbar with optional Popup */}
      <motion.div className="w-screen h-[50px] fixed">
        {show && <Popup />}
        <Navbar show={show} scrollValue={scrollValue} />
      </motion.div>

      {/* Routes for navigating between pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
