// src/components/Sidebar.js
import React from "react";
import { navItems } from "../../config/navitem"; // aapka navItems array
import { Link } from "react-router-dom";
import { Home, Users, Settings, User, XSquare, ChartPie, Plug, X } from "lucide-react";

const iconMap = {
  "chart-pie": ChartPie,
  "users": Users,
  "gear-six": Settings,
  "user": User,
  "x-square": XSquare,
  "plugs-connected": Plug,
};

function Sidebar({ open = false, onClose = () => {} }) {
  return (
    <>
    {/* Backdrop on mobile */}
    {open && (
      <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={onClose} />
    )}
    <aside
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 text-white p-4 min-h-screen transform transition-transform md:static md:translate-x-0 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <button className="md:hidden" onClick={onClose} aria-label="Close menu">
          <X className="w-5 h-5" />
        </button>
      </div>
      <nav className="space-y-2">
        {navItems.map((item) => {
          const Icon = iconMap[item.icon] || Home;
          return (
            <Link
              key={item.key}
              to={item.href}
              onClick={onClose}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-700"
            >
              <Icon className="w-5 h-5" />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
    </>
  );
}

export default Sidebar;
