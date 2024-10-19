import React, { useState } from 'react';
import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function CustomInput(props) {
  const { type, label, name, placeholder } = props;
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mt-2 space-y-1 relative">
      <label htmlFor={name} className="text-sm block">
        {label}
      </label>
      <div className="flex items-center">
        <Field
          type={showPassword ? 'text' : type}
          name={name}
          placeholder={placeholder}
          className={`w-full p-1 md:p-2 border rounded-md border-[#D0D5DD] ${
            type === 'number'
              ? '[-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none'
              : ''
          }`}
        />
        {type === 'password' && (
          <span
            onClick={togglePasswordVisibility}
            className="absolute right-3 cursor-pointer text-gray-500"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        )}
      </div>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default CustomInput;
