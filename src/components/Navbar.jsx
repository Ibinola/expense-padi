import React from 'react';
import profileIcon from '../assets/profile-icon.svg';
import { LuBellDot } from 'react-icons/lu';
import { IoMdMenu } from 'react-icons/io';
import { CiSearch } from 'react-icons/ci';

function Navbar({ toggleSidebar }) {
  return (
    <div className="fixed top-0 right-0 left-0 lg:left-52 z-10 bg-white">
      <div className="font-manrope flex justify-between items-center px-4 py-3 border-b">
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 focus:outline-none"
        >
          <IoMdMenu className="h-6 w-6" />
        </button>

        <h1 className="text-[#000000] font-bold text-lg sm:text-xl">
          Good morning, <span className="text-[#5D5D5D]">John</span>
        </h1>

        <div className="relative hidden sm:block">
          <CiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="py-2 pl-10 pr-4 border rounded-md"
          />
        </div>

        <div className="gap-5 flex items-center">
          <LuBellDot className="" />
          <img
            src={profileIcon}
            className="w-6 h-6 sm:w-8 sm:h-8 hidden md:block"
          />
          <span className="text-sm sm:text-base">John Doe</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
