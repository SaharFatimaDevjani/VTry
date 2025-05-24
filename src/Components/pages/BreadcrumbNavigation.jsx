// components/Breadcrumb.jsx

import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = () => {
  return (
    <nav className="text-sm text-gray-600 px-4 py-2 bg-gray-100">
      <ul className="flex space-x-2">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li>{'>'}</li>
        <li><Link to="/" className="hover:underline">Cameras</Link></li>
        <li>{'>'}</li>
        <li><Link to="/" className="hover:underline">Camera Accessories</Link></li>
        <li>{'>'}</li>
        <li><Link to="/" className="hover:underline">Helmet Mount</Link></li>
        <li>{'>'}</li>
        <li className="text-orange-500">Product Details</li>
      </ul>
    </nav>
  );
};

export default Breadcrumb;
