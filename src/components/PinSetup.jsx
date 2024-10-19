import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import CustomButton from './CustomButton';
import { PinSetupSchema } from '../utils/validationSchema';

function PinSetup({ onSubmit, onBack }) {
  const [pin, setPin] = useState(['', '', '', '']);

  const handlePinChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);

      if (value && index < 3) {
        document.getElementById(`pin-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = (values, { setSubmitting }) => {
    const pinValue = values.pin;
    setSubmitting(false);
    onSubmit({ pin: pinValue });
  };

  return (
    <div className="md:w-[400px] mx-auto text-center">
      <h1 className="text-[#101828] mt-5 text-[20px] md:text-[26px] font-bold mb-4">
        Pin Setup
      </h1>
      <p className="text-[14px] font-medium text-[#5D5D5D] mb-6">
        Set-up your pin to create an extra layer of security from intruders
        accessing your account
      </p>

      <Formik
        initialValues={{ pin: pin.join('') }}
        validationSchema={PinSetupSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form>
            <div className="flex justify-center space-x-2 mb-8">
              {pin.map((digit, index) => (
                <input
                  key={index}
                  id={`pin-${index}`}
                  type="text"
                  maxLength="1"
                  className="w-12 h-12 text-center border border-gray-300 rounded-md"
                  value={digit}
                  onChange={(e) => {
                    handlePinChange(index, e.target.value);
                    setFieldValue('pin', pin.join(''));
                  }}
                />
              ))}
            </div>
            <div className="flex flex-col md:flex-row  justify-between gap-5 mt-52">
              <CustomButton
                type="button"
                label="Back"
                onClick={onBack}
                className="bg-gray-200 text-black"
              />
              <CustomButton
                type="submit"
                label={isSubmitting ? 'Submitting...' : 'Continue'}
                isLoading={isSubmitting}
                onClick={onSubmit}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default PinSetup;
