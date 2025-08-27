// src/layouts/DashboardLayout.js
import React from "react";
import Sidebar from "../../components/Admin/sidebar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100 min-h-screen">
        <Outlet /> {/* Yaha page content load hoga */}
      </main>
    </div>
  );
}

export default DashboardLayout;
