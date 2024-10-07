import React from 'react';
import icon1 from '../../assets/card-1-icon.svg';
import icon2 from '../../assets/card-2-icon.svg';
import DashboardWidget from '../../components/DashboardWidget';

function Dashboard() {
  return (
    <div className="font-manrope">
      <div className="flex justify-end space-x-2 ">
        <span className="border text-xs px-4 py-2 rounded-md">
          Jan 24 - Dec 31 2024
        </span>
        <button className="bg-[#0553C7] text-xs px-4 py-2 rounded-md text-white">
          Export report
        </button>
      </div>

      {/* CARDS */}
      <div className="mt-3 flex flex-col md:flex-row gap-4">
        {/* Income Card */}
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

      {/* CHARTS */}
      <div className="flex justify-between p-2">
        <h4 className="text-black text-[20px] font-semibold">Report</h4>
        <span className="text-sm">See all</span>
      </div>
    </div>
  );
}

export default Dashboard;
