import  { useContext, useEffect } from "react";
import { StoreContext } from "../Context/Context";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { haddleSuccess } from "../Utils/Toastify";

const Login = () => {
  const navigate = useNavigate();
  const { loginWithRedirect, isAuthenticated } = useContext(StoreContext);

  // Auto-redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      haddleSuccess("Already logged in!");
      navigate(-1);
    }
  }, [isAuthenticated, navigate]);

  const handleAuth0Login = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: window.location.pathname,
      },
      screen_hint: "signup",
    });
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

        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-[#ffb701] mb-4">Login / Sign Up</h2>
          <p className="text-gray-400">Use Auth0 to securely login or create an account</p>
        </div>

        <button
          onClick={handleAuth0Login}
          className="w-full py-3 px-4 bg-[#ffb701] hover:bg-[#e0a200] text-[#263821] font-bold rounded-lg transition-all"
        >
          Login / Sign Up with Auth0
        </button>

        <div className="mt-6 text-center text-sm text-gray-400">
          <p>After authentication, you&apos;ll be redirected to complete your profile.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
