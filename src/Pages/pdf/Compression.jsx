import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Compression = () => {
  const navigate = useNavigate();
  const [compression, setCompression] = useState("high");
  const [fileNames, setFileNames] = useState([]);

  useEffect(() => {
    const storedFiles = JSON.parse(localStorage.getItem("pdfFiles")) || [];
    if (storedFiles.length === 0) {
      navigate("/compress");
    }
    setFileNames(storedFiles);
  }, [navigate]);

  const handleCompress = () => {
    console.log("Compressing with:", compression);
    navigate("/success");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 pt-10">
      {/* Header */}
      <div className="bg-[#F6F17F] w-full max-w-[796px] h-[105px] p-6 rounded-md text-left mb-10 relative">
        <h1 className="text-[32px] font-bold text-[#65621B] leading-12">
          Compress PDF
        </h1>
        <p className="text-[12px] font-semibold text-[#6B7582] mt-1 leading-none">
          Reduce the file size of your PDF documents.
        </p>

        {/* Right Arrow Icon */}
        <div className="absolute right-4 top-4 opacity-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative w-full max-w-5xl mt-12 flex justify-center">
        {/* File Preview */}
        {fileNames.length > 0 && (
          <div className="flex flex-col items-center">
            <div className="bg-[#F5F5F7] w-64 h-72 rounded-lg flex items-center justify-center relative">
              <div className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-0.5 rounded">
                PDF
              </div>
            </div>
            <p className="mt-2 text-sm font-medium text-black">
              {fileNames[0]}
            </p>
          </div>
        )}

        {/* Floating Compression Options */}
        <div className="absolute top-0 right-[-110px] flex flex-col gap-4">
          {[
            {
              value: "high",
              label: "High Compression",
              desc: "Lower file size and Low quality",
            },
            {
              value: "low",
              label: "Low Compression",
              desc: "Higher file size and high quality",
            },
          ].map((option) => (
            <div
              key={option.value}
              className={`cursor-pointer border rounded-[4px] w-[239px] h-[55px] px-[12px] py-[8px] flex items-center ${
                compression === option.value
                  ? "bg-[#E9F1FE] border-blue-300"
                  : "bg-white border-gray-300"
              }`}
              onClick={() => setCompression(option.value)}
            >
              <label className="flex items-center gap-3 cursor-pointer w-full">
                <input
                  type="radio"
                  name="compression"
                  value={option.value}
                  checked={compression === option.value}
                  onChange={() => setCompression(option.value)}
                  className="accent-black"
                />
                <div className="flex flex-col leading-tight">
                  <p className="text-[14px] font-bold text-black leading-none">
                    {option.label}
                  </p>
                  <p className="text-[10px] text-black mt-[2px] leading-none">
                    {option.desc}
                  </p>
                </div>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Compress Button */}
      <button
        className="absolute bottom-10 right-10 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-semibold"
        onClick={handleCompress}
      >
        Compress PDF
      </button>
    </div>
  );
};

export default Compression;



