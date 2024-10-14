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

function Expense() {
  const options = [
    { label: 'Manual entry of report', icon: <img src={expenseIcon1} /> },
    { label: 'Scan receipt', icon: <img src={expenseIcon2} /> },
    { label: 'Import account summary', icon: <img src={expenseIcon3} /> },
  ];
  return (
    <div className="font-manrope p-4">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-end space-y-2 md:space-y-0 md:space-x-2">
        <span className="border text-xs px-4 py-2 rounded-md">
          Jan 24 - Dec 31 2024
        </span>

        <DropdownMenu options={options} buttonText="Add Expense" />
        <button className="flex items-center gap-1 bg-[#0553C7] text-xs px-4 py-2 rounded-md text-white">
          Export report
        </button>
      </div>

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
          percentage="20%"
          icon={icon1}
        />

        {/* Expenses Card */}
        <DashboardWidget
          title="Expenses"
          amount="N200,000,00.00"
          percentage="20%"
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
