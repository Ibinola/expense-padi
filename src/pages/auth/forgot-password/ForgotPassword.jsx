import React from 'react';
import AuthBgImage from '../../../components/AuthBgImage';
import CustomButton from '../../../components/CustomButton';
import forgotPasswordIcon from '../../../assets/forgot-password-icon.svg';
import { Form, Formik } from 'formik';
import CustomInput from '../../../components/CustomInput';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  const initialValue = {
    email: '',
  };

  return (
    <div className="flex flex-col md:flex-row h-screen  font-manrope">
      <AuthBgImage />

      <div className="p-4 md:p-5 w-full md:w-1/2 mx-auto">
        <h2 className="font-zendots text-center text-black mb-8 text-xl lg:text-3xl">
          Expense <span className="text-[#0557C2]">Padi</span>
        </h2>

        <div className="w-full md:w-[491px] mx-auto ">
          <div className="mb-8">
            <img
              src={forgotPasswordIcon}
              alt="Forgot Password"
              className="mx-auto"
            />
          </div>
          <div className="text-center">
            <h1 className="text-[#101828] text-[20px] md:text-[26px] font-bold ">
              Reset Password
            </h1>
            <p className="text-[14px] font-medium text-[#5D5D5D] mb-6">
              Enter your email to reset your password
            </p>
          </div>

          {/* ADD VALIDATION SCHEMA AND AN ONSUBMIT */}
          <Formik initialValues={initialValue}>
            {({ isSubmitting }) => (
              <Form className="flex flex-col space-y-7">
                <CustomInput
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="Enter email address"
                />
                <CustomButton type="submit" label="Reset Password" />
                <Link
                  to={'/login'}
                  className="mt-4 text-black text-center text-sm font-medium"
                >
                  Back
                </Link>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
