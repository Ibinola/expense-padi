import React from 'react';

function DashboardWidget(props) {
  return (
    <div className="flex-1 bg-[#F6F6F6] rounded-lg p-4 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-semibold">{props.title}</h2>
        <button className="text-gray-400">...</button>
      </div>
      <div className="mb-2 border rounded-md bg-[#FFFFFF] p-6 flex justify-between items-center">
        <div>
          <span className="text-3xl font-bold">{props.amount}</span>

          <div className="flex items-center mt-2">
            <span className="text-green-500 bg-green-100 px-2 py-1 rounded text-sm flex items-center">
              {props.percentage}
            </span>
            <span className="text-sm text-gray-500 ml-2">vs last month</span>
          </div>
        </div>

        <img src={props.icon} alt="Graph" />
      </div>
    </div>
  );
}

export default DashboardWidget;
