import React from 'react';
import { Routes, Route } from 'react-router-dom';

import BrandSlider from '../components/Frontend/BrandSlider';
import ProductSection from '../components/Frontend/ProductSection';
import AlwaysOnTrend from '../components/Frontend/AlwaysOnTrend';
import WhyChooseUs from '../components/Frontend/WhyChooseUs';
import ContactSection from '../pages/Frontend/ContactSection';
import AboutPage from '../pages/Frontend/About';
import ProductDetail from '../pages/Frontend/ProductDetail';
import Cart from '../pages/Frontend/Viewcart';

export default function Frontend() {
  return (
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
    </Routes>
  );
}
