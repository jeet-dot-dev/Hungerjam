import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#22252e] text-white py-12 px-8 relative z-30">
      {/* Top Section */}
      <div className="footer-top grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Logo & Tagline */}
        <motion.div
          className="logo-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold mb-3">HungerJam</h2>
          <p className="text-sm text-gray-400">
          HungerJam brings to the table a fusion of comfort and innovation in every bite.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="quick-links"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#about" className="hover:text-[#ffb701] transition">About Us</a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#ffb701] transition">Services</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-[#ffb701] transition">Projects</a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-[#ffb701] transition">Testimonials</a>
            </li>
          </ul>
        </motion.div>

        {/* Resources */}
        <motion.div
          className="resources"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#faq" className="hover:text-[#ffb701] transition">FAQ</a>
            </li>
            <li>
              <a href="#blog" className="hover:text-[#ffb701] transition">Blog</a>
            </li>
            <li>
              <a href="#careers" className="hover:text-[#ffb701] transition">Careers</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#ffb701] transition">Support</a>
            </li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center space-x-2">
              <MdLocationOn className="text-[#ffb701] text-lg" />
              <span>Chittaranjan,Asansol</span>
            </li>
            <li className="flex items-center space-x-2">
              <MdPhone className="text-[#ffb701] text-lg" />
              <span>+123 456 7890</span>
            </li>
            <li className="flex items-center space-x-2">
              <MdEmail className="text-[#ffb701] text-lg" />
              <span>CoffeeAdda@gmail.com</span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 mb-8"></div>

      {/* Bottom Section */}
      <motion.div
        className="footer-bottom flex flex-col md:flex-row justify-between items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        {/* Social Media */}
        <div className="social-links flex space-x-6 mb-4 md:mb-0">
          <motion.a
            href="#facebook"
            className="text-xl text-gray-400 hover:text-[#ffb701] transition"
            whileHover={{ scale: 1.2 }}
          >
            <FaFacebookF />
          </motion.a>
          <motion.a
            href="#twitter"
            className="text-xl text-gray-400 hover:text-[#ffb701] transition"
            whileHover={{ scale: 1.2 }}
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            href="#instagram"
            className="text-xl text-gray-400 hover:text-[#ffb701] transition"
            whileHover={{ scale: 1.2 }}
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="#linkedin"
            className="text-xl text-gray-400 hover:text-[#ffb701] transition"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedinIn />
          </motion.a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} YourBrand. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
