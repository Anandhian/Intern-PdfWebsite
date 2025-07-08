import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import AllToolsDropdown from "./AllToolsDropdown";
import ConvertDropdown from "./ConvertDropdown";
import MobileMenu from "./MobileMenu";
import Frame from "../assets/Frame.png"; // Logo image

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1280px] h-[65px] mx-auto px-[8px] py-[10px] flex items-center justify-between">
        
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={Frame} alt="Logo" className="w-5 h-5" />
          <span className="text-[18px] leading-[16px] font-bold text-black">PDF Buddy</span>
        </Link>

        {/* Center nav: Only on desktop */}
        <div className="hidden md:flex flex-1 justify-center gap-[32px] items-center text-[14px] leading-[16px] font-normal text-black">
          <AllToolsDropdown />
          <ConvertDropdown />
          <Link to="/merge" className="hover:text-blue-600">Merge PDF</Link>
          <Link to="/split" className="hover:text-blue-600">Split PDF</Link>
        </div>

        {/* Right: Mobile menu (only visible on mobile) */}
        <div className="md:hidden shrink-0">
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




















