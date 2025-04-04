import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#F5F5DC] shadow-md ">
      <div className="max-w-7xl mx-auto px-4 py-7 flex justify-between items-center">
        {/* Logo / Site Name */}
        <h1 className="text-4xl font-bold text-[#4CAF50] tracking-wide">
          Plant Care 🌿
        </h1>


        
        <ul className="hidden md:flex space-x-8 text-[#4CAF50] font-large">
          <li className="hover:text-green-700 cursor-pointer">Home</li>
          <li className="hover:text-green-700 cursor-pointer">Plants</li>
          <li className="hover:text-green-700 cursor-pointer">Decor</li>
          <li className="hover:text-green-700 cursor-pointer">Reviews</li>
          <li className="hover:text-green-700 cursor-pointer">Contact</li>
        </ul>
        

        {/* Mobile Menu Icon Placeholder */}
        <div className="md:hidden">
          <button className="text-[#4CAF50] focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
