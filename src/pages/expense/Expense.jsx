import React, { useState } from 'react';
import icon1 from '../../assets/card-1-icon.svg';
import icon2 from '../../assets/card-2-icon.svg';
import DashboardWidget from '../../components/DashboardWidget';
import expenseTrackerIcon from '../../assets/expense-tracker-icon.svg';
import CustomBarChart from '../../components/BarChart';
import TransactionTable from '../../components/Table';
import DonutChart from '../../components/DonutChart';
import ExpensesWidget from '../../components/ExpensesWidget';
import DropdownMenu from '../../components/DropdownMenu';
import expenseIcon1 from '../../assets/expense-icon-1.svg';
import expenseIcon2 from '../../assets/expense-icon-2.svg';
import expenseIcon3 from '../../assets/expense-icon-3.svg';
import dash1 from '../../assets/dash-icon-1.svg';
import dash2 from '../../assets/dash-icon-2.svg';
import { Modal } from '@mui/material';
import { Form, Formik } from 'formik';
import CustomDropdown from '../../components/CustomDropdown';
import CustomInput from '../../components/CustomInput';
import DatePicker from 'react-datepicker';

function Expense() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const options = [
    { label: 'Manual entry of report', icon: <img src={expenseIcon1} /> },
    { label: 'Scan receipt', icon: <img src={expenseIcon2} /> },
    { label: 'Import account summary', icon: <img src={expenseIcon3} /> },
  ];
  const [startDate, setStartDate] = useState(new Date());

  const handleSelectOption = (option) => {
    if (option.label === 'Manual entry of report') {
      setIsModalOpen(true);
      console.log('Modal should open now. isModalOpen:', true); // Add this line
    }
  };
  return (
    <div className="font-manrope p-4">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-end space-y-2 md:space-y-0 md:space-x-2">
        <span className="border text-xs px-4 py-2 rounded-md">
          Jan 24 - Dec 31 2024
        </span>

        <DropdownMenu
          options={options}
          buttonText="Add Expense"
          onSelectOption={handleSelectOption}
        />
        <button className="flex items-center gap-1 bg-[#0553C7] text-xs px-4 py-2 rounded-md text-white">
          Export report
        </button>
      </div>

      {isModalOpen && (
        <Modal
          open={isModalOpen}
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
                        // className="w-full"
                      />
                      <CustomDropdown
                        label="Receiver"
                        name="receiver"
                        options={[
                          { value: 'Uber', label: 'Uber' },
                          { value: 'Grocery Store', label: 'Grocery Store' },
                        ]}
                        // className="w-ful"
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
      )}

      {/* CARDS */}
      <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Income Card */}
        <ExpensesWidget
          balance="N200,000,00.00"
          accountNumber="0123456789"
          accountName="John Doe"
        />
        <DashboardWidget
          title="Income"
          amount="N200,000,00.00"
          percentage={dash1}
          icon={icon1}
        />

        {/* Expenses Card */}
        <DashboardWidget
          title="Expenses"
          amount="N200,000,00.00"
          percentage={dash2}
          icon={icon2}
        />
      </div>

      {/* CHART HEADER */}
      <div className="flex flex-col sm:flex-row justify-between p-2 mb-4 mt-3">
        <h4 className="text-black text-[20px] font-bold">Report</h4>
        <span className="text-sm font-normal">See all</span>
      </div>

      {/* CHARTS */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* BAR CHART */}
        <div className="flex-auto w-full lg:w-2/3 h-[431px] border rounded-xl">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2 p-4">
              <img src={expenseTrackerIcon} alt="Expense Tracker Icon" />
              <h2 className="text-[17px] font-medium">Expense Tracker</h2>
            </div>

            <div className="mr-2">
              <span className="border text-xs px-4 py-1 rounded-md">
                Jan 01 - Dec 31 2023
              </span>
            </div>
          </div>
          <hr />

          <CustomBarChart />
        </div>

        {/* PIE CHART */}
        <div className="border rounded-xl w-full lg:w-1/3 p-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-[17px] font-medium">Remark</h2>
            <span className="py-1 px-2 border rounded-md text-sm bg-[#0553c71f] text-[#0553C7]">
              Expenses
            </span>
          </div>
          <hr />
          <DonutChart />
        </div>
      </div>

      {/* TABLE */}
      <h4 className="text-black font-bold mt-4 text-[20px] ">Transaction</h4>

      <TransactionTable />
    </div>
  );
}

export default Expense;
