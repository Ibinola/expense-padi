import React from 'react';
import { Form, Formik } from 'formik';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import CustomDropdown from './CustomDropdown';
import { linkAccountValidationSchema } from '../utils/validationSchema';
import { bankOptions } from '../utils/banks';

function LinkAccountDetailsForm({ onSubmit, onBack, initialValues }) {
  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
    onSubmit(values);
  };

  const handleBack = () => {
    onBack();
  };

  return (
    <div className="w-full md:w-[491px] mx-auto ">
      <div className="text-center flex flex-col justify-center">
        <h1 className="text-[#101828] mt-10 text-[20px] md:text-[26px] font-bold">
          Link Account Details
        </h1>
        <p className="text-[14px] my-4 font-medium text-[#5D5D5D]">
          To fully utilize our platform's features, please link your account
          details.
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={linkAccountValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col max-w-xl space-y-6">
            <CustomDropdown
              label="Bank Name"
              name="bankName"
              options={bankOptions}
            />

            <CustomInput
              name="accountNumber"
              type="number"
              label="Account Number"
              placeholder="Enter account number"
            />
            <CustomInput
              name="accountName"
              type="text"
              label="Account Name"
              placeholder="Enter account name"
            />

            <div className="flex flex-col md:flex-row justify-between gap-5">
              <CustomButton type="button" label="Back" onClick={handleBack} />
              <CustomButton
                type="submit"
                label="Continue"
                isLoading={isSubmitting}
                loadingText="Submitting..."
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LinkAccountDetailsForm;
