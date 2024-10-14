import React from 'react';
import { HiChevronDown, HiDotsHorizontal, HiEye } from 'react-icons/hi';
import img from '../assets/table-icon.svg';

function ExpensesWidget(props) {
  return (
    <div className="relative bg-gradient-to-r from-[#3882F0] to-[#4081e4] text-white rounded-lg p-4 font-manrope overflow-hidden backdrop-filter backdrop-blur-lg bg-opacity-30 border border-white/20">
      {/* Card Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h3 className="text-sm mb-2 text-[#CDDDF4]">Account Balance</h3>
          {/* <div className="bg-[#81aceb] cursor-pointer border text-[#011128] rounded-lg p-1">
            <HiDotsHorizontal />
          </div> */}
        </div>
        {/* Balance */}
        <div className="flex items-center justify-between">
          <p className="text-2xl font-semibold text-[#CDDDF4]">
            {props.balance}
          </p>
          <div className="text-white cursor-pointer">
            <HiEye />
          </div>
        </div>
        <div className=" my-3 border-t border-[#FFFFFF33] -mx-4 "></div>

        {/* Bank Details */}
        <div className="mt-2 bg-[#ffffff33] rounded-lg flex items-center justify-between ">
          <div className="flex items-center p-2">
            <div className="mr-2">
              <img src={img} alt="bank logo" className="w-7 h-7" />
            </div>
            <div>
              <p className="text-sm text-[#FFFFFF]">{props.accountNumber}</p>
              <p className="text-sm text-[#D1D1D1]">{props.accountName}</p>
            </div>
          </div>
          <div className="text-[#CDDDF4] cursor-pointer">
            <HiChevronDown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpensesWidget;
