import React from "react";
import { FaFileAlt } from "react-icons/fa";

export default function SplitPdfcomp() {
  return (
    <div className="min-h-screen bg-white px-6 py-10 flex flex-col items-center relative">
      {/* Header */}
      <div className="w-full max-w-5xl bg-[#7FF0C9] rounded-md py-6 px-10 mb-12 relative">
        <h1 className="text-3xl font-bold text-[#1A7A6D]">Split PDF</h1>
        <p className="text-sm text-white mt-1">
          Divide a single PDF into multiple separate files
        </p>
        <div className="absolute top-4 right-6 text-white text-4xl opacity-30">
          ↗
        </div>
      </div>

      {/* Body */}
      <div className="relative w-full max-w-7xl flex justify-center">
        {/* File Grid */}
        <div className="grid grid-cols-4 gap-6">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#F7FAFC] p-2 rounded-lg shadow-sm border"
            >
              <div className="bg-white p-4 w-40 h-52 rounded shadow flex items-center justify-center">
                <FaFileAlt className="text-gray-400 text-3xl" />
              </div>
              <p className="text-sm font-medium text-gray-700 mt-2">
                File Name {index + 1}
              </p>
            </div>
          ))}
        </div>

        {/* Right Panel */}
        <div className="absolute top-0 right-[-100px] w-[280px] flex flex-col gap-4">
          {/* Extract Pages Option */}
          <div className="w-full rounded-[4px] px-[12px] py-[8px] border cursor-pointer transition-all duration-200 shadow-sm bg-blue-50 border-blue-300">
            <label className="flex gap-3 items-start cursor-pointer">
              <input
                type="radio"
                name="splitMode"
                className="accent-blue-500 mt-1"
              />
              <div>
                <p className="text-[14px] font-bold text-black leading-none">
                  Extract pages
                </p>
                <p className="text-[12px] text-gray-600 mt-[2px]">
                  Separate pages as individual file
                </p>
              </div>
            </label>
          </div>

          {/* Pages Input Section */}
          <div className="w-full bg-white px-[12px] py-[8px] border border-gray-200 rounded-[4px] shadow-sm">
            <p className="text-[13px] text-gray-700 mb-1">Pages</p>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="1,2,3"
                className="border border-gray-300 px-2 py-1 rounded text-sm w-full"
              />
              <span className="text-blue-600 text-sm cursor-pointer hover:underline">
                Extract all
              </span>
            </div>
          </div>

          {/* Split by Range Option */}
          <div className="w-full rounded-[4px] px-[12px] py-[8px] border cursor-pointer transition-all duration-200 shadow-sm bg-white border-gray-200">
            <label className="flex gap-3 items-start cursor-pointer">
              <input
                type="radio"
                name="splitMode"
                className="accent-blue-500 mt-1"
              />
              <div>
                <p className="text-[14px] font-bold text-black leading-none">
                  Split by page range
                </p>
                <p className="text-[12px] text-gray-600 mt-[2px]">
                  Split based on pages you select
                </p>
              </div>
            </label>
          </div>

          {/* Split Button */}
          <button className="mt-70 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded text-sm w-full">
            Split PDF
          </button>
        </div>
      </div>
    </div>
  );
}
