// import React from 'react'
// import { RouterProvider } from 'react-router-dom'
// import router from './AppRoutes/MainAppRoutes'

// const App = () => {
// return (
// <RouterProvider router={router}/>
// )
// }
// export default App

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Categories from './Components/Categories';
import JustForYou from './Components/JustForYou';
import FlashSale from './Components/FlashSale';
import PaymentSection from './Components/paymentmethods';
import FooterFourth from './Components/FooterFourth';
import FooterContent from './Components/FooterContent';
import ProductDetail from './Components/ProductDetail';
import CheckoutPage from './Components/pages/CheckoutPage';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="w-full max-w-[1536px] mx-auto px-4 bg-gray-50">
                <Banner />
                <FlashSale />
                <Categories />
                <JustForYou />
              </div>
            }
          />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
        <PaymentSection />
        <FooterContent />
        <FooterFourth />
      </BrowserRouter>
    </>
  );
}
