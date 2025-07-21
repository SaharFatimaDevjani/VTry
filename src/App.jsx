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



import Navbar from './Components/Frontend/Navbar';
import HeroSection from './components/Frontend/HeroSection';
import BrandSlider from './components/Frontend/BrandSlider';
import ProductSection from './components/Frontend/ProductSection';
import AlwaysOnTrend from './components/Frontend/AlwaysOnTrend';
import WhyChooseUs from './components/Frontend/WhyChooseUs';
import Footer from './components/Frontend/Footer';


import Cart from './pages/Frontend/Viewcart';
import ContactSection from './pages/Frontend/ContactSection'; // import your contact page component
import AboutPage from './pages/Frontend/About'; // if you have an about page
import ProductDetail from "./pages/Frontend/ProductDetail"; // import your product detail page

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
