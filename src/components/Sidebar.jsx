import React from 'react';
import { HiOutlineChartPie, HiOutlineCog } from 'react-icons/hi2';
import { RxDashboard } from 'react-icons/rx';
import { PiBankThin } from 'react-icons/pi';
import { NavLink } from 'react-router-dom';
import { CiSettings } from 'react-icons/ci';
import configurationIcon from '../assets/configuration.svg';
import { HiOutlineLogout } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';

function Sidebar({ isOpen, toggleSidebar }) {
  const top_links = [
    {
      label: 'Dashboard',
      to: '/dashboard',
      icon: <RxDashboard />,
    },
    {
      label: 'Expense',
      to: '/expense',
      icon: <HiOutlineChartPie />,
    },
    {
      label: 'Bank accounts',
      to: '/bank-accounts',
      icon: <PiBankThin />,
    },
    {
      label: 'Configuration',
      to: '/configuration',
      icon: <img src={configurationIcon} alt="" />,
    },
  ];

  const bottom_links = [
    {
      label: 'Settings',
      to: '/settings',
      icon: <CiSettings />,
    },
    {
      label: 'Log out',
      to: '/logout',
      icon: <HiOutlineLogout />,
    },
  ];

  return (
    <div
      className={`fixed inset-y-0 left-0 w-52 bg-white shadow-md transform transition-transform duration-300 lg:translate-x-0 flex flex-col ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } z-50`}
    >
      <div className="p-4 flex flex-col font-codec-pro h-full">
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 focus:outline-none absolute top-4 right-4"
        >
          <IoMdClose className="h-6 w-6" />
        </button>
        {/* LOGO */}
        <div className="flex items-center mb-8">
          <h2 className="font-zendots text-center mt-2 text-black text-base lg:text-base">
            Expense <span className="text-[#0557C2]">Padi</span>
          </h2>
        </div>

        {/* Links */}

        <hr />
        <nav className="space-y-3 mt-4">
          {top_links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center space-x-3 text-white bg-[#0553C7] p-2 rounded-md'
                  : 'flex items-center space-x-3 text-[#B0B0B0] p-2 hover:bg-[#F0F6FE] rounded-md'
              }
            >
              {link.icon}
              <span className="font-medium text-sm">{link.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Bottom Links */}
        <div className="mt-auto">
          <hr />
          <nav className="space-y-4 mt-2">
            {bottom_links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? 'flex items-center space-x-3 text-white bg-[#0553C7] p-2 rounded-md'
                    : 'flex items-center space-x-3 text-[#B0B0B0] p-2 hover:bg-[#F0F6FE] rounded-md'
                }
              >
                {link.icon}
                <span className="font-medium text-sm">{link.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
