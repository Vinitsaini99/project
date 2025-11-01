import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Heart, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="backdrop-blur-md bg-gradient-to-r from-amber-700/80 via-amber-500/70 to-yellow-400/70 text-white/90 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left Links */}
          <div className="hidden md:flex gap-6 text-lg font-medium">
            <Link to="/" className="hover:text-amber-200/90 transition-all">
              Home
            </Link>
            <Link to="/about" className="hover:text-amber-200/90 transition-all">
              About
            </Link>
            <Link to="/product" className="hover:text-amber-200/90 transition-all">
              Product
            </Link>
            <Link to="/category" className="hover:text-amber-200/90 transition-all">
              Category
            </Link>
          </div>

          {/* Center Logo */}
          <div className="text-4xl sm:text-5xl font-[Alex_Brush] text-amber-800 tracking-wide drop-shadow-md">
            FabriQ
          </div>

          {/* Right Icons */}
          <div className="hidden md:flex items-center gap-6 text-lg font-medium">
            <Link to="/login" className="hover:text-amber-200/90 transition-all">
              Login
            </Link>

            {/* Favorite Icon */}
            <Link to="/favorite" className="relative hover:text-amber-200/90 transition-all">
              <Heart size={24} />
              {/* Notification Dot (optional) */}
              <span className="absolute -top-1 -right-2 w-2 h-2 bg-red-500 rounded-full"></span>
            </Link>

            {/* Cart Icon */}
            <Link to="/cart" className="relative hover:text-amber-200/90 transition-all">
              <ShoppingCart size={24} />
              {/* Cart count badge */}
              <span className="absolute -top-2 -right-3 bg-amber-700 text-white text-xs px-1.5 py-0.5 rounded-full">
                2
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/90 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-md bg-gradient-to-b from-amber-700/80 via-amber-500/70 to-yellow-400/70 border-t border-amber-700/40">
          <div className="flex flex-col items-center py-4 space-y-3 text-lg font-medium text-white/90">
            <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-amber-200/90">
              Home
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-amber-200/90">
              About
            </Link>
            <Link to="/product" onClick={() => setIsOpen(false)} className="hover:text-amber-200/90">
              Product
            </Link>
            <Link to="/category" onClick={() => setIsOpen(false)} className="hover:text-amber-200/90">
              Category
            </Link>
            <Link to="/favorite" onClick={() => setIsOpen(false)} className="hover:text-amber-200/90">
              ❤️ Favorite
            </Link>
            <Link to="/cart" onClick={() => setIsOpen(false)} className="hover:text-amber-200/90">
              🛒 Add to Cart
            </Link>
            <Link to="/login" onClick={() => setIsOpen(false)} className="hover:text-amber-200/90 pt-2">
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
