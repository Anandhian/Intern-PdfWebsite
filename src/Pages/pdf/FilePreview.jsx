import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const FilePreview = ({
  title = "Merge PDF",
  subtitle = "Combine multiple PDF files into a single document",
  bgColor = "#DBEAFE",
  titleColor = "#1E293B",
  textColor = "#FFFFFF",
  bannerImage,
}) => {
  const navigate = useNavigate();
  const [fileNames, setFileNames] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("pdfFiles")) || [];
    if (stored.length === 0) {
      navigate("/merge");
    }
    setFileNames(stored);
  }, [navigate]);

  const handleMerge = () => {
    const blob = new Blob(["Merged PDF content"], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    localStorage.setItem("mergedPdfUrl", url);
    navigate("/success");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 pt-10 relative">
      {/* Dynamic Banner Header */}
      <div
        className="w-full max-w-[796px] h-[105px] p-6 rounded-md text-left mb-10 relative"
        style={{ backgroundColor: bgColor }}
      >
        <h1 className="text-[32px] font-bold leading-12" style={{ color: titleColor }}>
          {title}
        </h1>
        <p className="text-[12px] font-semibold mt-1 leading-none" style={{ color: textColor }}>
          {subtitle}
        </p>

        {/* Optional Banner Image */}
        {bannerImage && (
          <img
            src={bannerImage}
            alt="Banner"
            className="absolute right-4 top-4 h-8 w-8 opacity-20"
          />
        )}
      </div>

      {/* File Thumbnails */}
      <div className="relative w-full max-w-5xl bg-gray-100 rounded-lg py-12 px-6 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8">
        {fileNames.map((name, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative bg-white h-60 w-36 rounded shadow-md">
              <div className="absolute top-0 left-0 bg-black text-white text-xs px-2 py-1 rounded-br">
                PDF
              </div>
            </div>
            <p className="mt-2 text-sm font-medium text-gray-800 text-center">{name}</p>
          </div>
        ))}

        {/* Floating Plus Button (Desktop) */}
        <button className="hidden sm:flex absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 z-10">
          <FaPlus />
        </button>

        {/* Plus Button (Mobile) */}
        <button className="sm:hidden mt-6 self-center bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700">
          <FaPlus />
        </button>
      </div>

      {/* Tooltip (Desktop) */}
      <div className="hidden sm:block absolute right-10 top-[48%] transform -translate-y-1/2 bg-white border border-gray-400 rounded-md px-4 py-2 text-sm text-gray-700 shadow-md w-64">
        Reorder your PDF by dragging and dropping the files as you like
      </div>

      {/* Tooltip (Mobile) */}
      <div className="sm:hidden mt-6 bg-white border border-gray-400 rounded-md px-4 py-2 text-sm text-gray-700 shadow-md w-full max-w-xs text-center">
        Reorder your PDF by dragging and dropping the files
      </div>

      {/* Merge Button */}
      <div className="fixed bottom-6 right-6 sm:static sm:mt-10">
        <button
          onClick={handleMerge}
          className="bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 font-semibold"
        >
          Merge files
        </button>
      </div>
    </div>
  );
};

export default FilePreview;










