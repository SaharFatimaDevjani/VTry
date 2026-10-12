import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";

const shopLinks = [
  { to: "/rings", label: "RINGS" },
  { to: "/bracelets", label: "BRACELETS" },
  { to: "/earrings", label: "EARRINGS" },
  { to: "/necklaces", label: "NECKLACES" },
];

const pageLinks = [
  { to: "/", label: "HOME" },
  { to: "/about", label: "ABOUT" },
  { to: "/contact", label: "CONTACT" },
];

function CartLink({ onClick }) {
  return (
    <Link to="/cart" onClick={onClick} className="relative inline-flex items-center pr-3">
      <span role="img" aria-label="cart">
        🛒
      </span>
      <span className="hidden sm:inline ml-1">Cart</span>
      <span className="absolute -top-2 right-0 bg-black text-white text-xs px-1 rounded-full">
        1
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="border-b text-sm font-medium relative">
      <div className="flex justify-between items-center py-3 px-4 lg:py-4 lg:px-8">
        {/* Mobile menu toggle */}
        <button
          type="button"
          className="lg:hidden p-1 -ml-1"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <nav className="hidden lg:flex space-x-6">
          {shopLinks.map((l) => (
            <Link key={l.to} to={l.to}>{l.label}</Link>
          ))}
        </nav>

        <Link to="/" onClick={close} className="text-xl font-bold tracking-wide">
          <img src={logo} alt="logo" className="w-16 h-10 lg:w-20 lg:h-12" />
        </Link>

        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex space-x-4">
            {pageLinks.map((l) => (
              <Link key={l.to} to={l.to}>{l.label}</Link>
            ))}
          </div>
          <CartLink onClick={close} />
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden absolute inset-x-0 top-full z-50 bg-white border-b shadow-md px-4 pb-4">
          <ul className="divide-y">
            {[...pageLinks, ...shopLinks].map((l) => (
              <li key={l.to}>
                <Link to={l.to} onClick={close} className="block py-3">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
