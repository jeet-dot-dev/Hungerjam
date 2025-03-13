"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const MapSection = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  
  // Simulating map loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])
  
  return (
    <div className="w-full h-[400px] bg-[#151a2b] rounded-lg overflow-hidden relative">
      {!isLoaded ? (
        <div className="w-full h-full flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-[#ffa500]"
          >
            <MapPin className="h-8 w-8" />
          </motion.div>
        </div>
      ) : (
        <div className="relative w-full h-full">
          {/* Map background - In a real app, you'd integrate with a map API like Google Maps */}
          <div className="absolute inset-0 bg-[#1a1f32]">
            {/* Simplified map visualization */}
            <div className="w-full h-full relative overflow-hidden">
              {/* Map grid lines */}
              {[...Array(10)].map((_, i) => (
                <div key={`h-${i}`} className="absolute h-px bg-gray-700 w-full" style={{ top: `${i * 10}%` }} />
              ))}
              {[...Array(10)].map((_, i) => (
                <div key={`v-${i}`} className="absolute w-px bg-gray-700 h-full" style={{ left: `${i * 10}%` }} />
              ))}
              
              {/* Simplified roads */}
              <motion.div 
                className="absolute bg-gray-600 h-2 w-full left-0 top-[45%]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              />
              <motion.div 
                className="absolute bg-gray-600 h-full w-2 left-[30%] top-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              />
              
              {/* Location marker */}
              <motion.div
                className="absolute left-[30%] top-[45%] transform -translate-x-1/2 -translate-y-1/2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  delay: 1,
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
              >
                <div className="relative">
                  <motion.div
                    className="absolute -inset-4 bg-[#ffa500] rounded-full opacity-20"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                  <div className="bg-[#ffa500] p-2 rounded-full shadow-lg">
                    <MapPin className="h-6 w-6 text-[#151a2b]" />
                  </div>
                </div>
              </motion.div>
              
              {/* City name */}
              <motion.div
                className="absolute left-[30%] top-[52%] transform -translate-x-1/2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
              >
                <div className="bg-[#1d2235] px-3 py-1 rounded-md shadow-md">
                  <p className="text-[#ffa500] font-semibold text-sm">Coffee Adda</p>
                  <p className="text-xs text-gray-300">Chittaranjan, Asansol</p>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* UI Controls (decorative) */}
          <div className="absolute right-4 top-4 flex flex-col gap-2">
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8 }}
              className="bg-[#1d2235] p-2 rounded-md text-white shadow-md"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.9 }}
              className="bg-[#1d2235] p-2 rounded-md text-white shadow-md"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </motion.button>
          </div>
          
          {/* Direction button */}
          <motion.div
            className="absolute bottom-4 right-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
          >
            <button className="bg-[#ffa500] text-[#151a2b] px-4 py-2 rounded-md shadow-md font-semibold flex items-center gap-2">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Get Directions
            </button>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default MapSection