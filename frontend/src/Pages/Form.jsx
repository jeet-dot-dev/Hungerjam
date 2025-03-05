import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { MdDeliveryDining } from "react-icons/md";
import { StoreContext } from "../Context/Context";
import axios from "axios";

const Form = () => {
  const {url,getAccessTokenSilently,haddleError, haddleSuccess} = useContext(StoreContext);
  //console.log(url);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pin: "",
    instructions: "",
    deliveryTime: "asap",
    
  });

  //handle change func
  const handleChange = (event) => {
    //console.log(event.target.value);
    const { name, value } = event.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Form submission handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Form handling logic here
    console.log("Form submitted with data:", data);
    const token = await getAccessTokenSilently();
    try {
      const response = await axios.post(
        `${url}/api/address`,data,
        {
          headers:{
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          }
        }
      )
      haddleSuccess("Address saved successfully");
      console.log(response.status);
    } catch (error) {
      haddleError(error?.response.data.message);
      console.log(error);
    }

  };



  // Animation variants
  const staggerFormItems = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const formItem = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
      },
    },
  };

  return (
    <div className="w-full min-h-screen bg-black pt-[150px] pb-16 px-4">
      <motion.form
        onSubmit={handleSubmit}
        variants={staggerFormItems}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto rounded-xl p-6 bg-[#1b1b1b] border border-[#2c2c2c] shadow-xl"
      >
        <motion.div variants={formItem} className="flex items-center mb-8">
          <MdDeliveryDining className="text-[#ffb701] text-4xl mr-3" />
          <h2 className="text-3xl font-bold text-white">Delivery Details</h2>
        </motion.div>

        <motion.div
          variants={formItem}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="space-y-2">
            <label
              htmlFor="firstname"
              className="block text-sm font-medium text-gray-300"
            >
              First name
            </label>
            <input
              id="firstname"
              name="firstname"
              placeholder="John"
              required
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] border border-[#3a3a3a] text-white placeholder:text-gray-500 focus:ring-2 focus:ring-[#ffb701] focus:border-transparent transition-all"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="lastname"
              className="block text-sm font-medium text-gray-300"
            >
              Last name
            </label>
            <input
              id="lastname"
              name="lastname"
              placeholder="Doe"
              required
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] border border-[#3a3a3a] text-white placeholder:text-gray-500 focus:ring-2 focus:ring-[#ffb701] focus:border-transparent transition-all"
            />
          </div>
        </motion.div>

        <motion.div variants={formItem} className="space-y-2 mt-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="john.doe@example.com"
            required
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] border border-[#3a3a3a] text-white placeholder:text-gray-500 focus:ring-2 focus:ring-[#ffb701] focus:border-transparent transition-all"
          />
        </motion.div>

        <motion.div variants={formItem} className="space-y-2 mt-6">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-300"
          >
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+9170..."
            required
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] border border-[#3a3a3a] text-white placeholder:text-gray-500 focus:ring-2 focus:ring-[#ffb701] focus:border-transparent transition-all"
          />
        </motion.div>

        <motion.div variants={formItem} className="space-y-2 mt-6">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-300"
          >
            Delivery address
          </label>
          <input
            id="address"
            name="address"
            placeholder="kolkata..."
            required
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] border border-[#3a3a3a] text-white placeholder:text-gray-500 focus:ring-2 focus:ring-[#ffb701] focus:border-transparent transition-all"
          />
        </motion.div>

        <motion.div
          variants={formItem}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
        >
          <div className="space-y-2">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-300"
            >
              City
            </label>
            <input
              id="city"
              name="city"
              placeholder="Asansol..."
              required
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] border border-[#3a3a3a] text-white placeholder:text-gray-500 focus:ring-2 focus:ring-[#ffb701] focus:border-transparent transition-all"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="pin"
              className="block text-sm font-medium text-gray-300"
            >
              PIN code
            </label>
            <input
              id="pin"
              name="pin"
              placeholder="10001"
              required
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] border border-[#3a3a3a] text-white placeholder:text-gray-500 focus:ring-2 focus:ring-[#ffb701] focus:border-transparent transition-all"
            />
          </div>
        </motion.div>

        <motion.div variants={formItem} className="space-y-2 mt-6">
          <label
            htmlFor="instructions"
            className="block text-sm font-medium text-gray-300"
          >
            Delivery instructions (optional)
          </label>
          <textarea
            id="instructions"
            name="instructions"
            onChange={handleChange}
            placeholder="Any special instructions for delivery..."
            className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] border border-[#3a3a3a] text-white placeholder:text-gray-500 focus:ring-2 focus:ring-[#ffb701] focus:border-transparent transition-all min-h-[100px]"
          />
        </motion.div>

        <motion.div variants={formItem} className="space-y-3 mt-8">
          <label className="block text-sm font-medium text-gray-300">
            Delivery time
          </label>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 rounded-lg border border-[#3a3a3a] p-4 bg-[#2a2a2a] hover:bg-[#333333] transition-colors cursor-pointer">
              <input
                type="radio"
                name="deliveryTime"
                value="asap"
                id="asap"
                defaultChecked
                onChange={handleChange}
                className="w-5 h-5 text-[#ffb701] focus:ring-[#ffb701] border-[#3a3a3a]"
              />
              <label
                htmlFor="asap"
                className="flex-1 cursor-pointer text-white"
              >
                As soon as possible
                <p className="text-sm text-gray-400 mt-1">
                  Usually delivered within 30-45 minutes
                </p>
              </label>
            </div>
            <div className="flex items-center space-x-3 rounded-lg border border-[#3a3a3a] p-4 bg-[#2a2a2a] hover:bg-[#333333] transition-colors cursor-pointer">
              <input
                type="radio"
                name="deliveryTime"
                value="scheduled"
                id="scheduled"
                onChange={handleChange}
                className="w-5 h-5 text-[#ffb701] focus:ring-[#ffb701] border-[#3a3a3a]"
              />
              <label
                htmlFor="scheduled"
                className="flex-1 cursor-pointer text-white"
              >
                Schedule for later
                <p className="text-sm text-gray-400 mt-1">
                  Choose a convenient delivery time
                </p>
              </label>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={formItem}
          className="mt-8"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <button
            type="submit"
            className="w-full py-3 px-4 bg-[#ffb701] hover:bg-[#e0a200] focus:ring-4 focus:ring-[#ffb701] focus:ring-opacity-50 text-[#263821] font-bold rounded-lg transition-all text-lg"
          >
            Place Your Order
          </button>
        </motion.div>
      </motion.form>
    </div>
  );
};

export default Form;
