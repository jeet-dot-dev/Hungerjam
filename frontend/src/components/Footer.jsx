import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaPinterest, FaPhone, FaMapMarkerAlt, FaClock, FaUtensils, FaShoppingBag, FaTruck } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const footerAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-gradient-to-b from-[#1a1c23] to-[#22252e] text-white">
      {/* Newsletter Section */}
      <motion.div 
        className="bg-[#ffb701] py-8 px-4"
        initial={footerAnimation.hidden}
        animate={footerAnimation.visible}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex-1 min-w-[300px]">
            <h3 className="text-black text-2xl font-bold">Subscribe for Exclusive Offers</h3>
            <p className="text-gray-800">Get weekly updates and special deals directly in your inbox</p>
          </div>
          <div className="flex-1 min-w-[300px]">
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 rounded-lg focus:outline-none text-gray-800"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <motion.div
            initial={footerAnimation.hidden}
            animate={footerAnimation.visible}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">HungerJam</h2>
            <p className="text-gray-400 mb-6">Bringing culinary excellence to your doorstep since 2020. Experience the perfect blend of taste and tradition.</p>
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaPinterest].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-[#ffb701] hover:bg-gray-700"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={footerAnimation.hidden}
            animate={footerAnimation.visible}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-6 border-b-2 border-[#ffb701] pb-2">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-[#ffb701] transition-colors duration-300">Menu</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#ffb701] transition-colors duration-300">Reservations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#ffb701] transition-colors duration-300">Catering</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#ffb701] transition-colors duration-300">Events</a></li>
              </ul>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-[#ffb701] transition-colors duration-300">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#ffb701] transition-colors duration-300">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#ffb701] transition-colors duration-300">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#ffb701] transition-colors duration-300">Careers</a></li>
              </ul>
            </div>
          </motion.div>

          {/* Opening Hours */}
          <motion.div
            initial={footerAnimation.hidden}
            animate={footerAnimation.visible}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-6 border-b-2 border-[#ffb701] pb-2">Opening Hours</h3>
            <ul className="space-y-3">
              <li className="flex justify-between text-gray-400">
                <span>Monday - Friday</span>
                <span>9:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Saturday</span>
                <span>10:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Sunday</span>
                <span>10:00 AM - 9:00 PM</span>
              </li>
            </ul>
            <motion.div 
              className="mt-6 bg-[#ffb701] text-black p-4 rounded-lg"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="font-bold">Holiday Hours May Vary</h4>
              <p className="text-sm">Check our social media for updates</p>
            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={footerAnimation.hidden}
            animate={footerAnimation.visible}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6 border-b-2 border-[#ffb701] pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#ffb701] text-xl" />
                <div>
                  <p className="text-gray-400">123 Food Street</p>
                  <p className="text-gray-400">Chittaranjan, Asansol</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-[#ffb701] text-xl" />
                <div>
                  <p className="text-gray-400">+91 123 456 7890</p>
                  <p className="text-gray-400">+91 098 765 4321</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <MdEmail className="text-[#ffb701] text-xl" />
                <div>
                  <p className="text-gray-400">info@hungerjam.com</p>
                  <p className="text-gray-400">support@hungerjam.com</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Awards & Certifications */}
        <motion.div 
          className="border-t border-gray-800 py-8 mb-8"
          initial={footerAnimation.hidden}
          animate={footerAnimation.visible}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex flex-wrap justify-center gap-8">
            {[FaUtensils, FaShoppingBag, FaTruck].map((Icon, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
              >
                <Icon className="text-[#ffb701] text-2xl" />
                <span className="text-gray-400">Quality Certified</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="text-center border-t border-gray-800 pt-8"
          initial={footerAnimation.hidden}
          animate={footerAnimation.visible}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} HungerJam. All rights reserved. | 
            <a href="#" className="text-[#ffb701] hover:text-white ml-2">Privacy Policy</a> |
            <a href="#" className="text-[#ffb701] hover:text-white ml-2">Terms of Service</a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;