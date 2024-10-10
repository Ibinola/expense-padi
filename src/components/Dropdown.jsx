import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { IoIosArrowDown } from 'react-icons/io';

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
          className={`inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ${buttonClass}`}
        >
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
              {({ active }) => (
                <a
                  href={option.href || '#'}
                  onClick={() => onSelectOption(option)}
                  className={`block px-4 py-2 text-sm text-gray-700 ${
                    active ? 'bg-gray-100 text-gray-900' : ''
                  }`}
                >
                  {option.label}
                </a>
              )}
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
};

export default DropdownMenu;
