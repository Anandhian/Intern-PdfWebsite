import React from "react";

const Done = () => {
  const handleDownload = () => {
    // Simulated file for download (replace with real merged PDF)
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
    <div className="flex flex-col items-center justify-center py-40 bg-white px-4">
      {/* Green checkbox + Done */}
      <div className="flex items-center space-x-2 mb-2">
        <div className="bg-green-400 w-8 h-8 flex items-center justify-center">
          <img
            src="https://img.icons8.com/ios-filled/24/ffffff/checkmark.png"
            alt="done"
            className="w-4 h-4"
          />
        </div>
        <h1 className="text-3xl font-bold text-black">Done</h1>
      </div>

      {/* Subtext */}
      <p className="text-gray-500 font-semibold text-sm mb-6">
        Your files are merged successfully
      </p>

      {/* Download Button */}
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-28 rounded-md text-base"
        onClick={handleDownload}
      >
        Download file
      </button>
    </div>
  );
};

export default Done;



