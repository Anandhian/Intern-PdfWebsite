import React, { useState } from "react";
import { FaLayerGroup, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import AllToolsDropdown from "./AllToolsDropdown";
import MobileMenu from "./MobileMenu";
import ConvertDropdown from "./ConvertDropdown";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="w-full max-w-[1280px] mx-auto px-5 py-4 flex items-center relative">
        {/* Logo - Left (Now clickable to go home) */}
        <Link to="/" className="flex items-center gap-2 z-10">
          <FaLayerGroup className="text-pink-600 text-[20px]" />
          <span className="text-[16px] font-bold text-black">PDF Buddy</span>
        </Link>

        {/* Center Nav - Only visible on md and up */}
        <div className="hidden md:flex absolute  left-1/2 -translate-x-1/2 gap-[32px] text-[14px] font-medium text-black items-center">
          <AllToolsDropdown />
            <ConvertDropdown></ConvertDropdown>
          
          <Link to="/merge" className="hover:text-blue-600">Merge PDF</Link>
          <Link to="/split" className="hover:text-blue-600">Split PDF</Link>
        </div>

        {/* Mobile menu button - Right side, only on mobile */}
        <div className="ml-auto md:hidden z-10">
          <button
            className="text-2xl text-gray-700"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Slide-In Menu */}
      {isMobileMenuOpen && (
        <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
      )}
    </div>
  );
};

export default Navbar;














