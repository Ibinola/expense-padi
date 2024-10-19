import React from 'react';
import { Form, Formik } from 'formik';
import CustomInput from './CustomInput';
import { PersonalDetailsSchema } from '../utils/validationSchema';
import CustomButton from './CustomButton';

function PersonalDetailsForm({ onSubmit, initialValues }) {
  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
    onSubmit(values);
  };

  return (
    <div className="w-full md:w-[491px] mx-auto ">
      <div className="text-center flex flex-col justify-between">
        <h1 className="text-[#101828] mt-10 text-[20px] md:text-[26px] font-bold">
          Personal Details
        </h1>
        <p className="text-[14px] my-4 font-medium text-[#5D5D5D]">
          To provide you with the best experience, we need some personal
          information.
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={PersonalDetailsSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col space-y-6">
            <CustomInput
              name="firstName"
              type="text"
              label="First Name"
              placeholder="Enter your first name"
            />
            <CustomInput
              name="lastName"
              type="text"
              label="Last Name"
              placeholder="Enter your last name"
            />

            <CustomButton
              type="submit"
              label="Continue"
              isLoading={isSubmitting}
              loadingText="Submitting..."
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default PersonalDetailsForm;
