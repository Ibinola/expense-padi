import React from 'react';
import { Formik, Form } from 'formik';
import { AiOutlineClose } from 'react-icons/ai';
import CustomInput from '../components/CustomInput';
import CustomDropdown from '../components/CustomDropdown';
import CustomButton from '../components/CustomButton';
import { bankOptions } from '../utils/banks';
import { initialValues, schemas } from '../utils/validationSchema';

function LinkAccountForm({ onSubmit, onClose }) {
  return (
    <>
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-black"
        onClick={onClose}
      >
        <AiOutlineClose size={24} />
      </button>

      <div className="mx-auto items-center">
        <h2 className="text-[24px] md:text-[28px] font-bold text-center mb-5">
          Link Account Details
        </h2>

        <Formik
          initialValues={initialValues.linkAccount}
          onSubmit={onSubmit}
          validationSchema={schemas.LinkAccount}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col space-y-4">
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
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <CustomInput
                name="accountName"
                type="text"
                label="Account Name"
                placeholder="Enter account name"
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <CustomButton
                type="submit"
                label={isSubmitting ? 'Linking...' : 'Link Account'}
                isLoading={isSubmitting}
                loadingText="Linking..."
              />
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default LinkAccountForm;
