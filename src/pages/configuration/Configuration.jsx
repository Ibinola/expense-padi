import React from 'react';
import { PiNotePencil } from 'react-icons/pi';
import { useState } from 'react';
import trackingrulehero from '../../assets/tracking-rule-hero.svg';
import { Modal } from '@mui/material';
import { Form, Formik } from 'formik';
import CustomDropdown from '../../components/CustomDropdown';
import CustomInput from '../../components/CustomInput';

function Configuration() {
  const [open, setOpen] = React.useState(false);
  const [rules, setRules] = useState([]);
  const initialValues = {
    typeOfTransaction: '',
    remarksTrails: '',
    remark: '',
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = (values, { resetForm }) => {
    // if (accounts.length < 5) {
    //   setRules([...accounts, { ...values, balance: 'NIL' }]);
    //   resetForm();
    //   setOpen(false);
    // } else {
    //   alert('Maximum number of accounts (5) reached');
    // }
    console.log(values);
  };
  return (
    <div className="flex flex-col p-4 md:p-2 lg:p-2 font-manrope space-y-4  ">
      <div className="flex justify-end">
        <button
          onClick={handleOpen}
          className="bg-[#0553C7] flex items-center gap-2 text-sm rounded-md py-2 px-4 mt-2 text-white"
        >
          <PiNotePencil />
          Set a rule
        </button>
      </div>

      <div className="flex flex-col items-center space-y-4">
        <img
          src={trackingrulehero}
          alt="acct-image"
          className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
        />
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold">
          No Set Transaction Tracking Rules
        </h3>
      </div>

      <div className="flex flex-col items-center space-y-4">
        <p className="text-center mx-auto w-full max-w-[90%] md:max-w-[450px]">
          Add any account of your choice in order to monitor your income and
          expense
        </p>

        <button className="bg-[#0553C7] flex items-center gap-1 text-sm md:text-base rounded-md py-3 px-6 mt-2 text-white">
          <PiNotePencil />
          Set a rule
        </button>
      </div>

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
            <h2 className="text-[24px] md:text-[32px] font-bold text-center mb-4">
              Tracking Rules
            </h2>
            <p className="text-center mb-6">
              This helps to keep track of your spending with precision
            </p>

            <Formik initialValues={initialValues} onSubmit={onSubmit}>
              {({ isSubmitting }) => (
                <Form className="flex flex-col space-y-4">
                  <div>
                    <CustomDropdown
                      label="Type of transaction"
                      name="typeOfTransaction"
                      options={[
                        { value: 'Credit', label: 'Credit' },
                        { value: 'Debit', label: 'Debit' },
                      ]}
                    />
                  </div>
                  <div>
                    <CustomInput
                      name="remarksTrails"
                      type="text"
                      label="Remarks trails"
                      placeholder="Enter remarks"
                    />
                  </div>
                  <div>
                    <CustomDropdown
                      label="Remark"
                      name="remark"
                      options={[
                        { value: 'Transportation', label: 'Transportation' },
                        { value: 'Groceries', label: 'Groceries' },
                        { value: 'Medical', label: 'Medical' },
                        { value: 'Feeding', label: 'Feeding' },
                      ]}
                    />
                  </div>
                  <button
                    type="submit"
                    className="py-4 mt-6 w-full text-sm rounded-md cursor-pointer 
                               bg-[#0553C7] text-white"
                  >
                    Make setting
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

export default Configuration;
