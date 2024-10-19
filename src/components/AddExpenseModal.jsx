import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import CustomDropdown from './CustomDropdown';
import CustomInput from './CustomInput';
import { Modal } from '@mui/material';

function AddExpenseModal({ setIsModalOpen }) {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <Modal
        open={setIsModalOpen}
        onClose={() => setIsModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          className="bg-white font-manrope rounded-3xl border mx-auto p-6 
           w-[90%] max-w-[500px] md:max-w-[600px] 
           h-auto max-h-[100vh] overflow-y-auto mt-2 relative"
        >
          <div className="mx-auto items-center">
            <h2 className="text-[24px] md:text-[28px] font-bold text-center mb-2 text-[#101828]">
              Manual expense entry
            </h2>
            <p className="text-sm text-center text-[#5D5D5D]">
              This helps to keep track of your spending with precision
            </p>
            <Formik
            // initialValues={initialValues}
            // onSubmit={onSubmit}
            // validationSchema={expenseValidationSchema}
            >
              {({ isSubmitting }) => (
                <Form className="flex flex-col space-y-4">
                  <div className="mt-3 ">
                    <DatePicker
                      showIcon
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="w-full border rounded-lg border-[#D0D5DD]"
                      wrapperClassName="w-full"
                      placeholderText={'MM/DD/YY'}
                    />
                  </div>
                  <CustomDropdown
                    label="Expense category"
                    name="expenseCategory"
                    options={[
                      { value: 'Transportation', label: 'Food & Dining' },
                      { value: 'Groceries', label: 'Housing' },
                      { value: 'Medical', label: 'Utilities' },
                    ]}
                  />

                  <CustomInput
                    name="expenseAmount"
                    type="text"
                    label="Expense Amount"
                    placeholder="N1,000.00"
                    className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  <div className="flex gap-5 ">
                    <CustomDropdown
                      label="Payment Option"
                      name="paymentOption"
                      options={[
                        { value: 'Card', label: 'Card' },
                        { value: 'Transfer', label: 'Bank Transfer' },
                      ]}
                    />
                    <CustomDropdown
                      label="Receiver"
                      name="receiver"
                      options={[
                        { value: 'Uber', label: 'Uber' },
                        { value: 'Grocery Store', label: 'Grocery Store' },
                      ]}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Receipt Attachment (Optional)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                      <input
                        type="file"
                        className="hidden"
                        id="receipt-upload"
                      />
                      <label
                        htmlFor="receipt-upload"
                        className="cursor-pointer"
                      >
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p className="mt-1 text-sm text-gray-600">
                          Drag and drop your copy of the receipt for your
                          records or choose files
                        </p>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={`py-4 mt-6 w-full text-sm rounded-md 
                       bg-blue-600 text-white 
                       ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Adding Expense...' : 'Add expense'}
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

export default AddExpenseModal;
