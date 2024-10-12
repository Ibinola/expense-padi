import React, { useState } from 'react';
import img from '../../assets/bank-accounts.svg';
import { FiPlus } from 'react-icons/fi';
import CustomInput from '../../components/CustomInput';
import CustomDropdown from '../../components/CustomDropdown';
import { Form } from 'formik';
import { Formik } from 'formik';
import { Modal } from '@mui/material';

function BankAccounts() {
  const [open, setOpen] = React.useState(false);
  const [accounts, setAccounts] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const initialValues = {
    account_name: '',
    account_number: '',
    bank_name: '',
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
      className="bg-blue-500 text-white rounded-lg p-4 mb-4 w-full max-w-md font-manrope"
    >
      <h3 className="text-sm mb-2">Account Balance</h3>
      <p className="text-lg mb-4">{account.balance}</p>
      <div className="flex items-center">
        <div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center mr-2">
          {account.bank_name.charAt(0)}
        </div>
        <div>
          <p>{account.account_number}</p>
          <p>{account.account_name}</p>
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
            src={img}
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
          className="bg-white font-manrope rounded-3xl border mx-auto p-5 
                          w-[90%] max-w-[500px] md:max-w-[650px] 
                          h-auto max-h-[90vh] overflow-y-auto mt-10"
        >
          <div className="mx-auto items-center">
            <h2 className="text-[24px] md:text-[32px] font-bold text-center">
              Link Account Details
            </h2>

            <Formik initialValues={initialValues} onSubmit={onSubmit}>
              {({ isSubmitting }) => (
                <Form className="flex flex-col space-y-3">
                  <CustomDropdown
                    label="Bank Name"
                    name="color"
                    options={[
                      { value: 'accessbank', label: 'Access Bank' },
                      { value: 'firstbank', label: 'First Bank' },
                      { value: 'zenithbank', label: 'Zenith Bank' },
                    ]}
                  />

                  <CustomInput
                    name="account_number"
                    type="number"
                    label="Account Number"
                    placeholder="Enter account number"
                  />
                  <CustomInput
                    name="account_name"
                    type="text"
                    label="Account Name"
                    placeholder="Enter account name"
                  />

                  <button
                    type="submit"
                    className="py-4 mt-10 w-full text-sm rounded-md cursor-pointer 
                                 bg-[#0553C7] text-white"
                  >
                    Continue
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
