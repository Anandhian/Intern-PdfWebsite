import { FaFileAlt } from "react-icons/fa";

export default function FileGetter() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-12 px-4">
      {/* Header Section */}
      <div className="bg-blue-100 w-[800px] p-6 rounded-md text-left mb-10 relative">
        <h1 className="text-4xl font-bold text-gray-800">Merge PDF</h1>
        <p className="text-sm text-white mt-1">
          Combine multiple PDF files into a single document
        </p>

        {/* Right Arrow Icon */}
        <div className="absolute right-6 top-6 opacity-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
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

      {/* File Drop Area (Static) */}
      <div className="w-[1120px] h-[260px] bg-gray-100 border border-dotted border-gray-400 rounded-lg flex flex-col items-center justify-center text-center">
        <FaFileAlt size={32} className="text-gray-500 mb-2" />
        <p className="text-gray-600 text-sm">Drag & drop files here</p>
        <p className="text-gray-600 text-sm mb-4">or</p>

        <label
          htmlFor="fileInput"
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded cursor-pointer hover:bg-blue-700 transition"
        >
          Select PDF file
        </label>
        <input
          id="fileInput"
          type="file"
          multiple
          accept="application/pdf"
          className="hidden"
        />
      </div>
    </div>
  );
}

