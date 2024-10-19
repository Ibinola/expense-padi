import React, { useEffect, useState } from 'react';
import AuthBgImage from '../../../components/AuthBgImage';
import LinkAccountDetailsForm from '../../../components/LinkAccountDetailsForm';
import PersonalDetailsForm from '../../../components/PersonalDetailsForm';
import PinSetup from '../../../components/PinSetup';
import { useNavigate } from 'react-router-dom';
import { showToast } from '../../../utils/toast-config';
import { auth } from '../../../utils/firebase';

function AccountDetails() {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({
    personalDetails: {
      firstName: '',
      lastName: '',
    },
    accountDetails: {
      bankName: '',
      accountNumber: '',
      accountName: '',
    },
    pinSetup: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleNextStep = (values) => {
    setFormValues((prev) => ({
      ...prev,
      [step === 1 ? 'personalDetails' : 'accountDetails']: values,
    }));
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (values) => {
    setFormValues((prev) => ({
      ...prev,
      pinSetup: values.pin,
    }));

    try {
      const userData = {
        ...formValues.personalDetails,
        ...formValues.accountDetails,
        pin: values.pin,
      };
      showToast.success('Profile updated successfully!');

      // Redirect to the dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error('Profile update error:', error);
      showToast.error('Failed to update profile. Please try again.');
    }
  };

  const getProgressWidth = () => {
    return `${(step / 3) * 100}%`;
  };
  return (
    <div className="flex flex-col md:flex-row min-h-screen items-center align-center font-manrope">
      {/* LEFT SECTION */}
      <AuthBgImage />

      <div className="p-4 md:p-5 w-full md:w-1/2 mx-auto">
        <h2 className="font-zendots text-center text-black mb-8 text-xl lg:text-3xl">
          Expense <span className="text-[#0557C2]">Padi</span>
        </h2>
        <div className="bg-gray-300 w-44 md:w-96 mx-auto ">
          <div
            className="bg-[#0557C2] h-1 transition-all duration-300 ease-in-out"
            style={{ width: getProgressWidth() }}
          />
        </div>

        {step === 1 && (
          <PersonalDetailsForm
            initialValues={formValues.personalDetails}
            onSubmit={handleNextStep}
          />
        )}
        {step === 2 && (
          <LinkAccountDetailsForm
            initialValues={formValues.accountDetails}
            onSubmit={handleNextStep}
            onBack={handlePrevStep}
          />
        )}
        {step === 3 && (
          <PinSetup onSubmit={handleSubmit} onBack={handlePrevStep} />
        )}
      </div>
    </div>
  );
}

export default AccountDetails;
