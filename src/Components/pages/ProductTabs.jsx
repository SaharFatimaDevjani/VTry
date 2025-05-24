import React, { useState } from "react";

const tabs = ["Description", "Specifications", "Warranty"];

const tabContent = {
  Description: `This Motorcycle Helmet Chin Mount is perfect for GoPro and other action cameras. Adjustable design for better fit. Suitable for full-face helmets. Lightweight and durable.`,
  Specifications: `
- Material: ABS Plastic  
- Compatibility: GoPro, SJCAM, Xiaomi Yi  
- Mount Type: Chin Mount  
- Adjustable: Yes  
- Color: Black`,
  Warranty: `7 Days Replacement Only. No additional warranty provided.`,
};

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("Description");

  return (
    <div className="max-w-6xl mx-auto mt-8 px-4">
      <div className="border-b">
        <ul className="flex gap-4">
          {tabs.map((tab) => (
            <li key={tab}>
              <button
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-medium ${
                  activeTab === tab
                    ? "border-b-2 border-orange-500 text-orange-600"
                    : "text-gray-600 hover:text-orange-600"
                }`}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 text-sm text-gray-800 whitespace-pre-line">
        {tabContent[activeTab]}
      </div>
    </div>
  );
}
