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
import HeroSection from './components/HeroSection';
import BrandSlider from './components/BrandSlider';
import ProductSection from './components/ProductSection';
import AlwaysOnTrend from './components/AlwaysOnTrend';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import Cart from './components/pages/Viewcart';

import ContactSection from './components/pages/ContactSection'; // import your contact page component
import AboutPage from './components/pages/About'; // if you have an about page
import ProductDetail from "./components/pages/ProductDetail"; // import your product detail page

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <Navbar /> */}
        <HeroSection />
        <Routes>
          <Route path="/" element={
            <>
              <BrandSlider />
              <ProductSection title="Trending Now" />
              <ProductSection title="Best Selling" />
              <AlwaysOnTrend />
              <WhyChooseUs />
            </>
          } />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          {/* Add other routes as needed */}
        </Routes>
        <Footer />
        {/* <HeroSection />
        <BrandSlider />
        <ProductSection title="Trending Now" />
        <ProductSection title="Best Selling" />
        <AlwaysOnTrend />
        <WhyChooseUs />
        <Footer /> */}
      </BrowserRouter>
    </>
  );
}
