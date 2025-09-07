
// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "../Layout/Admin/Dashboard";

import Products from "../pages/Admin/product";
import Users from "../pages/Admin/users";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<DashboardLayout />}>
    
          <Route path="products" element={<Products />} />
          <Route path="users" element={<Users />} />
         
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

