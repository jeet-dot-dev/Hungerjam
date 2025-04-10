import React, { useState, useEffect, Suspense } from "react";
import { motion, useScroll } from "framer-motion";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

const ProfilePage = React.lazy(() => import("./Pages/ProfilePage"));
const CartPage = React.lazy(() => import("./Pages/Cart"));
const Menu = React.lazy(() => import("./Pages/Menu"));
const Form = React.lazy(() => import("./Pages/Form"));

import Navbar from "./components/Navbar";
import Popup from "./components/Popup";
import Home from "./Pages/Home";
import Loader from "./components/Loader";
import ContactPage from "./Pages/Contact";
import AboutPage from "./Pages/AboutPage";
import Verify from "./Pages/Verify";
import DeliveryPage from "./Pages/DeliveryPage";

const App = () => {
  const [scrollValue, setScrollValue] = useState(0); // Tracks scroll progress
  const { scrollYProgress } = useScroll();

  // Update scroll progress value
  useEffect(() => {
    scrollYProgress.on("change", setScrollValue);
  }, [scrollYProgress]);

  return (
    <div className="flex flex-col w-full bg-[#0f172a]">
      {/* Fixed Navbar with optional Popup */}
      <motion.div className="w-screen h-[50px] fixed z-50">
        <Popup />
        <Navbar scrollValue={scrollValue} />
      </motion.div>

      {/* Routes for navigating between pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/menu"
          element={
            <Suspense fallback={<Loader />}>
              <Menu />
            </Suspense>
          }
        />
        <Route
          path="/cart"
          element={
          
              <Suspense fallback={<Loader />}>
                <CartPage />
              </Suspense>
          
          }
        />
        <Route
          path="/delivery"
          element={
          
              <Suspense fallback={<Loader />}>
                <DeliveryPage />
              </Suspense>
          
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Suspense fallback={<Loader />}>
                <ProfilePage />
              </Suspense>
            </ProtectedRoute>
          }
        />
        <Route
          path="/verify"
          element={
            <ProtectedRoute>
              <Suspense fallback={<Loader />}>
                <Verify />
              </Suspense>
            </ProtectedRoute>
          }
        />
        <Route
          path="/form"
          element={
            <ProtectedRoute>
              <Suspense fallback={<Loader />}>
                <Form />
              </Suspense>
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<Loader />}>
              <ContactPage />
            </Suspense>
          }
        />
         <Route
          path="/about"
          element={
            <Suspense fallback={<Loader />}>
              <AboutPage />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
