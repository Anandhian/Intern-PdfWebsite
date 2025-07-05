import React from "react";
import { FaFileAlt } from "react-icons/fa";

export default function SplitPdfcomp1() {
  return (
    <div className="min-h-screen bg-white px-6 py-10 flex flex-col items-center relative">
      {/* Header */}
      <div className="w-full max-w-5xl bg-[#7FF0C9] rounded-md py-6 px-10 mb-12 relative">
        <h1 className="text-3xl font-bold text-[#1A7A6D]">Split PDF</h1>
        <p className="text-sm text-white mt-1">
          Divide a single PDF into multiple separate files
        </p>
        <div className="absolute top-4 right-6 text-white text-4xl opacity-30">↗</div>
      </div>

      {/* Body */}
      <div className="relative w-full max-w-7xl flex justify-between">
        {/* File Grid */}
        <div className="grid grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
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
        <div className="w-[280px] flex flex-col gap-4">
          {/* Extract Pages Option */}
          <div className="w-full rounded border px-4 py-3 cursor-pointer bg-white border-gray-200">
            <label className="flex gap-3 items-start">
              <input type="radio" name="splitMode" className="accent-blue-500 mt-1" />
              <div>
                <p className="text-sm font-bold text-black leading-none">Extract pages</p>
                <p className="text-xs text-gray-600 mt-1">Separate pages as individual file</p>
              </div>
            </label>
          </div>

          {/* Split by Page Range Option */}
          <div className="w-full rounded border px-4 py-3 cursor-pointer bg-blue-50 border-blue-300">
            <label className="flex gap-3 items-start">
              <input
                type="radio"
                name="splitMode"
                defaultChecked
                className="accent-blue-500 mt-1"
              />
              <div>
                <p className="text-sm font-bold text-black leading-none">Split by page range</p>
                <p className="text-xs text-gray-600 mt-1">
                  Split based on pages you select
                </p>
              </div>
            </label>

            {/* Range Inputs */}
            <div className="mt-4">
              <p className="text-[13px] text-gray-700 mb-2">Range</p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700">Page from</span>
                <input
                  type="number"
                  className="w-12 border border-gray-300 rounded px-2 py-1 text-sm"
                  placeholder="1"
                />
                <span className="text-sm text-gray-700">to</span>
                <input
                  type="number"
                  className="w-12 border border-gray-300 rounded px-2 py-1 text-sm"
                  placeholder="4"
                />
              </div>
              <button className="text-blue-600 text-sm mt-2 hover:underline">
                + Add another range
              </button>
            </div>
          </div>

          {/* Spacer */}
          <div className="flex-grow" />

          {/* Split PDF Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded text-sm w-full">
            Split PDF
          </button>
        </div>
      </div>
    </div>
  );
}
