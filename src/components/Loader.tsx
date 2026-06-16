import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="flex flex-col items-center space-y-6">
        {/* Spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-t-4 border-blue-600 border-solid animate-spin"></div>
          <div className="absolute inset-2 rounded-full border-4 border-blue-600 border-dashed animate-pulse"></div>
        </div>

        {/* Text animation */}
        <p className="text-blue-900 text-xl font-semibold tracking-wider animate-bounce">
          Preparing your experience...
        </p>
      </div>
    </div>
  );
};

export default Loader;
