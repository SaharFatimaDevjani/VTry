// import React from 'react'
// import { RouterProvider } from 'react-router-dom'
// import router from './AppRoutes/MainAppRoutes'

// const App = () => {
// return (
// <RouterProvider router={router}/>
// )
// }
// export default App

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BrandSlider from "./components/BrandSlider";
import ProductSection from "./components/ProductSection";
import AlwaysOnTrend from "./components/AlwaysOnTrend";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";
import Cart from "./components/pages/Viewcart";

import ContactSection from "./components/pages/ContactSection";
import AboutPage from "./components/pages/About";
import ProductDetail from "./components/pages/ProductDetail";
import { useLocation } from "react-router-dom";

// Admin components
import Dashboard from "./components/admin/Dashboard";
import ProductsManager from "./components/admin/ProductsManager";
import CategoriesManager from "./components/admin/CategoriesManager";
import BidsManager from "./components/admin/BidsManager";
import UsersManager from "./components/admin/UsersManager";
import Settings from "./components/admin/Settings";
import AdminLayout from "./Layout/Admin";

// Auth components
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

function AppContent() {
  const { pathname } = useLocation();
  const isAdminPage = pathname.startsWith("/admin");
  const isAuthPage = pathname === "/login" || pathname === "/signup";
  const isHomePage = pathname === "/";

  return (
    <>
      {!isAdminPage && !isAuthPage && <Navbar />}
      {!isAdminPage && !isAuthPage && isHomePage && <HeroSection />}
      <Routes>
          <Route
            path="/"
            element={
              <>
                <BrandSlider />
                <ProductSection title="Trending Now" />
                <ProductSection title="Best Selling" />
                <AlwaysOnTrend />
                <WhyChooseUs />
              </>
            }
          />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Admin Routes - Protected */}
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute requireAdmin={false}>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="products" element={<ProductsManager />} />
            <Route path="categories" element={<CategoriesManager />} />
            <Route path="bids" element={<BidsManager />} />
            <Route path="users" element={<UsersManager />} />
            <Route path="settings" element={<Settings />} />
          </Route>
      </Routes>
      {!isAdminPage && !isAuthPage && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
}
