import React, { useState } from "react";

const plantData = [
  { id: 1, name: "Aloe Vera", category: "Small", price: 199, image: "https://unlimitedgreens.com/cdn/shop/products/Aloe-Vera-Website-Front.webp?v=1676457070" },
  { id: 2, name: "Peace Lily", category: "Medium", price: 349, image: "https://m.media-amazon.com/images/I/41qGco3XfnL._SX300_SY300_QL70_FMwebp_.jpg" },
  { id: 3, name: "Fiddle Leaf Fig", category: "Large", price: 799, image: "https://www.palasa.co.in/cdn/shop/articles/IMG_20220226_173034_1.jpg?v=1694161186&width=1780" },
  { id: 4, name: "Snake Plant", category: "Medium", price: 299, image: "https://images.squarespace-cdn.com/content/v1/54fbb611e4b0d7c1e151d22a/1607997169020-HUYXENEIG9YVWUUQT7UN/Snake+Plant.jpg?format=2500w" },
  // Add more as needed
  { id: 1, name: "Aloe Vera", category: "Small", price: 199, image: "https://unlimitedgreens.com/cdn/shop/products/Aloe-Vera-Website-Front.webp?v=1676457070" },
  { id: 2, name: "Peace Lily", category: "Medium", price: 349, image: "https://m.media-amazon.com/images/I/41qGco3XfnL._SX300_SY300_QL70_FMwebp_.jpg" },
  { id: 3, name: "Fiddle Leaf Fig", category: "Large", price: 799, image: "https://www.palasa.co.in/cdn/shop/articles/IMG_20220226_173034_1.jpg?v=1694161186&width=1780" },
  { id: 4, name: "Snake Plant", category: "Medium", price: 299, image: "https://images.squarespace-cdn.com/content/v1/54fbb611e4b0d7c1e151d22a/1607997169020-HUYXENEIG9YVWUUQT7UN/Snake+Plant.jpg?format=2500w" },
  { id: 1, name: "Aloe Vera", category: "Small", price: 199, image: "https://unlimitedgreens.com/cdn/shop/products/Aloe-Vera-Website-Front.webp?v=1676457070" },
  { id: 2, name: "Peace Lily", category: "Medium", price: 349, image: "https://m.media-amazon.com/images/I/41qGco3XfnL._SX300_SY300_QL70_FMwebp_.jpg" },
  { id: 3, name: "Fiddle Leaf Fig", category: "Large", price: 799, image: "https://www.palasa.co.in/cdn/shop/articles/IMG_20220226_173034_1.jpg?v=1694161186&width=1780" },
  { id: 4, name: "Snake Plant", category: "Medium", price: 299, image: "https://images.squarespace-cdn.com/content/v1/54fbb611e4b0d7c1e151d22a/1607997169020-HUYXENEIG9YVWUUQT7UN/Snake+Plant.jpg?format=2500w" },
  { id: 1, name: "Aloe Vera", category: "Small", price: 199, image: "https://unlimitedgreens.com/cdn/shop/products/Aloe-Vera-Website-Front.webp?v=1676457070" },
  { id: 2, name: "Peace Lily", category: "Medium", price: 349, image: "https://m.media-amazon.com/images/I/41qGco3XfnL._SX300_SY300_QL70_FMwebp_.jpg" },
  { id: 3, name: "Fiddle Leaf Fig", category: "Large", price: 799, image: "https://www.palasa.co.in/cdn/shop/articles/IMG_20220226_173034_1.jpg?v=1694161186&width=1780" },
  { id: 4, name: "Snake Plant", category: "Medium", price: 299, image: "https://images.squarespace-cdn.com/content/v1/54fbb611e4b0d7c1e151d22a/1607997169020-HUYXENEIG9YVWUUQT7UN/Snake+Plant.jpg?format=2500w" },
];

const categories = ["Small", "Medium", "Large"];

const PlantPage = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredPlants =
    selectedCategories.length === 0
      ? plantData
      : plantData.filter((plant) => selectedCategories.includes(plant.category));

  return (
    <div className="flex flex-col md:flex-row gap-4 p-6 bg-[#fefdf6] min-h-screen">
      {/* Left: Filters */}
      <aside className="md:w-1/4 bg-white shadow-md p-4 rounded-xl">
        <h2 className="text-lg font-semibold mb-4 text-[#2e7d32]">Categories</h2>
        {categories.map((cat) => (
          <div key={cat} className="mb-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                value={cat}
                checked={selectedCategories.includes(cat)}
                onChange={() => handleCategoryChange(cat)}
              />
              {cat} Plants
            </label>
          </div>
        ))}
      </aside>

      {/* Right: Products */}
      <section className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlants.map((plant) => (
          <div key={plant.id} className="bg-white rounded-xl shadow-md p-4">
            <img
              src={plant.image}
              alt={plant.name}
              className="h-40 w-full object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-[#2e7d32]">{plant.name}</h3>
            <p className="text-gray-600">₹{plant.price}</p>
            <button className="mt-2 bg-[#4CAF50] text-white px-4 py-2 rounded hover:bg-green-700 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PlantPage;
