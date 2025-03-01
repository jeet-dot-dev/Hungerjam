import { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMinus, FiPlus, FiTrash2, FiShoppingBag } from "react-icons/fi";
import { MdShoppingCart } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { StoreContext } from "../Context/Context";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  // Access cart items from global store context
  const { cartItems, setCartItems } = useContext(StoreContext);
  const navigate = useNavigate();
  /**
   * Updates the quantity of an item in the cart
   * @param {string|number} id - The unique identifier of the cart item
   * @param {number} change - The amount to change the quantity by (positive or negative)
   */
  const updateqnt = (id, change) => {
    console.log(id); // Log the ID for debugging purposes
    setCartItems((items) =>
      items
        // Map through current items, update quantity for matching ID
        .map((item) =>
          item.id === id
            ? { ...item, qnt: Math.max(0, item.qnt + change) } // Prevent negative quantities
            : item
        )
        // Remove any items with zero quantity
        .filter((item) => item.qnt > 0)
    );
  };

  // Sync cart items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Calculate order summary values
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qnt,
    0
  );
  let deliveryFee = 0;
  subtotal < 499 ? (deliveryFee = 40) : (deliveryFee = 0); // Fixed delivery fee
  const total = subtotal + deliveryFee; // Total order amount
  const itemCount = cartItems.reduce((count, item) => count + item.qnt, 0); // Total number of items

  return (
    // Main container with dark gradient background
    // mt-36 provides space for the fixed navbar
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12 mt-36">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cart header with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Start invisible and below final position
          animate={{ opacity: 1, y: 0 }} // Fade in and move up to final position
          className="flex items-center justify-between mb-12"
        >
          <div className="flex items-center">
            <MdShoppingCart className="w-10 h-10 text-yellow-400 mr-3" />
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-500">
              Your Cart
            </h1>
          </div>
          {/* Badge showing total item count */}
          <Badge
            variant="outline"
            className="px-3 py-1 bg-gray-800 border-yellow-500 text-yellow-400"
          >
            {itemCount} {itemCount === 1 ? "item" : "items"}
          </Badge>
        </motion.div>

        {/* Conditional rendering based on cart status */}
        {cartItems.length === 0 ? (
          // Empty cart view
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <FiShoppingBag className="w-16 h-16 mx-auto text-gray-600 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-400 mb-4">
              Your cart is empty
            </h2>
            <Button
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium"
              onClick={() => navigate("/menu")}
            >
              Continue Shopping
            </Button>
          </motion.div>
        ) : (
          // Cart items grid layout - 2/3 for items, 1/3 for summary on large screens
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Cart items section - takes 2 columns on large screens */}
            <div className="lg:col-span-2 space-y-6">
              {/* AnimatePresence enables exit animations when items are removed */}
              <AnimatePresence>
                {cartItems.map((item) => (
                  // Animated container for each cart item
                  <motion.div
                    key={item.id}
                    layout // Smoothly animates layout changes
                    initial={{ opacity: 0, y: 20 }} // Start invisible and below
                    animate={{ opacity: 1, y: 0 }} // Fade in and move up
                    exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }} // Fade out and move up when removed
                    className="group"
                  >
                    {/* Card component for each cart item */}
                    <Card className="bg-gray-800/60 backdrop-blur-sm border-gray-700 overflow-hidden hover:border-yellow-500/50 transition-all duration-300">
                      <div className="p-6 flex gap-6">
                        {/* Product image container */}
                        <div className="w-28 h-28 relative rounded-xl overflow-hidden shadow-lg">
                          <motion.img
                            whileHover={{ scale: 1.1 }} // Slightly zoom image on hover
                            transition={{ duration: 0.3 }}
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        {/* Product details */}
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold group-hover:text-yellow-400 transition-colors">
                            {item.name}
                          </h3>
                          <p className="text-yellow-500 text-xl font-medium mt-1">
                            ₹{item.price}
                          </p>
                          {/* Quantity controls */}
                          <div className="flex items-center gap-4 mt-4">
                            <div className="flex items-center gap-2 bg-gray-700/70 rounded-full px-2 py-1">
                              {/* Decrease quantity button */}
                              <Button
                                size="icon"
                                variant="ghost"
                                onClick={() => updateqnt(item.id, -1)}
                                className="h-8 w-8 rounded-full text-gray-300 hover:text-white hover:bg-gray-600"
                              >
                                <FiMinus className="w-4 h-4" />
                              </Button>
                              {/* Current quantity display */}
                              <span className="w-8 text-center font-medium">
                                {item.qnt}
                              </span>
                              {/* Increase quantity button */}
                              <Button
                                size="icon"
                                variant="ghost"
                                onClick={() => updateqnt(item.id, 1)}
                                className="h-8 w-8 rounded-full text-gray-300 hover:text-white hover:bg-gray-600"
                              >
                                <FiPlus className="w-4 h-4" />
                              </Button>
                            </div>
                            {/* Remove item button */}
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => updateqnt(item.id, -item.qnt)}
                              className="text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-full"
                            >
                              <FiTrash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        {/* Item total price */}
                        <div className="text-right">
                          <p className="text-xl font-bold">
                            ₹{item.price * item.qnt}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Order summary section - takes 1 column on large screens */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 sticky top-4 border border-gray-700"
              >
                <h2 className="text-2xl font-bold mb-6 text-yellow-400">
                  Order Summary
                </h2>
                {/* Summary details */}
                <div className="space-y-4">
                  {/* Subtotal row */}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">
                      Subtotal ({itemCount} {itemCount === 1 ? "item" : "items"}
                      )
                    </span>
                    <span className="font-medium">₹{subtotal}</span>
                  </div>
                  {/* Delivery fee row */}
                  <div className="flex justify-between items-center">
                    <span
                      className={`relative text-gray-400 font-semibold text-lg transition-all duration-300 
                       ${
                         subtotal > 499
                          ? "line-through decoration-red-600 decoration-4 opacity-70"
                          : "text-white opacity-100"
                        }`}
                    >
                      Delivery Fee
                    </span>

                    <span className="font-medium">₹{deliveryFee}</span>
                  </div>
                  {/* Divider line */}
                  <Separator className="my-4 bg-gray-700" />
                  {/* Total row */}
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total</span>
                    <span className="text-yellow-400 text-2xl">₹{total}</span>
                  </div>
                </div>
                {/* Checkout button */}
                <Button
                  className="w-full mt-8 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold text-lg py-6"
                  size="lg"
                  onClick={()=>navigate('/form')}
                >
                  Proceed to Checkout
                </Button>
                {/* Free delivery promotion message */}
                <p className="text-center text-gray-400 text-sm mt-4">
                  Free delivery on orders above ₹499
                </p>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
