import React from "react";
import CheckoutForm from "../CheckoutForm";
import OrderSummary from "../OrderSummary";

const CheckoutPage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 px-4 py-6 bg-gray-100">
      <CheckoutForm />
      <OrderSummary />
    </div>
  );
};

export default CheckoutPage;
