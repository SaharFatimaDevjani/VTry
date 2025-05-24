import React, { useState } from "react";

const productImages = [
  "https://img.drz.lazcdn.com/static/pk/p/2de5eb85da6450b04dfb960e73849f24.png_720x720q80.png_.webp",
  "https://img.drz.lazcdn.com/static/pk/p/bfdb50e5a49ebbed3589d8ba43163871.png_720x720q80.png_.webp",
  "https://img.drz.lazcdn.com/static/pk/p/d3f57052b165b92f17c8f15f416110b3.png_720x720q80.png_.webp",
  "https://img.drz.lazcdn.com/static/pk/p/cfd0b12a548b1a19d8f7f67c00b6e2a3.png_720x720q80.png_.webp",
];

export default function ProductImages() {
  const [selectedImage, setSelectedImage] = useState(productImages[0]);

  return (

    //   <div className="flex flex-col md:flex-row justify-center gap-4 w-full md:w-1/2">

    //   {/* Thumbnails */}
    //   <div className="flex md:flex-col gap-2">
    //     {productImages.map((img, index) => (
    //       <img
    //         key={index}
    //         src={img}
    //         alt={`Thumb ${index}`}
    //         onClick={() => setSelectedImage(img)}
    //         className={`w-12 h-12 border p-1 cursor-pointer rounded ${selectedImage === img ? "border-orange-500" : "border-gray-300"
    //           }`}
    //       />
    //     ))}
    //   </div>

    //   {/* Main Image */}
    //   <div className="flex-1 border p-2 rounded">
    //     <img
    //       src={selectedImage}
    //       alt="Selected"
    //       className="w-full h-auto max-h-[400px] object-contain"
    //     />
    //   </div>
    // </div>

    <div className="flex flex-col md:flex-row gap-4 w-full md:w-1/2">
      {/* Main Image */}
      <div className="flex-1 border p-2 rounded">
        <img
          src={selectedImage}
          alt="Selected"
          className="w-full h-auto max-h-[400px] object-contain"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2">
        {productImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumb ${index}`}
            onClick={() => setSelectedImage(img)}
            className={`w-12 h-12 border p-1 cursor-pointer rounded ${selectedImage === img ? "border-orange-500" : "border-gray-300"}`}
          />
        ))}
      </div>
    </div>

  );
}
