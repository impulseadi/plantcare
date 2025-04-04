import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#4CAF50] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Brand Name */}
        <div className="text-2xl font-bold">PlantCare 🌿</div>

        {/* Quick Links */}
        <ul className="flex space-x-6 mt-4 md:mt-0">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">Shop</a></li>
          <li><a href="#" className="hover:underline">About Us</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-300">📘</a> {/* Facebook */}
          <a href="#" className="hover:text-gray-300">📷</a> {/* Instagram */}
          <a href="#" className="hover:text-gray-300">🐦</a> {/* Twitter */}
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-sm text-gray-200">
        © 2025 PlantCare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
