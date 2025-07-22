import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from './components/Frontend/Navbar';
import HeroSection from './components/Frontend/HeroSection';
import Frontend from '././AppRoutes/Frontend'; // Import Frontend
import Footer from '././components/Frontend/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <HeroSection />
      <Frontend /> {/* Call the Frontend component here */}
      <Footer />
    </BrowserRouter>
    
    
  );
}
