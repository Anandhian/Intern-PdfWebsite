import React, { useState } from "react";
import { FaLayerGroup, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import AllToolsDropdown from "./AllToolsDropdown";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full sticky top-0 z-50 border-y border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <FaLayerGroup className="text-blue-600 text-lg" />
          <span className="font-bold text-black text-lg">PDF Buddy</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 text-sm text-black">
          <AllToolsDropdown />
          <Link to="/compress" className="hover:text-blue-600 font-bold">
            Convert PDF
          </Link>
          <Link to="/merge" className="hover:text-blue-600  font-bold">
            Merge PDF
          </Link>
          <Link to="/split" className="hover:text-blue-600 font-bold">
            Split PDF
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-xl text-gray-700 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Items */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-sm text-black">
          <div>
            <AllToolsDropdown />
          </div>
          <Link
            to="/pdftoword"
            className="block hover:text-blue-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Convert PDF
          </Link>
          <Link
            to="/merge"
            className="block hover:text-blue-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Merge PDF
          </Link>
          <Link
            to="/split"
            className="block hover:text-blue-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Split PDF
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;





