// components/Pagination.jsx

import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-center items-center gap-2 py-4">
      <button className="px-3 py-1 border rounded hover:bg-gray-200">Previous</button>
      <button className="px-3 py-1 border rounded bg-orange-500 text-white">1</button>
      <button className="px-3 py-1 border rounded hover:bg-gray-200">2</button>
      <button className="px-3 py-1 border rounded hover:bg-gray-200">Next</button>
    </div>
  );
};

export default Pagination;
