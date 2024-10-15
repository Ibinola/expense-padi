import React from 'react';
import signUpBackgroundImage from '../assets/sign-up-bg-image.svg';
import bgBar from '../assets/icon-1.svg';

function AuthBgImage() {
  return (
    <div className="hidden bg-[#0553C7] justify-center text-center min-h-screen text-white md:flex flex-col items-center p-6 w-full md:w-1/2 rounded-none md:rounded-r-3xl">
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
          Manage your money with ease. Track spending, save smart, and plan for
          a secure future. Start today and see the change.
        </p>
      </div>
    </div>
  );
}

export default AuthBgImage;
