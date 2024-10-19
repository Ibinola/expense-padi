import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import heroImg from '../../assets/bank-accounts.svg';
import { Modal } from '@mui/material';
import LinkAccountForm from '../../components/LinkAccountForm';
import AccountCard from '../../components/AccountCard';

function BankAccounts() {
  const [open, setOpen] = React.useState(false);
  const [accounts, setAccounts] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [modal, openModal] = useState(false);

  const handleUnlink = (id) => {
    setAccounts((prevAccounts) =>
      prevAccounts.filter((item) => item.id !== id)
    );
    setOpenDropdown(null);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = (values, { resetForm }) => {
    if (accounts.length < 5) {
      setAccounts([...accounts, { ...values, balance: 'NIL', id: Date.now() }]);
      resetForm();
      setOpen(false);
    } else {
      alert('Maximum number of accounts (5) reached');
    }
  };

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
          {accounts.map((account) => (
            <AccountCard
              key={account.id}
              account={account}
              onUnlink={handleUnlink}
            />
          ))}
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
          <LinkAccountForm onSubmit={onSubmit} onClose={handleClose} />
        </div>
      </Modal>
    </div>
  );
}

export default BankAccounts;
