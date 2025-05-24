import React from "react";

const OrderSummary = () => {
  return (
    <div className="w-full md:w-1/3 p-4 border rounded bg-white space-y-4">
      <h2 className="text-lg font-semibold">Order Summary</h2>
      <div className="text-sm">
        <div className="flex justify-between">
          <span>Item Total</span>
          <span>Rs. 729</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Fee</span>
          <span>Rs. 160</span>
        </div>
        <hr />
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>Rs. 889</span>
        </div>
      </div>
      <button className="w-full bg-gray-400 text-white py-2 rounded cursor-not-allowed">
        Proceed to Pay
      </button>
    </div>
  );
};

export default OrderSummary;

