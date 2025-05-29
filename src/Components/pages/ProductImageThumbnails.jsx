import React, { useState } from "react";
import { pi1, pi2, pi3, pi4 } from "../../assets/images";

const productImages = [pi1, pi2, pi3, pi4];

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
