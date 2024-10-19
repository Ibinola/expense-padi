import React from 'react';

function CustomButton({
  type,
  label,
  isLoading,
  loadingText = 'Loading...',
  onClick,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading}
      className="w-52 mx-auto md:w-full bg-[#0557C2] text-white py-2 md:py-4 border rounded-md cursor-pointer"
    >
      {isLoading ? (
        <div className="flex justify-center items-center space-x-2">
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            ></path>
          </svg>
          <span>{loadingText}</span>
        </div>
      ) : (
        label
      )}
    </button>
  );
}

export default CustomButton;
