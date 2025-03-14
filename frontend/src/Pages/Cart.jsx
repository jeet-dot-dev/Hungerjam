import { useContext, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMinus, FiPlus, FiTrash2, FiShoppingBag } from "react-icons/fi";
import { MdShoppingCart } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { StoreContext } from "../Context/Context";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CartPage() {
  const { cartItems, setCartItems, user_data, url } = useContext(StoreContext);
  const navigate = useNavigate();
  console.log(user_data.details);
  console.log(cartItems);

  // Function to update quantity
  const updateqnt = (id, change) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id
            ? { ...item, qnt: Math.max(0, item.qnt + change) }
            : item
        )
        .filter((item) => item.qnt > 0)
    );
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qnt,
    0
  );
  const deliveryFee = subtotal < 499 ? 40 : 0;
  const total = subtotal + deliveryFee;
  const itemCount = cartItems.reduce((count, item) => count + item.qnt, 0);

  const handleCheckout = () => {
    if (user_data?.details) {
      placeorder();
    } else {
      navigate("/form");
    }
  };

  //placeorder func
  const placeorder = async () => {
    try {
      const res = await axios.post(`${url}/api/order/place`, {
        userId: user_data._id, // Assign key to value
        items: cartItems,
        deliveryFee,
        amount: total,
      });
      console.log(res);
      if (res.data.success) {
        const { session_url } = res.data;
        window.location.replace(session_url);
      } else {
        alert("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12 mt-20 lg:mt-32 xl:mt-36">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-12"
        >
          <div className="flex items-center">
            <MdShoppingCart className="w-10 h-10 text-yellow-400 mr-3" />
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-500">
              Your Cart
            </h1>
          </div>
          <Badge
            variant="outline"
            className="px-3 py-1 bg-gray-800 border-yellow-500 text-yellow-400"
          >
            {itemCount} {itemCount === 1 ? "item" : "items"}
          </Badge>
        </motion.div>

        {/* Empty Cart Message */}
        {cartItems.length === 0 ? (
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
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatePresence>
                {cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <Card className="bg-gray-800/60 backdrop-blur-sm border-gray-700 overflow-hidden hover:border-yellow-500/50 transition-all duration-300">
                      <div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        {/* Image */}
                        <div className="w-24 h-24 sm:w-28 sm:h-28 relative rounded-xl overflow-hidden shadow-lg">
                          <motion.img
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="object-cover w-full h-full"
                            loading="lazy"
                          />
                        </div>

                        {/* Product Info */}
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold">{item.name}</h3>
                          <p className="text-yellow-500 text-lg font-medium mt-1">
                            ₹{item.price}
                          </p>
                          <div className="flex items-center gap-4 mt-4">
                            <div className="flex items-center gap-2 bg-gray-700/70 rounded-full px-2 py-1">
                              <Button
                                size="icon"
                                variant="ghost"
                                onClick={() => updateqnt(item.id, -1)}
                                className="h-8 w-8 text-gray-300 hover:text-white hover:bg-gray-600"
                              >
                                <FiMinus className="w-4 h-4" />
                              </Button>
                              <span className="w-8 text-center font-medium">
                                {item.qnt}
                              </span>
                              <Button
                                size="icon"
                                variant="ghost"
                                onClick={() => updateqnt(item.id, 1)}
                                className="h-8 w-8 text-gray-300 hover:text-white hover:bg-gray-600"
                              >
                                <FiPlus className="w-4 h-4" />
                              </Button>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => updateqnt(item.id, -item.qnt)}
                              className="text-gray-400 hover:text-red-400 hover:bg-red-500/10"
                            >
                              <FiTrash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>

                        {/* Total Price */}
                        <p className="text-xl font-bold flex-shrink-0">
                          ₹{item.price * item.qnt}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 sticky top-4 border border-gray-700"
              >
                <h2 className="text-2xl font-bold mb-6 text-yellow-400">
                  Order Summary
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-300">
                      Subtotal ({itemCount} items)
                    </span>
                    <span className="font-medium">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span
                      className={`text-gray-400 font-semibold text-lg ${
                        subtotal > 499
                          ? "line-through decoration-red-600 opacity-70"
                          : "text-white opacity-100"
                      }`}
                    >
                      Delivery Fee
                    </span>
                    <span className="font-medium">₹{deliveryFee}</span>
                  </div>
                  <Separator className="my-4 bg-gray-700" />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-yellow-400 text-2xl">₹{total}</span>
                  </div>
                </div>
                <Button
                  className="w-full mt-8 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg py-6"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
