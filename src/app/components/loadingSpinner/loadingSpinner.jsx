import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900"></div>
    </div>
  );
}