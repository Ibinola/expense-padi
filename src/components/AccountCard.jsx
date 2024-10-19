import React, { useState } from 'react';
import { HiChevronDown, HiDotsHorizontal, HiEye } from 'react-icons/hi';
import { IoTrashOutline } from 'react-icons/io5';
import img from '../assets/table-icon.svg';

function AccountCard({ account, onUnlink }) {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <div className="relative bg-gradient-to-r from-[#3882F0] to-[#4081e4] text-white rounded-lg p-4 mb-4 w-full max-w-md font-manrope overflow-hidden backdrop-filter backdrop-blur-lg bg-opacity-30 border border-white/20">
      <div className="relative z-10">
        <div className="flex justify-between items-center">
          <h3 className="text-sm mb-2 text-[#CDDDF4]">Account Balance</h3>
          <button
            onClick={handleDropdown}
            className="bg-[#81aceb] cursor-pointer border text-[#011128] rounded-lg p-1"
          >
            <HiDotsHorizontal />
          </button>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-semibold text-[#CDDDF4]">
            {account.balance}
          </p>
          <div className="text-white cursor-pointer">
            <HiEye />
          </div>
          {openDropdown && (
            <div className="absolute right-0 mt-2 w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
              <div className="py-1">
                <button
                  onClick={() => onUnlink(account.id)}
                  className="flex items-center py-3 px-1 text-red-500 text-xs w-full hover:bg-gray-100"
                >
                  <IoTrashOutline className="mr-2" /> Unlink account
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="my-3 border-t border-[#FFFFFF33] -mx-4"></div>
        <div className="mt-2 bg-[#ffffff33] rounded-lg flex items-center justify-between">
          <div className="flex items-center p-2">
            <div className="mr-2">
              <img src={img} alt="bank logo" className="w-7 h-7" />
            </div>
            <div>
              <p className="text-sm text-[#FFFFFF]">{account.accountNumber}</p>
              <p className="text-sm text-[#D1D1D1]">{account.accountName}</p>
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

export default AccountCard;
