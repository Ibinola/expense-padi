import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { IoIosArrowDown } from 'react-icons/io';
import { FaPlus } from 'react-icons/fa6';

const DropdownMenu = ({
  buttonText,
  options,
  onSelectOption,
  menuClass,
  buttonClass,
}) => {
  return (
    <Menu as="div" className={`relative inline-block text-left ${menuClass}`}>
      <div>
        <MenuButton
          className={`inline-flex items-center w-full justify-center gap-x-1.5 rounded-lg  px-3 py-2 text-sm font-medium shadow-sm  border  border-[#0553C7]  text-[#0553C7] ring-gray-300 hover:bg-gray-50 ${buttonClass}`}
        >
          <FaPlus />
          {buttonText}
          <IoIosArrowDown
            aria-hidden="true"
            className="-mr-1 h-5 w-5 text-gray-400"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {options.map((option, index) => (
            <MenuItem key={index}>
              {() => (
                <div
                  onClick={() => onSelectOption(option)}
                  className={`px-4 py-2 text-sm text-[#000000] flex items-center gap-2 cursor-pointer`}
                >
                  <span>{option.icon}</span>
                  {option.label}
                </div>
              )}
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
};

export default DropdownMenu;
