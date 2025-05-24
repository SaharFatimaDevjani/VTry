// components/ProductTabs.jsx

import React, { useState } from "react";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="px-4 py-6 max-w-4xl mx-auto">
      {/* Tabs */}
      <div className="flex gap-4 border-b mb-4">
        <button
          className={`pb-2 border-b-2 ${
            activeTab === "description" ? "border-orange-500 font-semibold" : "border-transparent"
          }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`pb-2 border-b-2 ${
            activeTab === "specs" ? "border-orange-500 font-semibold" : "border-transparent"
          }`}
          onClick={() => setActiveTab("specs")}
        >
          Specifications
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "description" && (
        <div className="text-sm text-gray-700 leading-relaxed">
          <p>
            This motorcycle helmet chin mount is perfect for GoPro and other action cameras. Adjustable and durable, it provides stable footage while riding.
          </p>
          <ul className="list-disc ml-5 mt-2">
            <li>Adjustable strap system</li>
            <li>Compatible with most full-face helmets</li>
            <li>Durable and lightweight</li>
            <li>Easy to install and remove</li>
          </ul>
        </div>
      )}

      {activeTab === "specs" && (
        <div className="text-sm text-gray-700">
          <table className="w-full text-left border-collapse mt-2">
            <tbody>
              <tr>
                <th className="p-2 border">Material</th>
                <td className="p-2 border">Plastic + Nylon</td>
              </tr>
              <tr>
                <th className="p-2 border">Compatibility</th>
                <td className="p-2 border">GoPro, Action Cameras</td>
              </tr>
              <tr>
                <th className="p-2 border">Weight</th>
                <td className="p-2 border">120g</td>
              </tr>
              <tr>
                <th className="p-2 border">Color</th>
                <td className="p-2 border">Black</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProductTabs;
