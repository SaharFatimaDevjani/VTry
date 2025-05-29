import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { earrings01, earrings03, earrings05, earrings06, t1 } from '../../assets/images';

const relatedProducts = [
  { id: 12, name: 'Product Name 12',
    price: 350,
     img: earrings03 },
  { id: 7, name: 'Product Name 7', price: 500,
     img: earrings05 },
  { id: 8, name: 'Product Name 8', price: 390, oldPrice: 450,
     img: earrings01, sale: true },
  { id: 11, name: 'Product Name 11', price: 400,
     img: earrings06 },
];
const thumbnails = [
    t1,
    t1,
    t1 
 ];

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImg, setSelectedImg] = useState(thumbnails[0]);

  const increaseQty = () => setQuantity((qty) => qty + 1);
  const decreaseQty = () => setQuantity((qty) => (qty > 1 ? qty - 1 : 1));

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-600 mb-6">
        Home / Earrings / Product Name 10
      </p>

      {/* Main product section */}
      
<div className="max-w-7xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left thumbnails */}
        
        <div className="flex flex-row gap-4 w-full md:w-2/5">
          {/* Main Image */}
          <div className="flex-1 border p-2 rounded flex items-center justify-center">
            <Zoom>
              <img
                src={selectedImg}
                alt="Selected"
                className="w-full h-auto max-h-[400px] object-contain cursor-zoom-in"
              />
            </Zoom>
          </div>
          {/* Thumbnails */}
          <div className="flex flex-col gap-2">
            {thumbnails.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumb ${index}`}
                onClick={() => setSelectedImg(img)}
                className={`w-12 h-12 border p-1 cursor-pointer rounded ${selectedImg === img ? "border-orange-500" : "border-gray-300"}`}
              />
            ))}
          </div>
        </div>

        {/* Product details */}
        <div className="w-full md:w-2/5 space-y-6">
          {/* Breadcrumb */}
          <p className="text-xs text-gray-500">
            Home / Earrings / Product Name 10
          </p>

          {/* Category label */}
          <p className="uppercase text-sm text-gray-500">Earrings</p>

          {/* Product name */}
          <h1 className="text-4xl font-serif font-semibold tracking-wide">
            Product Name 10
          </h1>

          {/* Price and free shipping */}
          <p className="text-xl font-bold text-rose-600">
            $1,700.00{" "}
            <span className="font-normal text-gray-600">& Free Shipping</span>
          </p>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed">
            Ut non elit lorem. Duis pharetra odio vitae nisl luctus, at
            volutpat arcu lacinia. Aliquam id ullamcorper augue. Fusce feugiat
            nibh et nisl mollis hendrerit. Mauris sit amet nulla in augue
            laoreet lobortis ac eleifend nunc. Quisque eleifend sollicitudin
            nulla, et consequat eros. Donec pellentesque dapibus massa ut
            cursus.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Quisque ut augue eu dui semper eleifend. Aliquam imperdiet nisl
            libero, vitae vulputate lectus fringilla eget.
          </p>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center space-x-4 mt-6">
            <button
              onClick={decreaseQty}
              className="border border-gray-700 px-4 py-1 text-lg font-bold hover:bg-gray-100 transition"
            >
              -
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              onClick={increaseQty}
              className="border border-gray-700 px-4 py-1 text-lg font-bold hover:bg-gray-100 transition"
            >
              +
            </button>

            <Link to="/cart">
                <button className="ml-6 px-8 py-2 border border-gray-900 font-semibold hover:bg-black hover:text-white transition">
                ADD TO CART
                </button>
            
            </Link>
          </div>

          {/* Category text */}
          <p className="text-sm text-gray-600 mt-2">Category: Earrings</p>
        </div>
      </div>
    </div>



      {/* Description and reviews */}
      <div className="mt-16 space-y-8">
        <div>
          <h2 className="font-serif font-semibold text-lg mb-2">Description</h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl">
            Nullam dapibus metus lacinia, vestibulum arcu vitae, fringilla elit. Maecenas pellentesque justo a bibendum eleifend. Nunc metus metus, bibendum at quam eget, congue fermentum diam. Cras rhoncus ex a neque dictum pellentesque. Cras et placerat est, et feugiat diam. Aliquam nec odio quis nibh fringilla euismod.
          </p>
        </div>

        <div>
          <h2 className="font-serif font-semibold text-lg mb-4">Reviews (0)</h2>
          <div className="border border-gray-300 p-4 max-w-4xl">
            <p className="mb-2">There are no reviews yet.</p>
            <form className="space-y-4">
              <p className="font-semibold">Be the first to review "Product Name 10"</p>
              <p className="text-xs text-gray-500">Your email address will not be published. Required fields are marked *</p>

              <label className="block">
                <span className="font-semibold text-sm">Your rating *</span>
                <div className="flex space-x-1 mt-1 text-rose-600 cursor-pointer">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.462a1 1 0 00-.364 1.118l1.287 3.967c.3.922-.755 1.688-1.54 1.118l-3.388-2.462a1 1 0 00-1.176 0l-3.388 2.462c-.785.57-1.838-.196-1.539-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.044 9.393c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.966z" />
                    </svg>
                  ))}
                </div>
              </label>

              <label className="block">
                <span className="font-semibold text-sm">Your review *</span>
                <textarea className="w-full border border-gray-300 rounded p-2 mt-1" rows="4" required></textarea>
              </label>

              <div className="flex gap-4">
                <label className="flex-1 block">
                  <span className="font-semibold text-sm">Name *</span>
                  <input type="text" className="w-full border border-gray-300 rounded p-2 mt-1" required />
                </label>

                <label className="flex-1 block">
                  <span className="font-semibold text-sm">Email *</span>
                  <input type="email" className="w-full border border-gray-300 rounded p-2 mt-1" required />
                </label>
              </div>

              <label className="flex items-center text-sm mt-2 gap-2">
                <input type="checkbox" />
                Save my name, email, and website in this browser for the next time I comment.
              </label>

              <button type="submit" className="border border-gray-900 px-6 py-2 font-semibold hover:bg-black hover:text-white transition mt-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="mt-20">
        <h3 className="text-2xl font-serif mb-6">Related Products</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-7xl">
          {relatedProducts.map((product) => (
            <div key={product.id} className="space-y-2 cursor-pointer">
              <div className="relative">
                {product.sale && (
                  <span className="absolute top-2 left-2 bg-rose-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold z-10">
                    Sale!
                  </span>
                )}
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-48 object-contain border border-gray-300"
                />
              </div>
              <h4 className="font-serif text-sm tracking-wide">{product.name}</h4>
              <p className="text-sm">
                {product.oldPrice && (
                  <span className="line-through text-gray-400 mr-2">${product.oldPrice.toFixed(2)}</span>
                )}
                <span className="font-semibold">${product.price.toFixed(2)}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
}
