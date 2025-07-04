import React from "react";

const UploadBox = ({
  title,
  subtitle,
  bgColor,
  titleColor,
  textColor,
  onFileChange,
  onSubmit,
}) => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-10 px-4 sm:px-6 md:px-10">
      {/* Header */}
      <div
        className="w-full max-w-3xl p-4 sm:p-6 rounded-md text-left mb-8 sm:mb-10 relative"
        style={{ backgroundColor: bgColor }}
      >
        <h1
          className="text-xl sm:text-2xl md:text-3xl font-bold"
          style={{ color: titleColor }}
        >
          {title}
        </h1>
        <p
          className="text-xs sm:text-sm mt-2 leading-snug"
          style={{ color: textColor }}
        >
          {subtitle}
        </p>
        <div className="absolute right-4 top-4 text-xl opacity-20">↗</div>
      </div>

      {/* File Upload Box - Hidden on mobile */}
      <div className="hidden sm:flex w-full max-w-4xl bg-gray-100 border border-dashed border-gray-400 rounded-lg flex-col items-center justify-center text-center p-6 sm:p-10">
        <p className="text-gray-600 text-sm sm:text-base">
          Drag & drop files here
        </p>
        <p className="text-gray-600 text-sm sm:text-base mb-4">or</p>

        <label
          htmlFor="fileInput"
          className="px-6 py-2 sm:px-8 sm:py-3 border border-blue-600 text-blue-600 text-sm sm:text-base font-semibold rounded cursor-pointer hover:bg-blue-50 transition"
        >
          Select PDF file
        </label>
      </div>

      {/* File Select Button - Visible only on mobile */}
      <div className="sm:hidden">
        <label
          htmlFor="fileInput"
          className="px-6 py-2 mt-4 border bg-blue-600 border-blue-600 text-white text-sm font-semibold rounded cursor-pointer hover:bg-blue-50 transition"
        >
          Select PDF file
        </label>
      </div>

      {/* File Input */}
      <input
        id="fileInput"
        type="file"
        multiple
        accept="application/pdf"
        className="hidden"
        onChange={onFileChange}
      />

      {/* Submit Button */}
      {onSubmit && (
        <button
          className="mt-6 bg-green-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded hover:bg-green-700 text-sm sm:text-base"
          onClick={onSubmit}
        >
          {title}
        </button>
      )}
    </div>
  );
};

export default UploadBox;



  

