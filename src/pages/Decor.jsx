import React from "react";

const Decor = () => {
  const decorItems = [
    {
      id: 1,
      name: "Hanging Vase",
      price: "₹499",
      image: "https://i.etsystatic.com/16150031/r/il/313887/4769518776/il_1588xN.4769518776_jpni.jpg",
    },
    {
      id: 2,
      name: "Wooden Wall Frame",
      price: "₹799",
      image: "https://atrangistudio.com/cdn/shop/files/4_679574d2-cebb-439a-9e73-30f82b82f506.jpg?v=1725880322&width=700",
    },
    {
      id: 3,
      name: "Decorative Pot",
      price: "₹299",
      image: "https://m.media-amazon.com/images/I/51fHmNoWDWL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      id: 4,
      name: "Fairy Lights",
      price: "₹399",
      image: "https://www.usemeworks.com/cdn/shop/products/KT_18312copy_1.jpg?v=1603625202&width=823",
    },
    {
        id: 1,
        name: "Hanging Vase",
        price: "₹499",
        image: "https://i.etsystatic.com/16150031/r/il/313887/4769518776/il_1588xN.4769518776_jpni.jpg",
      },
      {
        id: 2,
        name: "Wooden Wall Frame",
        price: "₹799",
        image: "https://atrangistudio.com/cdn/shop/files/4_679574d2-cebb-439a-9e73-30f82b82f506.jpg?v=1725880322&width=700",
      },
      {
        id: 3,
        name: "Decorative Pot",
        price: "₹299",
        image: "https://m.media-amazon.com/images/I/51fHmNoWDWL._SX300_SY300_QL70_FMwebp_.jpg",
      },
      {
        id: 4,
        name: "Fairy Lights",
        price: "₹399",
        image: "https://www.usemeworks.com/cdn/shop/products/KT_18312copy_1.jpg?v=1603625202&width=823",
      },
      {
        id: 1,
        name: "Hanging Vase",
        price: "₹499",
        image: "https://i.etsystatic.com/16150031/r/il/313887/4769518776/il_1588xN.4769518776_jpni.jpg",
      },
      {
        id: 2,
        name: "Wooden Wall Frame",
        price: "₹799",
        image: "https://atrangistudio.com/cdn/shop/files/4_679574d2-cebb-439a-9e73-30f82b82f506.jpg?v=1725880322&width=700",
      },
      {
        id: 3,
        name: "Decorative Pot",
        price: "₹299",
        image: "https://m.media-amazon.com/images/I/51fHmNoWDWL._SX300_SY300_QL70_FMwebp_.jpg",
      },
      {
        id: 4,
        name: "Fairy Lights",
        price: "₹399",
        image: "https://www.usemeworks.com/cdn/shop/products/KT_18312copy_1.jpg?v=1603625202&width=823",
      },
      {
        id: 1,
        name: "Hanging Vase",
        price: "₹499",
        image: "https://i.etsystatic.com/16150031/r/il/313887/4769518776/il_1588xN.4769518776_jpni.jpg",
      },
      {
        id: 2,
        name: "Wooden Wall Frame",
        price: "₹799",
        image: "https://atrangistudio.com/cdn/shop/files/4_679574d2-cebb-439a-9e73-30f82b82f506.jpg?v=1725880322&width=700",
      },
      {
        id: 3,
        name: "Decorative Pot",
        price: "₹299",
        image: "https://m.media-amazon.com/images/I/51fHmNoWDWL._SX300_SY300_QL70_FMwebp_.jpg",
      },
      {
        id: 4,
        name: "Fairy Lights",
        price: "₹399",
        image: "https://www.usemeworks.com/cdn/shop/products/KT_18312copy_1.jpg?v=1603625202&width=823",
      },
  ];

  return (
    <div className="min-h-screen bg-[#f5fff5] text-[#2f4f2f] p-8">
      <h2 className="text-3xl font-bold mb-6 text-green-800">Home Decor</h2>
      <div className="flex">
        {/* Sidebar Filters */}
        <div className="w-1/4 pr-6">
          <h3 className="text-xl font-semibold mb-4">Categories</h3>
          <div className="space-y-2">
            <label className="block">
              <input type="checkbox" className="mr-2" /> Wall Hangings
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Vases
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Pots
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Lights
            </label>
          </div>
        </div>

        {/* Decor Product Cards */}
        <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {decorItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-4 border border-green-100"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded"
              />
              <h4 className="text-lg font-semibold mt-3">{item.name}</h4>
              <p className="text-green-700 font-medium mt-1">{item.price}</p>
              <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Decor;
