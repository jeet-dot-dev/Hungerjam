"use client"

import { useContext, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiEdit2, FiShoppingBag, FiClock, FiChevronRight, FiMapPin, FiAward, FiStar, FiPercent, FiPackage, FiUser } from "react-icons/fi"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { StoreContext } from "../Context/Context"
const  ProfilePage = ()=> {
  const [userData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    id: "JYTK",
    address: {
      fullName: "John Doe",
      address1: "Kirkland",
      address2: "Oakland 70001",
      instructions: "Any special instructions for delivery..."
    },
    stats: {
      totalOrders: 24,
      favoriteItem: "Masala Spiral Potato",
      moneySpent: 4250,
      ordersEarned: 3
    },
    badges: ["Foodie Explorer", "Loyal Customer", "Early Bird"],
    offers: [
      { id: 1, title: "10% OFF on your next order", validUntil: "Valid till 9 march 2024", code: "MARCH10" },
      { id: 2, title: "Free delivery on orders above ₹499", validUntil: "Valid for one month", code: "FREEDEL" }
    ],
    recentOrders: [
      { 
        id: "ORD123456", 
        date: "March 1, 2024", 
        items: ["Masala Spiral Potato", "Cheese Spiral Potato"],
        total: 190,
        status: "Delivered"
      },
      { 
        id: "ORD123455", 
        date: "February 20, 2024", 
        items: ["BBQ Spiral Potato", "Spicy Veg Chowmein"],
        total: 190,
        status: "Delivered"
      },
      { 
        id: "ORD123454", 
        date: "February 15, 2024", 
        items: ["Masala Spiral Potato", "Coffee"],
        total: 150,
        status: "Delivered"
      }
    ]
  });
   
 const {user_data} = useContext(StoreContext) ;
//console.log(user_data);


  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12 mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="mb-8"
        >
          <div className="relative">
            <div className="h-32 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-t-xl"></div>
            <div className="absolute left-8 -bottom-12">
              <div className="h-24 w-24 rounded-full bg-gray-200 border-4 border-gray-800 flex items-center justify-center overflow-hidden">
                <img src={user_data.picture} alt="" className="h-12 w-12 text-gray-400" />
              </div>
            </div>
          </div>
          
          <div className="pt-16 pb-4 px-4 flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold">{user_data.name || "John"}</h1>
              <p className="text-gray-400 text-sm">{user_data.email ||"john@gmail.com"}</p>
              <p className="text-gray-500 text-xs">ID: {userData.id}</p>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-gray-700 text-gray-300 hover:text-yellow-400 hover:border-yellow-500"
            >
              Edit Profile
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            {/* Delivery Address */}
            <motion.div {...fadeIn} transition={{ delay: 0.1 }}>
              <Card className="bg-gray-800/60 backdrop-blur-sm border-gray-700 overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <FiMapPin className="w-5 h-5 text-yellow-400 mr-2" />
                      <h2 className="text-xl font-semibold">Delivery Address</h2>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-gray-400 hover:text-yellow-400"
                    >
                      <FiEdit2 className="w-4 h-4 mr-1" /> Add Address
                    </Button>
                  </div>
                  
                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="bg-yellow-400/20 p-2 rounded-full mr-3">
                        <FiMapPin className="w-4 h-4 text-yellow-400" />
                      </div>
                      <div className="flex-1">
                      <p className="font-medium text-yellow-400">{`${user_data?.address?.firstname } ${user_data?.address?.lastname}`|| "No email available"}</p>

                        <p className="text-gray-300">{user_data?.address?.address || "No address"}</p>
                        <p className="text-gray-300">{user_data?.address?.pin || "99999999"}</p>
                        <p className="text-gray-400 text-sm mt-2 italic">{user_data?.address?.instructions || "No instruction"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
            
            {/* Recent Orders */}
            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
              <Card className="bg-gray-800/60 backdrop-blur-sm border-gray-700 overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <FiClock className="w-5 h-5 text-yellow-400 mr-2" />
                      <h2 className="text-xl font-semibold">Recent Orders</h2>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Showing orders from the past <span className="text-yellow-400">30 days</span>
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <AnimatePresence>
                      {userData.recentOrders.map((order, index) => (
                        <motion.div 
                          key={order.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="bg-gray-700/30 rounded-lg p-4 hover:border-l-4 hover:border-yellow-400 transition-all duration-200">
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="flex items-center">
                                  <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-600 mr-2">
                                    {order.status}
                                  </Badge>
                                  <h3 className="font-medium">{order.id}</h3>
                                </div>
                                <p className="text-gray-400 text-sm mt-1">{order.date}</p>
                                <div className="mt-2">
                                  {order.items.map((item, i) => (
                                    <span key={i} className="text-gray-300 text-sm">
                                      {item}{i < order.items.length - 1 ? ', ' : ''}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="font-bold text-xl">₹{order.total}</p>
                                <Button 
                                  variant="link" 
                                  className="text-yellow-400 p-0 h-auto text-sm mt-1"
                                >
                                  View Details
                                </Button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                    
                    <div className="text-center pt-2">
                      <Button 
                        variant="ghost" 
                        className="text-gray-400 hover:text-yellow-400"
                      >
                        View All Orders <FiChevronRight className="ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
          
          <div className="space-y-6">
            {/* Your Stats */}
            <motion.div {...fadeIn} transition={{ delay: 0.3 }}>
              <Card className="bg-gray-800/60 backdrop-blur-sm border-gray-700 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <FiPackage className="w-5 h-5 text-yellow-400 mr-2" />
                    <h2 className="text-xl font-semibold">Your Stats</h2>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-700/30 rounded-lg p-4 text-center">
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.4 }}
                        className="w-12 h-12 flex items-center justify-center bg-yellow-400/20 rounded-full mx-auto mb-2"
                      >
                        <FiShoppingBag className="w-6 h-6 text-yellow-400" />
                      </motion.div>
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-2xl font-bold text-yellow-400"
                      >
                        {userData.stats.totalOrders}
                      </motion.p>
                      <p className="text-gray-400 text-sm">Total Orders</p>
                    </div>
                    
                    <div className="bg-gray-700/30 rounded-lg p-4 text-center">
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
                        className="w-12 h-12 flex items-center justify-center bg-yellow-400/20 rounded-full mx-auto mb-2"
                      >
                        <FiStar className="w-6 h-6 text-yellow-400" />
                      </motion.div>
                      <p className="text-sm font-medium text-yellow-400">{userData.stats.favoriteItem}</p>
                      <p className="text-gray-400 text-sm">Favorite Item</p>
                    </div>
                    
                    <div className="bg-gray-700/30 rounded-lg p-4 text-center">
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.6 }}
                        className="w-12 h-12 flex items-center justify-center bg-yellow-400/20 rounded-full mx-auto mb-2"
                      >
                        <span className="text-yellow-400 font-bold">₹</span>
                      </motion.div>
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="text-2xl font-bold text-yellow-400"
                      >
                        {userData.stats.moneySpent}
                      </motion.p>
                      <p className="text-gray-400 text-sm">Money Spent</p>
                    </div>
                    
                    <div className="bg-gray-700/30 rounded-lg p-4 text-center">
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.7 }}
                        className="w-12 h-12 flex items-center justify-center bg-yellow-400/20 rounded-full mx-auto mb-2"
                      >
                        <span className="text-yellow-400 font-bold">{userData.stats.ordersEarned}</span>
                      </motion.div>
                      <p className="text-gray-400 text-sm">Rewards Earned</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
            
            {/* Badges & Achievements */}
            <motion.div {...fadeIn} transition={{ delay: 0.4 }}>
              <Card className="bg-gray-800/60 backdrop-blur-sm border-gray-700 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <FiAward className="w-5 h-5 text-yellow-400 mr-2" />
                    <h2 className="text-xl font-semibold">Badges & Achievements</h2>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {userData.badges.map((badge, index) => (
                      <motion.div 
                        key={badge}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (index * 0.1) }}
                      >
                        <Badge className="bg-yellow-500/10 text-yellow-400 border-yellow-600 py-1 px-3">
                          {badge}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
            
            {/* Available Offers */}
            <motion.div {...fadeIn} transition={{ delay: 0.5 }}>
              <Card className="bg-gray-800/60 backdrop-blur-sm border-gray-700 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <FiPercent className="w-5 h-5 text-yellow-400 mr-2" />
                    <h2 className="text-xl font-semibold">Available Offers</h2>
                  </div>
                  
                  <div className="space-y-3">
                    {userData.offers.map((offer, index) => (
                      <motion.div 
                        key={offer.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + (index * 0.1) }}
                        className="group"
                      >
                        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 group-hover:border-yellow-400 transition-all duration-200">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="font-medium text-yellow-400">{offer.title}</h3>
                              <p className="text-gray-400 text-xs mt-1">{offer.validUntil}</p>
                            </div>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="text-gray-300 hover:text-yellow-400 h-8"
                            >
                              Use Now
                            </Button>
                          </div>
                          <div className="mt-2 pt-2 border-t border-yellow-500/20">
                            <p className="text-xs text-gray-400">CODE: <span className="text-yellow-300 font-mono">{offer.code}</span></p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default  ProfilePage;