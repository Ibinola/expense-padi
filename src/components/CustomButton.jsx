import React from 'react';

function CustomButton(props) {
  const { type, label } = props;
  return (
    <button
      type={type}
      className="w-full py-4 border rounded-md cursor-pointer"
    >
      {label}
    </button>
  );
}

export default CustomButton;
