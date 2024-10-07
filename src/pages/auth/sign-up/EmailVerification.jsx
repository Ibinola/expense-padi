import React, { useState, useEffect } from 'react';
import CustomButton from '../../../components/CustomButton';
import emailIcon from '../../../assets/email-icon.svg';

function EmailVerification({ email, onBack }) {
  const [verificationCode, setVerificationCode] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
  ]);

  const handleInputChange = (index, value) => {
    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);

    if (value && index < 5) {
      document.getElementById(`code-${index + 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onVerify(verificationCode.join(''));
  };

  return (
    <div className="w-full md:w-[491px] mx-auto text-center">
      <div className="mb-8">
        <img src={emailIcon} alt="Email Verification" className="mx-auto" />
      </div>
      <h1 className="text-[#101828] text-[20px] md:text-[26px] font-bold mb-4">
        Email verification
      </h1>
      <p className="text-[14px] font-medium text-[#5D5D5D] mb-6">
        Please enter the code sent to {email} to complete the process.
      </p>
      {/* CHANGE TO FORMIK */}
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center space-x-2 mb-6">
          {verificationCode.map((digit, index) => (
            <input
              key={index}
              id={`code-${index}`}
              type="text"
              maxLength="1"
              className="w-12 h-12 text-center border border-gray-300 rounded-md"
              value={digit}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          ))}
        </div>
        <div className="mb-6">
          <button type="button" className=" text-sm font-medium">
            Resend code in: <span className="text-[#0553C7]">60s</span>
          </button>
        </div>
        <CustomButton type="submit" label="Continue" />
      </form>
      <button onClick={onBack} className="mt-4 text-sm font-medium">
        Back
      </button>
    </div>
  );
}

export default EmailVerification;
