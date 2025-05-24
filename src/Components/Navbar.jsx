
import React from 'react';
import { SfInput, SfIconSearch } from '@storefront-ui/react';

const Navbar = () => {
  return (
    <div className="w-full bg-white ">
      {/* Top Links Bar */}
      <div className="bg-gray-100 py-1 px-4 border-b border-gray-200">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center text-xs">
          <div className="flex space-x-6 text-gray-600">
            <a href="#" className="hover:text-orange-500 whitespace-nowrap">SAVE MORE ON APP</a>
            <a href="#" className="hover:text-orange-500 whitespace-nowrap">SELL ON DARAZ</a>
            <a href="#" className="hover:text-orange-500 whitespace-nowrap">HELP & SUPPORT</a>
          </div>
          <div className="flex space-x-4 items-center text-gray-600">
            <a href="#" className="hover:text-orange-500 whitespace-nowrap">LOGIN</a>
            <span>|</span>
            <a href="#" className="hover:text-orange-500 whitespace-nowrap">SIGN UP</a>
            <a href="#" className="text-orange-500 text-xs whitespace-nowrap">click here</a>
          </div>
        </div>
      </div>

      {/* Main Navbar with Search */}
      <div className="py-3 px-4 border-b border-gray-200">
        <div className="max-w-screen-xl mx-auto flex items-center justify-center">
          {/* Logo - Replace with your actual logo */}
          <div className="mr-8">
            <span className="text-2xl font-bold text-orange-500">Virtual Try-On</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <div className="relative flex items-center">
              <SfInput
                className="w-full border-2 border-orange-500 rounded-sm py-2 pl-3 pr-10 focus:outline-none"
                placeholder="Search in Daraz"
                wrapperClassName="w-full"
              />
              <button className="absolute right-0 top-0 h-full px-4 bg-orange-500 text-white rounded-r-sm flex items-center justify-center">
                <SfIconSearch className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Icons */}
          <div className="ml-8 flex space-x-6">
            <a href="#" className="flex flex-col items-center text-xs text-gray-600 hover:text-orange-500">
              <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span>Cart</span>
            </a>
            <a href="#" className="flex flex-col items-center text-xs text-gray-600 hover:text-orange-500">
              <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>Wishlist</span>
            </a>
            <a href="#" className="flex flex-col items-center text-xs text-gray-600 hover:text-orange-500">
              <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Account</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;