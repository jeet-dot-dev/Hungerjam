import { StoreContext } from "../Context/Context";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { haddleError, haddleSuccess } from "../Utils/Toastify";

import axios from "axios";

const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderID");
  console.log(orderId);
  const [isLoading, setIsLoading] = useState(true);
  const { url, getAccessTokenSilently } = useContext(StoreContext);
  const navigate = useNavigate();
  const verifyPayment = async () => {
    try {
      const token = await getAccessTokenSilently();
      const res = await axios.post(
        `${url}/api/order/verify`,
        {
          success,
          orderId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Space after Bearer
            "Content-Type": "application/json",
          },
        }
      );

      console.log(success);

      if (res.data.success) {
        navigate("/delivery");
        haddleSuccess(res.data.message);
      } else {
        navigate("/cart");
        haddleError(res.data.message);
      }
    } catch (error) {
      //haddleError(res.data.message);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {isLoading && (
        <div className="p-8 bg-white rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Verifying Your Payment
          </h2>

          {/* Creative food-themed loader animation */}
          <div className="flex justify-center items-center space-x-2 my-6">
            <div
              className="w-4 h-4 bg-yellow-500 rounded-full animate-bounce"
              style={{ animationDelay: "0ms" }}
            ></div>
            <div
              className="w-4 h-4 bg-red-500 rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            ></div>
            <div
              className="w-4 h-4 bg-green-500 rounded-full animate-bounce"
              style={{ animationDelay: "300ms" }}
            ></div>
            <div
              className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: "450ms" }}
            ></div>
          </div>

          <p className="text-gray-600">
            Please wait while we confirm your order...
          </p>
          <p className="text-sm text-gray-500 mt-4">Order ID: {orderId}</p>
        </div>
      )}
    </div>
  );
};

export default Verify;
