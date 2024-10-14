import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import heroImg from '../../assets/bank-accounts.svg';
import CustomInput from '../../components/CustomInput';
import CustomDropdown from '../../components/CustomDropdown';
import { Form } from 'formik';
import { Formik } from 'formik';
import img from '../../assets/table-icon.svg';
import { Modal } from '@mui/material';
import { HiChevronDown, HiDotsHorizontal, HiEye } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { linkAccountValidationSchema } from '../../utils/signUpValidationSchema';
import { IoTrashOutline } from 'react-icons/io5';

function BankAccounts() {
  const [open, setOpen] = React.useState(false);
  const [accounts, setAccounts] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [modal, openModal] = useState(false);

  const handleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleUnlink = (accountNumber) => {
    setAccounts(
      accounts.filter((item) => item.accountNumber !== accountNumber)
    );
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const initialValues = {
    accountName: '',
    accountNumber: '',
    bankName: '',
  };

  const onSubmit = (values, { resetForm }) => {
    if (accounts.length < 5) {
      setAccounts([...accounts, { ...values, balance: 'NIL' }]);
      resetForm();
      setOpen(false);
    } else {
      alert('Maximum number of accounts (5) reached');
    }
  };

  const renderAccountCard = (account, index) => (
    <div
      key={index}
      className="relative bg-gradient-to-r from-[#3882F0] to-[#4081e4] text-white rounded-lg p-4 mb-4 w-full max-w-md font-manrope overflow-hidden backdrop-filter backdrop-blur-lg bg-opacity-30 border border-white/20"
    >
      {/* Card Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h3 className="text-sm mb-2 text-[#CDDDF4]">Account Balance</h3>
          <button
            onClick={() => handleDropdown(account.accountNumber)}
            className="bg-[#81aceb] cursor-pointer border text-[#011128] rounded-lg p-1"
          >
            <HiDotsHorizontal />
          </button>
        </div>
        {/* Balance */}
        <div className="flex items-center justify-between">
          <p className="text-2xl font-semibold text-[#CDDDF4]">
            {account.balance}
          </p>
          <div className="text-white cursor-pointer">
            <HiEye />
          </div>
          {openDropdown === account.accountNumber && (
            <div className="absolute right-0 mt-2 w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
              <div className="py-1">
                <button
                  onClick={() => handleUnlink(account.accountNumber)}
                  className="flex items-center py-3 px-1 text-red-500  text-xs  w-full"
                >
                  <IoTrashOutline className="mr-2" /> Unlink account
                </button>
              </div>
            </div>
          )}
        </div>
        <div className=" my-3 border-t border-[#FFFFFF33] -mx-4 "></div>

        {/* Bank Details */}
        <div className="mt-2 bg-[#ffffff33] rounded-lg flex items-center justify-between ">
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

  return (
    <div className="flex flex-col p-4 md:p-2 lg:p-2 font-manrope space-y-4  ">
      <div className="flex justify-end">
        <button
          onClick={handleOpen}
          disabled={accounts.length >= 5}
          className="bg-[#0553C7] flex items-center gap-2 text-sm rounded-md py-2 px-4 mt-2 text-white"
        >
          <FiPlus />
          Link Account
        </button>
      </div>

      {accounts.length === 0 ? (
        <div className="flex flex-col items-center space-y-4">
          <img
            src={heroImg}
            alt="acct-image"
            className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
          />
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold">
            No account linked
          </h3>
          <p className="text-center mx-auto w-full max-w-[90%] md:max-w-[450px]">
            Add any account of your choice in order to monitor your income and
            expense
          </p>

          <button
            onClick={handleOpen}
            className="bg-[#0553C7] flex items-center gap-1 text-sm md:text-base rounded-md py-3 px-6 mt-2 text-white"
          >
            <FiPlus />
            Link Account
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {accounts.map(renderAccountCard)}
        </div>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          className="bg-white font-manrope rounded-3xl border mx-auto p-6 
                w-[90%] max-w-[500px] md:max-w-[600px] 
                h-auto max-h-[90vh] overflow-y-auto mt-10 relative"
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-black"
            onClick={handleClose}
          >
            <AiOutlineClose size={24} />
          </button>

          {/* Modal Content */}
          <div className="mx-auto items-center">
            {/* Modal Title */}
            <h2 className="text-[24px] md:text-[28px] font-bold text-center mb-5">
              Link Account Details
            </h2>

            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={linkAccountValidationSchema}
            >
              {({ isSubmitting }) => (
                <Form className="flex flex-col space-y-4">
                  {/* Bank Name Dropdown */}
                  <CustomDropdown
                    label="Bank Name"
                    name="bankName"
                    options={[{ value: 'gtb', label: 'Guaranty Trust Bank' }]}
                  />

                  {/* Account Number Input */}
                  <CustomInput
                    name="accountNumber"
                    type="number"
                    label="Account Number"
                    placeholder="Enter account number"
                    className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  {/* Account Name Input */}
                  <CustomInput
                    name="accountName"
                    type="text"
                    label="Account Name"
                    placeholder="Enter account name"
                    className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  {/* Continue Button */}
                  <button
                    type="submit"
                    className={`py-4 mt-6 w-full text-sm rounded-md 
                            bg-blue-600 text-white 
                            ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Linking Account...' : 'Continue'}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default BankAccounts;
