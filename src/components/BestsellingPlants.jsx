import React from "react";

const bestsellingPlants = [
  { id: 1, name: "Aloe Vera", price: "₹299", image: "/assets/aloe-vera.png" },
  { id: 2, name: "Snake Plant", price: "₹499", image: "/assets/snake-plant.png" },
  { id: 3, name: "Peace Lily", price: "₹599", image: "/assets/peace-lily.png" },
  { id: 4, name: "Spider Plant", price: "₹399", image: "/assets/spider-plant.png" },
];

const BestsellingPlants = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-[#4CAF50] text-center">
          Bestselling Plants 🌱
        </h2>

        {/* Product Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {bestsellingPlants.map((plant) => (
            <div key={plant.id} className="bg-[#F5F5DC] p-4 rounded-lg shadow-md hover:scale-105 transition">
              <img src={plant.image} alt={plant.name} className="w-full h-40 object-cover rounded-md" />
              <h3 className="mt-3 text-lg font-semibold text-gray-800">{plant.name}</h3>
              <p className="text-[#4CAF50] font-medium">{plant.price}</p>

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

export default BestsellingPlants;
