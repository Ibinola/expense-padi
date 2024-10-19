import React from 'react';
import { IoEyeOutline } from 'react-icons/io5';
import { RiDeleteBinLine } from 'react-icons/ri';
import { getImageForRule } from '../utils/getImageForRule';

const TrackingRuleCard = ({ rule, onEdit, onDelete }) => (
  <div
    key={rule.id}
    className="bg-white border border-[#E7E7E7] rounded-2xl shadow-lg p-4 flex items-center justify-between"
  >
    <div className="flex items-center space-x-4">
      <img
        src={getImageForRule(rule.remark)}
        alt={rule.remark}
        className="w-12 h-12 object-cover rounded-xl"
      />
      <div>
        <h3 className="font-bold text-[#121212] text-xl">{rule.remark}</h3>
        <p className="text-sm text-[#5D5D5D]">{rule.remarksTrails}</p>
      </div>
    </div>
    <div className="flex space-x-2">
      <button
        className="text-gray-400 hover:text-gray-600 cursor-pointer "
        onClick={() => onEdit(rule)}
      >
        <IoEyeOutline size={20} />
      </button>
      <button
        className="text-gray-400 cursor-pointer hover:text-red-500"
        onClick={() => onDelete(rule.id)}
      >
        <RiDeleteBinLine size={20} />
      </button>
    </div>
  </div>
);

export default TrackingRuleCard;
