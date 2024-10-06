import React from 'react';
import signUpBackgroundImage from '../../../assets/sign-up-bg-image.svg';
import bgBar from '../../../assets/icon-1.svg';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import SignUpAuthButton from '../../../components/SignUpAuthButton';
import { Form, Formik } from 'formik';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
import { Link } from 'react-router-dom';
import { signUpValidationSchema } from '../../../utils/signUpValidationSchema';

function SignUp() {
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
      <div className="hidden bg-[#0553C7] text-center text-white md:flex flex-col items-center p-6 w-full md:w-1/2 rounded-none md:rounded-r-3xl">
        <img
          src={signUpBackgroundImage}
          className="w-full max-w-xs lg:max-w-md"
          alt="Sign Up Background"
        />
        <img src={bgBar} className="w-12 h-12 mt-4" alt="Icon Bar" />
        <div className="space-y-4 mt-4 text-center flex flex-col items-center">
          <h1 className="text-2xl lg:text-3xl font-semibold">
            Take Control of your Finances
          </h1>
          <p className="text-sm lg:text-xs w-10/12 lg:w-6/12">
            Manage your money with ease. Track spending, save smart, and plan
            for a secure future. Start today and see the change.
          </p>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="p-4 md:p-5 w-full md:w-1/2 mx-auto">
        <h2 className="font-zendots text-center text-black mb-8 text-xl lg:text-3xl">
          Expense <span className="text-[#0557C2]">Padi</span>
        </h2>

        <div className="w-full md:w-[491px] mx-auto">
          <div className="text-center">
            <p className="text-[14px] font-medium text-[#5D5D5D]">
              Ready to take control of your finances?
            </p>
            <h1 className="text-[#101828] text-[20px] md:text-[26px] font-bold">
              Sign up to Expense Padi
            </h1>

            <div className="space-x-2 md:space-x-5 mt-6 mb-4 flex justify-center">
              <SignUpAuthButton name="Google" icon={<FcGoogle />} />
              <SignUpAuthButton name="Apple" icon={<FaApple />} />
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

                <p className="font-source text-sm mt-4 p-1 text-black">
                  By clicking the 'Sign up' button, you agree to our{' '}
                  <span className="underline text-[#0553C7]">
                    Terms, Conditions{' '}
                  </span>
                  and{' '}
                  <span className="underline text-[#0553C7]">
                    Privacy policies
                  </span>
                  .
                </p>

                <CustomButton type="submit" label="Sign Up" />
              </Form>
            )}
          </Formik>

          <p className="text-sm text-black text-center mt-4 font-semibold">
            Already have an account?{' '}
            <Link className="text-[#0553C7]">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
