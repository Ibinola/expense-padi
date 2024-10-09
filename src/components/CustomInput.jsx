import React from 'react';
import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';

function CustomInput(props) {
  const { type, label, name, placeholder } = props;
  return (
    <div className="mt-2 space-y-1">
      <label htmlFor={name} className="text-sm block">
        {label}
      </label>
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full p-1 md:p-2 border rounded-md border-[#D0D5DD]"
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default CustomInput;
