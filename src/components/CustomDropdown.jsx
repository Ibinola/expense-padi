import React from 'react';
import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';

function CustomDropdown(props) {
  const { label, name, options, ...rest } = props;

  return (
    <div className="mt-2 space-y-1">
      <label htmlFor={name} className="text-sm block">
        {label}
      </label>
      <Field
        as="select"
        name={name}
        className="w-full p-1 md:p-2 border rounded-md border-[#D0D5DD]"
        {...rest}
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default CustomDropdown;
