import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#F5F5DC] mt-20">
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-[#4CAF50] leading-tight">
            Bring Nature Home 🌿  
          </h1>
          <p className="mt-4 text-gray-700">
            Explore a wide range of plants and decor to refresh your space with greenery and style.
          </p>
          <button className="mt-6 bg-[#4CAF50] text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition">
            Shop Now
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img 
            src="https://hips.hearstapps.com/hmg-prod/images/a-set-of-colorful-potted-plants-on-a-patterned-area-royalty-free-image-1716493110.jpg?crop=1.00xw:0.751xh;0,0.0671xh&resize=1200:*" 
            alt="Green Plants" 
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
