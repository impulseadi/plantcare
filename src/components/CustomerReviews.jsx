import React from "react";

const reviews = [
  {
    id: 1,
    name: "Aarav Sharma",
    image: "/assets/user1.png",
    rating: 5,
    review: "The plants are so fresh and healthy! Loved the packaging and quick delivery.",
  },
  {
    id: 2,
    name: "Neha Verma",
    image: "/assets/user2.png",
    rating: 4,
    review: "Beautiful home decor items. The vase I ordered looks amazing in my living room.",
  },
  {
    id: 3,
    name: "Rahul Mehta",
    image: "/assets/user3.png",
    rating: 5,
    review: "Fantastic quality! The wooden lamp was even better than I expected.",
  },
];

const CustomerReviews = () => {
  return (
    <section className="py-16 bg-[#F5F5DC]">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-[#4CAF50] text-center">
          What Our Customers Say ⭐
        </h2>

        {/* Review Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src={review.image} alt={review.name} className="w-16 h-16 mx-auto rounded-full" />
              <h3 className="mt-3 text-lg font-semibold text-gray-800">{review.name}</h3>

              {/* Stars */}
              <div className="mt-2 flex justify-center">
                {"⭐".repeat(review.rating)}
              </div>

              <p className="mt-3 text-gray-600">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
