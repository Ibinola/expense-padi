import React from 'react';
import img from '../../assets/bank-accounts.svg';
import { FiPlus } from 'react-icons/fi';

function BankAccounts() {
  return (
    <div className="flex flex-col p-4 md:p-2 lg:p-2 font-manrope space-y-4  ">
      <div className="flex justify-end">
        <button className="bg-[#0553C7] flex items-center gap-2 text-sm rounded-md py-2 px-4 mt-2 text-white">
          <FiPlus />
          Link Account
        </button>
      </div>

      <div className="flex flex-col items-center space-y-4">
        <img
          src={img}
          alt="acct-image"
          className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
        />
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold">
          No account linked
        </h3>
      </div>

      <div className="flex flex-col items-center space-y-4">
        <p className="text-center mx-auto w-full max-w-[90%] md:max-w-[450px]">
          Add any account of your choice in order to monitor your income and
          expense
        </p>

        <button className="bg-[#0553C7] flex items-center gap-1 text-sm md:text-base rounded-md py-3 px-6 mt-2 text-white">
          <FiPlus />
          Link Account
        </button>
      </div>
    </div>
  );
}

export default BankAccounts;
