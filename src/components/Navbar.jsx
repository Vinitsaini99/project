import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="backdrop-blur-md bg-gradient-to-r from-amber-700/80 via-amber-500/70 to-yellow-400/70 text-white/90 shadow-md fixed w-full z-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left Links */}
          <div className=" md:flex gap-6 text-lg font-medium">
            <Link to="/" className="hover:text-amber-200/90 transition-all">Home</Link>
            <Link to="/about" className="hover:text-amber-200/90 transition-all">About</Link>
            <Link to="/Product" className="hover:text-amber-200/90 transition-all">Product</Link>
          </div>

          {/* Center Logo */}
<div className="text-3xl font-bold tracking-wide font-[Great_Vibes] bg-clip-text text-transparent bg-amber-700 ">
            FabriQ
          </div>

          {/* Right Links */}
          <div className="hidden md:flex items-center gap-6 text-lg font-medium">
            <Link to="/category" className="hover:text-amber-200/90 transition-all">Category</Link>
            <Link to="/login" className="hover:text-amber-200/90 transition-all">Login</Link>
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
        <div className="md:hidden backdrop-blur-md bg-gradient-to-b from-amber-900/90 via-sky-900/90 to-green-800/90 border-t border-amber-700/40">
          <div className="flex flex-col items-center py-4 space-y-3 text-lg font-medium text-white/90">
            <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-amber-200/90">Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-amber-200/90">About</Link>
            <Link to="/Product" onClick={() => setIsOpen(false)} className="hover:text-amber-200/90">Product</Link>
            <Link to="/category" onClick={() => setIsOpen(false)} className="hover:text-amber-200/90">Category</Link>
            <Link to="/login" onClick={() => setIsOpen(false)} className="hover:text-amber-200/90">Login</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
