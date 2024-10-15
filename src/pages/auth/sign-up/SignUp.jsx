import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import SignUpAuthButton from '../../../components/SignUpAuthButton';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
import { Link } from 'react-router-dom';
import { userSignUpValidationSchema } from '../../../utils/signUpValidationSchema';
import EmailVerification from './EmailVerification';
import { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from '../../../utils/firebase';
import AuthBgImage from '../../../components/AuthBgImage';
import { toast } from 'react-toastify';
// import { handleGoogleSignUp } from '../../../services/authService';

function SignUp() {
  const [showVerification, setShowVerification] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

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
      // console.log('User created:', userCredential.user);

      // Show success toast
      toast.success(
        'Signed up successfully! Please log in with your new credentials.'
      );

      // Clear form after successful sign-up
      resetForm();

      // Redirect or show verification
      // setUserEmail(email);
      // setShowVerification(true);
      navigate('/login');
    } catch (error) {
      // console.error('Sign up error:', error);
      setFieldError('email', error.message);

      // Show error toast
      toast.error('Sign up failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      // const user = result.user;
      // console.log('Google Sign Up successful:', user);

      toast.success('Signed up with Google successfully!');
      navigate('/dashboard'); // Redirect to dashboard or desired page
    } catch (error) {
      console.error('Google Sign Up error:', error);
      toast.error('Google Sign Up failed. Please try again.');
    }
  };

  const handleAppleSignUp = () => {
    console.log('not yet');
  };

  const handleBack = () => {
    setShowVerification(false);
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

        <>
          <div className="w-full md:w-[491px] mx-auto ">
            {showVerification ? (
              <EmailVerification email={userEmail} onBack={handleBack} />
            ) : (
              <>
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
                  initialValues={initialValues}
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

                      <p className="font-source text-sm mt-4 p-1 text-black ">
                        <input type="checkbox" className="mr-2" />
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
              </>
            )}
          </div>
        </>
      </div>
    </div>
  );
}

export default SignUp;
