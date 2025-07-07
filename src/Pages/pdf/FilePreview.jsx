import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const FilePreview = () => {
  const navigate = useNavigate();

  const handleMerge = () => {
    // Simulate file merge
    // In real case, call API and store the result
    const blob = new Blob(["Merged PDF content"], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);

    // Store URL in localStorage (or context, etc.)
    localStorage.setItem("mergedPdfUrl", url);

    // Redirect to done page
    navigate("/success");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white relative">
      {/* Header Banner */}
      <div className="w-[90%] max-w-4xl bg-blue-100 rounded-md p-6 flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Merge PDF</h1>
          <p className="text-sm text-white mt-1">
            Combine multiple PDF files into a single document
          </p>
        </div>
        <div>
          <svg className="w-10 h-10 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13 5l7 7-7 7M5 12h14" />
          </svg>
        </div>
      </div>

      {/* File Display Box */}
      <div className="relative w-[90%] max-w-4xl bg-gray-100 rounded-lg py-12 px-6 flex justify-center gap-8">
        {/* PDF Thumbnail 1 */}
        <div className="flex flex-col items-center">
          <div className="relative bg-white h-60 w-36 rounded shadow-md">
            <div className="absolute top-0 left-0 bg-black text-white text-xs px-2 py-1 rounded-br">
              PDF
            </div>
          </div>
          <p className="mt-2 text-sm font-medium text-gray-800">File Name 1</p>
        </div>

        {/* PDF Thumbnail 2 */}
        <div className="flex flex-col items-center">
          <div className="relative bg-white h-60 w-36 rounded shadow-md">
            <div className="absolute top-0 left-0 bg-black text-white text-xs px-2 py-1 rounded-br">
              PDF
            </div>
          </div>
          <p className="mt-2 text-sm font-medium text-gray-800">File Name 2</p>
        </div>

        {/* Floating Plus Button */}
        <button className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 z-10">
          <FaPlus />
        </button>
      </div>

      {/* Tooltip Floating Right */}
      <div className="absolute right-10 top-[48%] transform -translate-y-1/2 bg-white border border-gray-400 rounded-md px-4 py-2 text-sm text-gray-700 shadow-md w-64">
        Reorder your PDF by dragging and dropping the files as you like
      </div>

      {/* ✅ Merge Button */}
      <div className="fixed bottom-10 right-10">
        <button
          onClick={handleMerge}
          className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700"
        >
          Merge files
        </button>
      </div>
    </div>
  );
};

export default FilePreview;







