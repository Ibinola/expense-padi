import React from 'react';
import AuthBgImage from '../../../components/AuthBgImage';
import { Link } from 'react-router-dom';
import { Form, Formik } from 'formik';
import CustomInput from '../../../components/CustomInput';
import SignUpAuthButton from '../../../components/SignUpAuthButton';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { signUpValidationSchema } from '../../../utils/signUpValidationSchema';
import CustomButton from '../../../components/CustomButton';

function Login() {
  const initalValues = {
    email: '',
    password: '',
  };

  const onSubmit = (values) => {
    console.log('form data', values);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen  font-manrope">
      {/* LEFT SECTION */}
      <AuthBgImage />

      {/* RIGHT SECTION */}
      <div className="p-4 md:p-5 w-full md:w-1/2 mx-auto">
        <h2 className="font-zendots text-center text-black mb-8 text-xl lg:text-3xl">
          Expense <span className="text-[#0557C2]">Padi</span>
        </h2>

        <div className="w-full md:w-[491px] mx-auto ">
          <>
            <div className="text-center">
              <p className="text-[14px] font-medium text-[#101828]">
                Managing your expenses has never been easier
              </p>
              <h1 className="text-[#101828] text-[20px] md:text-[26px] font-bold">
                Welcome Back to Expense Padi
              </h1>

              <div className="space-x-2 md:space-x-5 mt-6 mb-4 flex justify-center">
                <SignUpAuthButton
                  name="Continue with Google"
                  icon={<FcGoogle />}
                />
                <SignUpAuthButton
                  name="Continue with Apple"
                  icon={<FaApple />}
                />
              </div>
            </div>

            <div className="relative flex items-center">
              <div className="flex-grow border-t border-[#F5F5F5]"></div>
              <span className="flex-shrink mx-4 text-[#454545]">OR</span>
              <div className="flex-grow border-t border-[#F5F5F5]"></div>
            </div>

            {/* FORM */}
            <Formik
              initialValues={initalValues}
              validationSchema={signUpValidationSchema}
              onSubmit={onSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="flex flex-col">
                  <CustomInput
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="Enter email address"
                  />
                  <CustomInput
                    name="password"
                    type="password"
                    label="Password"
                    placeholder="Enter password"
                  />

                  <p className="font-source text-[#0553C7] text-sm mt-4 mb-2 text-end">
                    Forgot Password?
                  </p>

                  <CustomButton type="submit" label="Log In" />
                </Form>
              )}
            </Formik>

            <p className="text-sm text-black text-center mt-4 font-semibold">
              Don't have an account? {''}
              <Link className="text-[#0553C7]" to={'/'}>
                Sign up
              </Link>
            </p>
          </>
        </div>
      </div>
    </div>
  );
}

export default Login;
