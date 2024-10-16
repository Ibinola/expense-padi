import React from 'react';
import { HiDotsHorizontal } from 'react-icons/hi';

function DashboardWidget(props) {
  return (
    <div className="flex-1 bg-[#F6F6F6] rounded-xl p-2 shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-sm font-semibold ml-2">{props.title}</h2>
        {/* <div className="cursor-pointer border text-[#4F4F4F] rounded-md p-1">
          <HiDotsHorizontal />
        </div> */}
        {/* <button className="text-gray-400">...</button> */}
      </div>
      <div className="mb-2 border rounded-md bg-[#FFFFFF] p-4 flex justify-between items-center">
        <div>
          <span className="text-2xl font-bold">{props.amount}</span>

          <div className="flex items-center mt-2">
            {/* <span className="text-green-500 bg-green-100 px-2 py-1 rounded text-sm flex items-center">
              {props.percentage}
            </span>
            <span className="text-sm text-gray-500 ml-2">vs last month</span> */}
            <img src={props.percentage} />
          </div>
        </div>

        <img
          src={props.icon}
          alt="Graph"
          className="hidden md:block w-12 h-12"
        />
      </div>
    </div>
  );
}

export default DashboardWidget;
