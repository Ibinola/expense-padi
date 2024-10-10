import * as React from 'react';
import Modal from '@mui/material/Modal';
import { Formik } from 'formik';
import CustomInput from './CustomInput';
import { Form } from 'react-router-dom';
import CustomDropdown from './CustomDropdown';

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const initialValues = {
    account_name: '',
    account_number: '',
    bank_name: 'Access Bank',
  };

  const onSubmit = (values) => {
    console.log('form data', values);
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpen}>Open modal</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="bg-white font-manrope rounded-3xl border w-[491px] h-[622px] mx-auto mt-6 ">
          <div className="mx-auto items-center p-10 mt-5">
            <h2 className="text-[32px] font-bold text-center">
              Link Account Details
            </h2>

            <Formik
              initialValues={initialValues}
              // validationSchema={signUpValidationSchema}
              onSubmit={onSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="flex flex-col max-w-xl space-y-3">
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

                  {/* <CustomButton type="submit" label="Continue" /> */}
                  <button className=" py-4 mt-10 px-1 md:py-3 w-full border text-sm rounded-md cursor-pointer bg-[#0553C7] text-white">
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
