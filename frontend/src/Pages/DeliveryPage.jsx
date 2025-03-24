import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  Package,
  Check,
  X,
  ChevronDown,
  AlertCircle,
  RefreshCcw,
  ListOrdered,
  Calendar,
  DollarSign,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { haddleError } from "../Utils/Toastify";
import { StoreContext } from "../Context/Context";

export function OrderStatusBadge({ status }) {
  const statusColors = {
    "Food Processing": "bg-yellow-100 text-yellow-800",
    "Out for Delivery": "bg-blue-100 text-blue-800",
    Delivered: "bg-green-100 text-green-800",
    Cancelled: "bg-red-100 text-red-800",
  };

  return (
    <Badge
      className={`${
        statusColors[status] || "bg-gray-100 text-gray-800"
      } text-xs px-2 py-1`}
    >
      {status}
    </Badge>
  );
}

export default function DeliveryPage() {
  const { orderHistory } = useContext(StoreContext);
  const [visibleOrders, setVisibleOrders] = useState(5);
  const [expandedOrderId, setExpandedOrderId] = useState(null);
  console.log(orderHistory);
  const toggleOrderExpansion = (orderId) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
  };

  const loadMoreOrders = () => {
    setVisibleOrders((prev) => prev + 5);
  };

  const formatDate = (dateString) => {
    try {
      const date = new Date(parseInt(dateString));
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return "Invalid Date";
    }
  };

  return (
    <div className="container mx-auto max-w-4xl mt-20 lg:mt-32 xl:mt-40   py-8 px-4 bg-[#0F172A] min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-amber-500 flex items-center">
          <ListOrdered className="mr-3 text-amber-500" />
          My Orders
        </h1>
        <div className="text-white text-sm">
          Total Orders: {orderHistory.length}
        </div>
      </div>

      {orderHistory.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#1E293B] rounded-lg p-8 text-center"
        >
          <AlertCircle className="mx-auto h-16 w-16 text-gray-400 mb-4" />
          <h3 className="text-xl font-medium text-white mb-2">No Orders Yet</h3>
          <p className="text-gray-400">
            Start ordering delicious food from Food & Adda!
          </p>
        </motion.div>
      ) : (
        <div className="space-y-4">
        {[...orderHistory]
  .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort orders by date (newest first)
  .slice(0, visibleOrders)
  .map((order) => (
    <motion.div
      key={order._id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-[#1E293B] rounded-lg overflow-hidden"
    >
      <div
        onClick={() => toggleOrderExpansion(order._id)}
        className="p-4 flex justify-between items-center cursor-pointer hover:bg-[#334155] transition-colors"
      >
        <div>
          <div className="flex items-center space-x-3">
            <span className="text-amber-500 font-semibold">
              Order #{order._id.slice(-6)}
            </span>
            <OrderStatusBadge status={order.status} />
          </div>
          <div className="flex items-center text-gray-400 text-sm mt-1">
            <Calendar className="w-4 h-4 mr-2 text-gray-500" />
            {formatDate(order.date)}
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-white font-bold flex items-center">
            ₹{order.amount.toFixed(2)}
          </span>
          <motion.div
            animate={{
              rotate: expandedOrderId === order._id ? 180 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="text-gray-400" />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {expandedOrderId === order._id && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="p-4 bg-[#334155]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-white font-semibold mb-3">
                  Order Items
                </h4>
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center mb-2 bg-[#1E293B] p-2 rounded"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded mr-3"
                    />
                    <div className="flex-grow">
                      <p className="text-white">{item.name}</p>
                      <p className="text-gray-400 text-sm">
                        ₹{item.price} x {item.qnt}
                      </p>
                    </div>
                    <span className="text-amber-500 font-bold">
                      ₹{(item.price * item.qnt).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3">
                  Order Details
                </h4>
                <div className="bg-[#1E293B] p-4 rounded space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Subtotal</span>
                    <span className="text-white">
                      ₹{order.amount.toFixed(2)}
                    </span>
                    {order.amount < 500 && (
                      <>
                        <span className="text-gray-400">
                          Delivery Charges
                        </span>
                        <span className="text-white">40₹</span>
                      </>
                    )}
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Status</span>
                    <OrderStatusBadge status={order.status} />
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Payment</span>
                    <span
                      className={`font-semibold ${
                        order.payment
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {order.payment ? "Paid" : "Unpaid"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
))}

        </div>
      )}

      {visibleOrders < orderHistory.length && (
        <div className="flex justify-center mt-6">
          <Button
            onClick={loadMoreOrders}
            variant="secondary"
            className="bg-amber-500 hover:bg-amber-600 text-black"
          >
            <RefreshCcw className="mr-2 h-4 w-4" /> Load More Orders
          </Button>
        </div>
      )}
    </div>
  );
}
