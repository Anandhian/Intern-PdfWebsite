import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import file from "../assets/file.png";

const UploadBox = ({
  title,
  subtitle,
  bgColor,
  titleColor,
  textColor,
  onSubmitRedirect,
  bannerImage,
}) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
    localStorage.setItem("pdfFiles", JSON.stringify(files.map(file => file.name)));

    // Automatically redirect after selecting files
    if (files.length > 0 && onSubmitRedirect) {
      navigate(onSubmitRedirect);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-10 bg-white">
      {/* Banner */}
      <div
        className="w-full max-w-3xl p-6 rounded-md text-left mb-10 relative overflow-hidden"
        style={{ backgroundColor: bgColor }}
      >
        {bannerImage && (
          <img
            src={bannerImage}
            alt="Banner"
            className="absolute top-4 right-4 w-20 h-20 object-contain pointer-events-none"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        )}
        <h1 className="text-3xl font-bold" style={{ color: titleColor }}>
          {title}
        </h1>
        <p className="text-sm mt-2" style={{ color: textColor }}>
          {subtitle}
        </p>
      </div>

      {/* Upload Box */}
      <div
        className="hidden sm:flex flex-col items-center justify-center text-center bg-gray-100 relative"
        style={{
          width: "960px",
          height: "200px",
          borderRadius: "8px",
          position: "relative",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none", zIndex: 1 }}
        >
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            rx="8"
            ry="8"
            fill="none"
            stroke="#9CA3AF"
            strokeWidth="1"
            strokeDasharray="3,3"
          />
        </svg>
        <div className="z-10 flex flex-col items-center">
          <img src={file} alt="File" className="w-8 h-8 mb-2 opacity-80" />
          <p className="text-gray-600">Drag & drop files here</p>
          <p className="text-gray-600 mb-4">or</p>
          <label
            htmlFor="fileInput"
            className="bg-blue-600 text-white px-6 py-2 rounded cursor-pointer"
          >
            Select PDF file
          </label>
        </div>
      </div>

      {/* Mobile Select Button */}
      <div className="sm:hidden mt-4">
        <label
          htmlFor="fileInput"
          className="bg-blue-600 text-white px-6 py-2 rounded cursor-pointer"
        >
          Select PDF file
        </label>
      </div>

      {/* Hidden File Input */}
      <input
        id="fileInput"
        type="file"
        multiple
        accept="application/pdf"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default UploadBox;












