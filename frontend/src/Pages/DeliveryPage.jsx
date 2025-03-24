"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Clock, Package, Check, X, ChevronDown, AlertCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {haddleError,haddleSuccess} from '../Utils/Toastify'
//import { toast } from "sonner"

export function DeliveryStatus({ status }) {
  const steps = [
    { id: "processing", label: "Processing", icon: Clock },
    { id: "shipping", label: "Out for Delivery", icon: Package },
    { id: "delivered", label: "Delivered", icon: Check },
  ]
  
  let currentStep = 0
  if (status === "Food Processing") {
    currentStep = 0
  } else if (status === "Out for Delivery") {
    currentStep = 1
  } else if (status === "Delivered") {
    currentStep = 2
  } else if (status === "Cancelled") {
    return (
      <div className="w-full py-4">
        <div className="flex items-center justify-center gap-2 text-red-500">
          <X className="h-5 w-5" />
          <span className="font-medium">Order Cancelled</span>
        </div>
      </div>
    )
  }
  
  return (
    <div className="w-full py-4 mt-40">
      <div className="relative ">
        <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-gray-200 dark:bg-gray-700" />
        <div className="relative flex justify-between">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isActive = index <= currentStep
            return (
              <div key={step.id} className="flex flex-col items-center gap-2">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: isActive ? 1 : 0.8 }}
                  className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full ${
                    isActive ? "bg-amber-500" : "bg-gray-200 dark:bg-gray-700"
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? "text-white" : "text-gray-500"}`} />
                </motion.div>
                <span className={`text-xs ${isActive ? "text-amber-500" : "text-gray-500"}`}>{step.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default function DeliveryPage() {
  // Sample orders data (you would fetch this from your API)
  const [orders, setOrders] = useState([
    {
      _id: "ord123456",
      user: "user123",
      items: [
        { id: "item1", name: "Chicken Burger", image: "/api/placeholder/80/80", price: 8.99, quantity: 2 },
        { id: "item2", name: "French Fries", image: "/api/placeholder/80/80", price: 3.99, quantity: 1 },
        { id: "item3", name: "Soft Drink", image: "/api/placeholder/80/80", price: 1.99, quantity: 2 },
      ],
      amount: 25.95,
      status: "Food Processing",
      date: new Date().toISOString(),
      payment: true,
    },
    {
      _id: "ord789012",
      user: "user123",
      items: [
        { id: "item4", name: "Veggie Pizza", image: "/api/placeholder/80/80", price: 12.99, quantity: 1 },
        { id: "item5", name: "Garlic Bread", image: "/api/placeholder/80/80", price: 4.99, quantity: 1 },
      ],
      amount: 17.98,
      status: "Out for Delivery",
      date: new Date().toISOString(),
      payment: true,
    },
    {
      _id: "ord345678",
      user: "user123",
      items: [
        { id: "item6", name: "Pasta Carbonara", image: "/api/placeholder/80/80", price: 10.99, quantity: 2 },
      ],
      amount: 21.98,
      status: "Delivered",
      date: new Date(Date.now() - 86400000).toISOString(), // Yesterday
      payment: true,
    }
  ]);

  // Track which order is expanded
  const [expandedOrderId, setExpandedOrderId] = useState(null);

  const toggleOrderExpansion = (orderId) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
  };

  const cancelOrder = (orderId) => {
    setOrders(orders.map(order => 
      order._id === orderId ? { ...order, status: "Cancelled" } : order
    ));
    
    // Using sonner toast instead of shadcn/ui toast
    haddleError(`Order #${orderId} has been cancelled.`);
  };

  // Format date to readable string
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + " at " + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="container mx-auto max-w-3xl py-8">
      <h1 className="mb-8 text-3xl font-bold">My Orders</h1>
      
      {orders.length === 0 ? (
        <Card className="my-8">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <AlertCircle className="h-16 w-16 text-gray-400" />
            <h3 className="mt-4 text-xl font-medium">No Orders Found</h3>
            <p className="mt-2 text-sm text-gray-500">You haven't placed any orders yet.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <Card key={order._id} className="overflow-hidden">
              <CardHeader 
                className="cursor-pointer bg-gray-50 dark:bg-gray-800"
                onClick={() => toggleOrderExpansion(order._id)}
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <CardTitle className="flex items-center gap-2">
                      Order #{order._id}
                      {!order.payment && (
                        <Badge variant="outline" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100">
                          Unpaid
                        </Badge>
                      )}
                    </CardTitle>
                    <p className="text-sm text-gray-500">{formatDate(order.date)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge 
                      className={`${
                        order.status === "Delivered" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100" :
                        order.status === "Out for Delivery" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100" :
                        order.status === "Cancelled" ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100" :
                        "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100"
                      }`}
                    >
                      {order.status}
                    </Badge>
                    <motion.div
                      animate={{ rotate: expandedOrderId === order._id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    </motion.div>
                  </div>
                </div>
              </CardHeader>
              
              <AnimatePresence>
                {expandedOrderId === order._id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <CardContent className="pt-4">
                      <DeliveryStatus status={order.status} />
                      
                      <Separator className="my-4" />
                      
                      <div className="space-y-3">
                        {order.items.map((item) => (
                          <div key={item.id} className="flex items-center gap-4">
                            <div className="h-16 w-16 overflow-hidden rounded-md">
                              <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium">{item.name}</h4>
                              <p className="text-sm text-gray-500">${item.price.toFixed(2)} x {item.quantity}</p>
                            </div>
                            <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-4 flex justify-between border-t pt-4">
                        <p className="font-medium">Total Amount:</p>
                        <p className="font-bold">${order.amount.toFixed(2)}</p>
                      </div>
                    </CardContent>
                    
                    <CardFooter className="flex justify-end gap-3 pb-4">
                      {order.status !== "Delivered" && order.status !== "Cancelled" && (
                        <Button 
                          variant="destructive" 
                          onClick={() => cancelOrder(order._id)}
                          className="px-4"
                        >
                          Cancel Order
                        </Button>
                      )}
                      <Button className="bg-amber-500 hover:bg-amber-600 px-4">Track Order</Button>
                    </CardFooter>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}