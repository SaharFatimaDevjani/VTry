import React from "react";

const CheckoutForm = () => {
  return (
    <div className="w-full md:w-2/3 p-4 border rounded space-y-4 bg-white">
      <h2 className="text-lg font-semibold">Delivery Information</h2>
      <form className="space-y-3">
        <div className="grid md:grid-cols-2 gap-4">
          <input type="text" placeholder="Full Name" className="border p-2 rounded w-full" />
          <input type="number" placeholder="Phone Number" className="border p-2 rounded w-full" />
          <input type="text" placeholder="Building / Street" className="border p-2 rounded w-full" />
          <input type="text" placeholder="Colony / Landmark" className="border p-2 rounded w-full" />
          <input type="email" placeholder="Email Address" className="border p-2 rounded w-full" />
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <select className="border p-2 rounded">
            <option>Province</option>
            <option>Sindh</option>
            <option>Punjab</option>
          </select>
          <select className="border p-2 rounded">
            <option>City</option>
            <option>Karachi</option>
            <option>Lahore</option>
          </select>
          <select className="border p-2 rounded">
            <option>Area</option>
            <option>Gulshan</option>
            <option>DHA</option>
          </select>
        </div>
        <textarea placeholder="Complete Address" className="border p-2 rounded w-full" rows="3"></textarea>
        <div className="flex gap-4">
          <button type="button" className="bg-gray-300 px-4 py-2 rounded">Home</button>
          <button type="button" className="bg-gray-300 px-4 py-2 rounded">Office</button>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
