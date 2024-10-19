import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import SignUpAuthButton from '../../../components/SignUpAuthButton';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
import { Link } from 'react-router-dom';
import {
  userSignUpValidationSchema,
  initialValues,
} from '../../../utils/validationSchema';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from '../../../utils/firebase';
import AuthBgImage from '../../../components/AuthBgImage';
import TermsCheckbox from '../../../components/TermsCheckbox';
import { showToast } from '../../../utils/toast-config';

function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = async (
    values,
    { setSubmitting, setFieldError, resetForm }
  ) => {
    try {
      const { email, password } = values;
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      showToast.success(
        'Signed up successfully! Please fill in your credentials.'
      );
      resetForm();
      navigate('/account-details');
    } catch (error) {
      setFieldError('email', error.message);
      showToast.error('Sign up failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      showToast.success('Signed up with Google successfully!');
      navigate('/account-details');
    } catch (error) {
      console.error('Google Sign Up error:', error);
      showToast.error('Google Sign Up failed. Please try again.');
    }
  };

  const handleAppleSignUp = () => {
    return;
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen items-center align-center font-manrope">
      {/* LEFT SECTION */}
      <AuthBgImage />

      {/* RIGHT SECTION */}
      <div className="p-4 md:p-5 w-full md:w-1/2 mx-auto">
        <h2 className="font-zendots text-center text-black mb-8 text-xl lg:text-3xl">
          Expense <span className="text-[#0557C2]">Padi</span>
        </h2>

        <div className="w-full md:w-[491px] mx-auto ">
          <div className="text-center">
            <p className="text-[14px] font-medium text-[#5D5D5D]">
              Ready to take control of your finances?
            </p>
            <h1 className="text-[#101828] text-[20px] md:text-[26px] font-bold">
              Sign up to Expense Padi
            </h1>

            <div className="space-x-2 md:space-x-5 mt-6 mb-4 flex justify-center">
              <SignUpAuthButton
                name="Sign up with Google"
                icon={<FcGoogle />}
                handleSignUp={handleGoogleSignUp}
              />
              <SignUpAuthButton
                name="Sign up with Apple"
                icon={<FaApple />}
                handleSignUp={handleAppleSignUp}
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
            initialValues={initialValues.signUp}
            validationSchema={userSignUpValidationSchema}
            onSubmit={handleSubmit}
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

                <TermsCheckbox />

                <CustomButton
                  type="submit"
                  label="Sign Up"
                  isLoading={isSubmitting}
                  loadingText="Signing Up..."
                />
              </Form>
            )}
          </Formik>

          <p className="text-sm text-black text-center mt-4 font-semibold">
            Already have an account?{' '}
            <Link className="text-[#0553C7]" to={'/login'}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
