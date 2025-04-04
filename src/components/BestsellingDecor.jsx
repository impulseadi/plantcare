import React from "react";

const bestsellingDecor = [
  { id: 1, name: "Minimalist Vase", price: "₹799", image: "/assets/vase.png" },
  { id: 2, name: "Wall Art Frame", price: "₹1,199", image: "/assets/wall-art.png" },
  { id: 3, name: "Wooden Lamp", price: "₹1,599", image: "/assets/lamp.png" },
  { id: 4, name: "Indoor Fountain", price: "₹2,499", image: "/assets/fountain.png" },
];

const BestsellingDecor = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-[#4CAF50] text-center">
          Bestselling Home Decor 🏡
        </h2>

        {/* Product Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {bestsellingDecor.map((decor) => (
            <div key={decor.id} className="bg-[#F5F5DC] p-4 rounded-lg shadow-md hover:scale-105 transition">
              <img src={decor.image} alt={decor.name} className="w-full h-40 object-cover rounded-md" />
              <h3 className="mt-3 text-lg font-semibold text-gray-800">{decor.name}</h3>
              <p className="text-[#4CAF50] font-medium">{decor.price}</p>

              {/* Add to Cart Button */}
              <button className="mt-3 w-full bg-[#4CAF50] text-white py-2 rounded-md hover:bg-[#388E3C] transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestsellingDecor;
