import React from "react";
import { FaLayerGroup } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full border-y border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <FaLayerGroup className="text-blue-600 text-lg" />
          <span className="font-bold text-black text-lg">PDF Buddy</span>
        </div>

        {/* Right: Nav links */}
        <div className="flex items-center space-x-8 text-sm text-black">
          <div className="cursor-pointer">All Tools ▾</div>
          <div className="cursor-pointer">Convert PDF ▾</div>
          <div className="cursor-pointer">Merge PDF</div>
          <div className="cursor-pointer">Split PDF</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

