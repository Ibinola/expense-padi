import React from 'react';
import { Field, ErrorMessage } from 'formik';

function TermsCheckbox() {
  return (
    <div className="my-3">
      <label className="font-source text-sm mt-4 p-1 text-black ">
        <Field type="checkbox" name="agreeToTerms" className="mr-2" />
        By clicking the 'Sign up' button, you agree to our{' '}
        <span className="underline text-[#0553C7]">Terms, Conditions </span>
        and <span className="underline text-[#0553C7]">Privacy policies</span>.
      </label>
      <ErrorMessage
        name="agreeToTerms"
        component="div"
        className="text-red-500 text-xs mt-1"
      />
    </div>
  );
}

export default TermsCheckbox;
