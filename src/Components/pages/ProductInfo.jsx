// components/ProductInfo.jsx

import React, { useState } from "react";
import { Link } from 'react-router-dom';
const ProductInfo = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    // <div className="px-4 py-4 max-w-2xl space-y-4">
    //   {/* Product Title */}
    //   <h1 className="text-xl font-semibold">
    //     Motorcycle Helmet Chin Mount for Action Camera Full Face GoPro Mobile Adjustable Stand
    //   </h1>

    //   {/* Brand */}
    //   <p className="text-sm text-gray-500">
    //     Brand: <span className="text-blue-600">No Brand</span>
    //   </p>

    //   {/* Price */}
    //   <div className="text-2xl text-orange-500 font-bold">Rs. 729</div>

    //   {/* Quantity Selector */}
    //   <div className="flex items-center gap-2">
    //     <span className="text-sm font-medium">Quantity:</span>
    //     <button
    //       onClick={() => setQuantity((q) => Math.max(1, q - 1))}
    //       className="px-2 border rounded"
    //     >
    //       -
    //     </button>
    //     <span>{quantity}</span>
    //     <button
    //       onClick={() => setQuantity((q) => q + 1)}
    //       className="px-2 border rounded"
    //     >
    //       +
    //     </button>
    //   </div>

    //   {/* Buttons */}
    //   <div className="flex gap-4">
    //     <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded">
    //       Buy Now
    //     </button>
    //     <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
    //       Add to Cart
    //     </button>
    //   </div>

    //   {/* Delivery Info */}
    //   <div className="text-sm text-gray-600 mt-4">
    //     <p><strong>Delivery:</strong> Rs. 135 to Karachi - Gulshan</p>
    //     <p><strong>Delivery time:</strong> 2–4 days</p>
    //     <p><strong>Return:</strong> 14 days easy return</p>
    //   </div>
    // </div>
    <div className="flex flex-col md:flex-row gap-6">
      {/* Left Column – Product Info */}
      <div className="w-full md:w-2/3 px-4 py-4 space-y-4">
        {/* Product Title */}
        <h1 className="text-xl font-semibold">
          Motorcycle Helmet Chin Mount for Action Camera Full Face GoPro Mobile Adjustable Stand
        </h1>

        {/* Brand */}
        <p className="text-sm text-gray-500">
          Brand: <span className="text-blue-600">No Brand</span>
        </p>

        {/* Price */}
        <div className="text-2xl text-orange-500 font-bold">Rs. 729</div>

        {/* Quantity Selector */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Quantity:</span>
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="px-2 border rounded"
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="px-2 border rounded"
          >
            +
          </button>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          

           <Link to="/checkout">
        <button className="bg-orange-500 text-white px-4 py-2 rounded">Buy Now</button>
      </Link>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
            Add to Cart
          </button>
        </div>

        {/* Delivery Info */}
        <div className="text-sm text-gray-600 mt-4">
          <p><strong>Delivery:</strong> Rs. 135 to Karachi - Gulshan</p>
          <p><strong>Delivery time:</strong> 2–4 days</p>
          <p><strong>Return:</strong> 14 days easy return</p>
        </div>
      </div>

      {/* Right Column – Add your new content here */}
     

      <div className="w-full md:w-1/3 px-4 py-4 border rounded space-y-4 bg-gray-50">
        <h2 className="text-lg font-semibold">Delivery Options</h2>

        {/* Location Info */}
        <div className="flex items-start gap-2">
          <svg className="w-5 h-5 text-gray-600" aria-hidden="true">
            <use xlinkHref="#lazadaicon_location"></use>
          </svg>
          <div>
            <p className="text-sm text-gray-700 font-medium">
              Sindh, Karachi - Gulshan-e-Iqbal, Block 15
            </p>
            <a href="#" className="text-xs text-blue-600 hover:underline">CHANGE</a>
          </div>
        </div>

        {/* Standard Delivery Option */}
        <div className="flex items-start gap-3 border-t pt-4">
          <svg className="w-5 h-5 text-gray-600" aria-hidden="true">
            <use xlinkHref="#lazadaicon_standard"></use>
          </svg>
          <div className="flex-1">
            <p className="text-sm font-medium">Standard Delivery</p>
            <p className="text-sm text-gray-500">Guaranteed by 15–19 May</p>
          </div>
          <div className="text-sm text-gray-700 font-semibold">Rs. 160</div>
        </div>

        {/* Cash on Delivery Option */}
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-gray-600" aria-hidden="true">
            <use xlinkHref="#lazadaicon_shipping"></use>
          </svg>
          <div>
            <p className="text-sm font-medium">Cash on Delivery Available</p>
          </div>
        </div>
      </div>

    </div>

  );
};

export default ProductInfo;
