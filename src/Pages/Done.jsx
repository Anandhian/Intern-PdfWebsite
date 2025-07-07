import React from "react";

const Done = () => {
  const handleDownload = () => {
    const blob = new Blob(["Merged PDF content"], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "merged.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-12 bg-white px-4">
      {/* Done Icon + Title */}
      <div className="flex items-center space-x-2 mb-2">
        <div className="bg-green-400 w-8 h-8 flex items-center justify-center rounded-full">
          <img
            src="https://img.icons8.com/ios-filled/24/ffffff/checkmark.png"
            alt="done"
            className="w-4 h-4"
          />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-black">Done</h1>
      </div>

      {/* Subtext */}
      <p className="text-gray-500 font-medium text-sm sm:text-base mb-6 text-center">
        Your files have been merged successfully
      </p>

      {/* Download Button */}
      <div className="w-full max-w-sm">
        <button
          onClick={handleDownload}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md text-base"
        >
          Download file
        </button>
      </div>
    </div>
  );
};

export default Done;




