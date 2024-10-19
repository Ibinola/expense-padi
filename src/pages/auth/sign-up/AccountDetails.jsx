import React, { useEffect, useReducer, useState } from 'react';
import AuthBgImage from '../../../components/AuthBgImage';
import LinkAccountDetailsForm from '../../../components/LinkAccountDetailsForm';
import PersonalDetailsForm from '../../../components/PersonalDetailsForm';
import PinSetup from '../../../components/PinSetup';
import { useNavigate } from 'react-router-dom';
import { showToast } from '../../../utils/toast-config';
import { useUser } from '../../../context/UserContext';
import { auth } from '../../../utils/firebase';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import {
  accountDetailsReducer,
  initialState,
  NEXT_STEP,
  PREV_STEP,
  UPDATE_FORM_VALUES,
  SUBMIT_FORM,
} from '../../../reducers/accountDetailsReducer';

function AccountDetails() {
  const { setUser } = useUser();
  const [state, dispatch] = useReducer(accountDetailsReducer, initialState);
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
    dispatch({
      type: UPDATE_FORM_VALUES,
      payload: {
        field: state.step === 1 ? 'personalDetails' : 'accountDetails',
        values,
      },
    });
    dispatch({ type: NEXT_STEP });
  };

  const handlePrevStep = () => {
    dispatch({ type: PREV_STEP });
  };

  const handleSubmit = async (values) => {
    dispatch({ type: SUBMIT_FORM, payload: values.pin });

    try {
      const userData = {
        ...state.formValues.personalDetails,
        ...state.formValues.accountDetails,
        pin: values.pin,
      };

      const db = getFirestore();
      const authUser = auth.currentUser;
      if (authUser) {
        Object.keys(userData).forEach(
          (key) => userData[key] === undefined && delete userData[key]
        );

        await setDoc(doc(db, 'users', authUser.uid), userData);
        setUser({ ...authUser, ...userData });
        showToast.success('Profile updated successfully!');
        navigate('/dashboard');
      } else {
        throw new Error('No authenticated user found');
      }
    } catch (error) {
      showToast.error('Failed to update profile. Please try again.');
    }
  };

  // PROGRESS BAR
  const getProgressWidth = () => {
    return `${(state.step / 3) * 100}%`;
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

        {state.step === 1 && (
          <PersonalDetailsForm
            initialValues={state.formValues.personalDetails}
            onSubmit={handleNextStep}
          />
        )}
        {state.step === 2 && (
          <LinkAccountDetailsForm
            initialValues={state.formValues.accountDetails}
            onSubmit={handleNextStep}
            onBack={handlePrevStep}
          />
        )}
        {state.step === 3 && (
          <PinSetup onSubmit={handleSubmit} onBack={handlePrevStep} />
        )}
      </div>
    </div>
  );
}

export default AccountDetails;
