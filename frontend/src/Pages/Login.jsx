import React, { useContext, useState } from "react";
import { StoreContext } from "../Context/Context";
import axios from "axios";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { haddleError, haddleSuccess } from "../Utils/Toastify";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; // Import eye icons

const Login = () => {
  const navigate = useNavigate();
  const { token, setToken, url } = useContext(StoreContext); // Access context values
  const [currState, setCurrState] = useState("sign up"); // Toggle between login and sign-up
  const [acceptTerms, setAcceptTerms] = useState(false); // Terms acceptance state
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false); // Loading state for form submission
  const [error, setError] = useState("");// Error message state

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Form submission logic
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!acceptTerms) {
      haddleError("Please accept the terms and conditions");
      return;
    }
    setIsLoading(true);
    setError("");

    try {
      const endpoint = currState === "login" ? "/login" : "/signup";
      const response = await axios.post(`${url}/api/user${endpoint}`, data);

      haddleSuccess(response.data.message);
      const { success, message, error, token, name } = response.data;
      if (currState === "login" && success) {
        setToken(token);
        localStorage.setItem("loggedInuser", name);
        localStorage.setItem("token", token);
      }
      setData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
      navigate(-1); // Navigate back to the previous page
    } catch (err) {
      console.log(err);
      haddleError(err.response?.data?.message || "An error occurred");
      setError(err.response?.data?.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  // Toggle between login and sign-up modes
  const toggleState = () => {
    setCurrState(currState === "login" ? "sign up" : "login");
    setError("");
    setData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
    setAcceptTerms(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-md p-8 bg-[#1a2332] rounded-lg shadow-2xl"
      >
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 text-[#ffb701] hover:text-white transition-colors"
        >
          <IoMdClose size={24} />
        </button>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#ffb701]">
            {currState === "login" ? "Login" : "Sign Up"}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {currState === "sign up" && (
            <>
              <input name="firstName" type="text" value={data.firstName} onChange={handleChange} required />
              <input name="lastName" type="text" value={data.lastName} onChange={handleChange} required />
            </>
          )}

          <input name="email" type="email" value={data.email} onChange={handleChange} required />

          <input
            name="password"
            type={showPassword ? "text" : "password"}
            value={data.password}
            onChange={handleChange}
            required
          />
          <span onClick={togglePasswordVisibility}>{showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}</span>

          <input
            type="checkbox"
            id="terms"
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
          />
          <label htmlFor="terms">I accept the terms and conditions</label>

          <button type="submit" disabled={isLoading || !acceptTerms}>
            {isLoading ? "Loading..." : currState === "login" ? "Login" : "Sign Up"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
