import React, { useState } from "react";
import Sidebar from "../../Components/Admin/sidebar";
import { Outlet } from "react-router-dom";
import { Menu } from "lucide-react";

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 min-w-0">
        {/* Mobile top bar */}
        <div className="md:hidden flex items-center gap-3 bg-gray-900 text-white px-4 py-3">
          <button onClick={() => setSidebarOpen(true)} aria-label="Open menu">
            <Menu className="w-6 h-6" />
          </button>
          <span className="font-bold">Dashboard</span>
        </div>
        <main className="p-4 md:p-6 bg-gray-100 min-h-screen">
          <Outlet /> {/* Yaha page content load hoga */}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
