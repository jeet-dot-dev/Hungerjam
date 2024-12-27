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
  const { token, setToken, url } = useContext(StoreContext);
  const [currState, setCurrState] = useState("sign up");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev); // Toggle visibility
  };

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
      navigate(-1);
    } catch (err) {
      console.log(err);
      haddleError(err.response?.data?.message || "An error occurred");
      setError(err.response?.data?.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

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
          <p className="mt-2 text-sm text-gray-300">
            {currState === "login"
              ? "Enter your credentials to access your account"
              : "Create a new account to get started"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {currState === "sign up" && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  First Name
                </label>
                <input
                  name="firstName"
                  type="text"
                  value={data.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-sm 
                         text-white placeholder-gray-400 focus:border-[#ffb701] focus:outline-none focus:ring-1 
                         focus:ring-[#ffb701]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Last Name
                </label>
                <input
                  name="lastName"
                  type="text"
                  value={data.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-sm 
                         text-white placeholder-gray-400 focus:border-[#ffb701] focus:outline-none focus:ring-1 
                         focus:ring-[#ffb701]"
                  required
                />
              </div>
            </>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={data.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-sm 
                     text-white placeholder-gray-400 focus:border-[#ffb701] focus:outline-none focus:ring-1 
                     focus:ring-[#ffb701]"
              required
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              name="password"
              type={showPassword ? "text" : "password"} // Dynamic type
              value={data.password}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-sm 
                     text-white placeholder-gray-400 focus:border-[#ffb701] focus:outline-none focus:ring-1 
                     focus:ring-[#ffb701]"
              required
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-3 top-5 flex items-center cursor-pointer text-gray-50"
            >
              {showPassword ? (
                <AiFillEyeInvisible size={20} />
              ) : (
                <AiFillEye size={20} />
              )}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="terms"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-[#ffb701] focus:ring-[#ffb701]"
            />
            <label htmlFor="terms" className="text-sm text-gray-300">
              I accept the terms and conditions
            </label>
          </div>

          {error && <div className="text-sm text-red-400">{error}</div>}

          <button
            type="submit"
            disabled={isLoading || !acceptTerms}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md 
                   shadow-sm text-sm font-bold text-[#1a2332] bg-[#ffb701] hover:bg-[#ffa601] 
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffb701] 
                   disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading
              ? "Loading..."
              : currState === "login"
              ? "Login"
              : "Sign Up"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={toggleState}
            className="text-sm text-[#ffb701] hover:text-white transition-colors"
          >
            {currState === "login"
              ? "Don't have an account? Sign up"
              : "Already have an account? Login"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
