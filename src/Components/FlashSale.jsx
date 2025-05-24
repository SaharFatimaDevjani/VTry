import { SfButton } from "@storefront-ui/react";
import React from 'react';

const FlashSale = () => {
  const products = [
    {
      id: 1,
      title: "Customize Name Cufflinks, Customize...",
      price: 649,
      discountPrice: 120,
      discountPercent: 44,
      image: "https://img.drz.lazcdn.com/static/pk/p/8b3871a4567dc95731bb57aa3c4dff66.png_400x400q80.png_.webp"
    },
    {
      id: 2,
      title: "Ruku Garments Pack Of 3 Stylish Sondos & Shorts...",
      price: 985,
      discountPrice: 159,
      discountPercent: 38,
      image: "https://img.drz.lazcdn.com/static/pk/p/e50b888d7f01b304bbabaeb16a0fc03d.png_400x400q80.png_.webp"
    },
    {
      id: 3,
      title: "Keratin Hair Mask Treatment 500mL...",
      price: 349,
      discountPrice: 1745,
      discountPercent: 80,
      image: "https://img.drz.lazcdn.com/g/kf/S77ccc0681fd545d69cdf55d132b7c85f9.jpg_400x400q80.jpg_.webp"
    },
    {
      id: 4,
      title: "USB Handheld Mini Fan Foldable Portable Neck...",
      price: 1672,
      discountPrice: 3800,
      discountPercent: 56,
      image: "https://img.drz.lazcdn.com/static/pk/p/8664e75f701d08bf609bb4d3153264f7.jpg_400x400q80.jpg_.webp"
    },
    {
      id: 5,
      title: "(Buy I Get I Free) AKG Handsfree - Universal...",
      price: 449,
      discountPrice: 1500,
      discountPercent: 70,
      image: "https://img.drz.lazcdn.com/static/pk/p/3eac9ee3302e2eac7d3cbd309be921af.jpg_400x400q80.jpg_.webp"
    },
    {
      id: 6,
      title: "Datz Brand Boho Floral Wall Art, Home...",
      price: 217,
      discountPrice: 999,
      discountPercent: 78,
      image: "https://img.drz.lazcdn.com/static/pk/p/15a5c1f3bc47c5c0cfb3a0cc7ce2530a.jpg_400x400q80.jpg_.webp"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold text-gray-800">Flash Sale</h2>
        <span className="bg-red-600 text-white text-sm font-medium px-3 py-1 rounded">
        SHOP ALL PRODUCTS
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {products.map((product) => (
          <div key={product.id} className="border border-gray-200 rounded-md p-2 hover:shadow-md transition-all">
            {/* Product Image */}
            <div className="relative pb-[100%] mb-2 overflow-hidden rounded-md">
              <img 
                src={product.image} 
                alt={product.title}
                className="absolute h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Product Title */}
            <h3 className="text-xs font-medium text-gray-800 mb-1 line-clamp-2 h-10">
              {product.title}
            </h3>
            
            {/* Pricing */}
            <div className="flex flex-col">
              <span className="text-sm font-bold text-gray-900">Rs.{product.price}</span>
              <div className="flex items-center gap-1">
                <span className="text-xs text-gray-500 line-through">Rs.{product.discountPrice}</span>
                <span className="text-xs font-medium text-green-600">-{product.discountPercent}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default FlashSale;