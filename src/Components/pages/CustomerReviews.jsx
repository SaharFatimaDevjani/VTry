// components/CustomerReviews.jsx

import React from "react";
import { c5be01b235164d79918f01d3979b87a5 } from "../../assets/images";

const reviews = [
  {
    user: "Ali Khan",
    rating: 5,
    text: "Very good product. Works perfectly with my GoPro!",
    image: c5be01b235164d79918f01d3979b87a5,
    verified: true,
  },
  {
    user: "Zara Ali",
    rating: 4,
    text: "Quality is decent for the price.",
    image: null,
    verified: true,
  },
];

const CustomerReviews = () => {
  return (
    <div className="px-4 py-6 max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>

      {reviews.map((review, idx) => (
        <div key={idx} className="border-b py-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-medium">{review.user}</span>
            {review.verified && (
              <span className="text-green-600 text-xs bg-green-100 px-2 rounded">
                Verified Purchase
              </span>
            )}
          </div>

          {/* Stars */}
          <div className="text-yellow-400">
            {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
          </div>

          {/* Review text */}
          <p className="text-sm text-gray-700 mt-2">{review.text}</p>

          {/* Review image */}
          {review.image && (
            <img
              src={review.image}
              alt="User Uploaded"
              className="w-24 h-24 mt-2 rounded border"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default CustomerReviews;
