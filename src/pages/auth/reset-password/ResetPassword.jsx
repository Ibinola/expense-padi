import { Link, useSearchParams } from 'react-router-dom';
import { Formik, Form } from 'formik';
import forgotPasswordIcon from '../../../assets/forgot-password-icon.svg';
import { confirmPasswordReset, verifyPasswordResetCode } from 'firebase/auth';
import { auth } from '../../../utils/firebase';
import { showToast } from '../../../utils/toast-config';
import CustomButton from '../../../components/CustomButton';
import AuthBgImage from '../../../components/AuthBgImage';
import { useNavigate } from 'react-router-dom';
import {
  resetPasswordInitialValues,
  ResetPasswordSchema,
} from '../../../utils/signUpValidationSchema';
import CustomInput from '../../../components/CustomInput';
import { useEffect, useState } from 'react';
import { CircleLoader } from 'react-spinners';

function ResetPassword() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [oobCode, setOobCode] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const code = searchParams.get('oobCode');
    if (!code) {
      showToast.error('error', 'Invalid password reset link');
      navigate('/login');
      return;
    }

    verifyPasswordResetCode(auth, code)
      .then(() => {
        setOobCode(code);
        setIsLoading(false);
      })
      .catch((error) => {
        setErrors({ email: error.message });
        navigate('/login');
      });
  }, [searchParams, navigate]);

  const handleSubmit = async (
    values,
    { setSubmitting, setErrors, resetForm }
  ) => {
    try {
      await confirmPasswordReset(auth, oobCode, values.newPassword);
      showToast.success('Password reset successfully!');
      resetForm();
      navigate('/login');
    } catch (error) {
      setErrors({ newPassword: error.message });
    } finally {
      setSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75">
        <CircleLoader />
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen items-center align-center font-manrope">
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
              Enter New Password
            </h1>
            <p className="text-[14px] font-medium text-[#5D5D5D] mb-6">
              Do well to provide password you can remember for your next login
            </p>
          </div>

          <Formik
            initialValues={resetPasswordInitialValues}
            validationSchema={ResetPasswordSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col space-y-4 w-full max-w-md">
                <CustomInput
                  name="newPassword"
                  type="password"
                  label="New Password"
                  placeholder="Enter Password"
                />

                <CustomInput
                  name="confirmPassword"
                  type="password"
                  label="Confirm Password"
                  placeholder="Enter Password"
                />

                <CustomButton
                  type="submit"
                  label={isSubmitting ? 'Confirming Password...' : 'Confirm'}
                  disabled={isSubmitting}
                />
                <Link
                  to={'/forgot-password'}
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

export default ResetPassword;
