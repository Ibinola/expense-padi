import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import house from '../assets/category-label-1.svg';
import bus from '../assets/category-label-2.svg';
import food from '../assets/category-label-3.svg';
import app from '../assets/category-label-4.svg';

const data = [
  { name: 'Transportation', value: 154647.42 },
  { name: 'Housing', value: 412393.12 },
  { name: 'Food', value: 193323 },
  { name: 'Utilities', value: 257745.7 },
];

const COLORS = ['#08A5C4', '#E4AF11', '#61C554', '#FB105E'];

const DonutChart = () => {
  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="flex flex-col items-center">
      <ResponsiveContainer width={200} height={200}>
        {' '}
        {/* Reduced size */}
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={1}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          {/* Total Value in the Center */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-sm font-bold"
          >
            ₦{total.toLocaleString('en-US')}k
          </text>
        </PieChart>
      </ResponsiveContainer>

      <div className="grid grid-cols-2 gap-6">
        {/* Housing */}
        <div className="border rounded-lg px-4 py-1">
          <p className="flex text-xs md:text-sm text-[#999999] items-center gap-2">
            <span>
              <img
                src={house}
                alt="Housing icon"
                className="w-4 h-4 md:w-6 md:h-6"
              />
            </span>
            <span className="truncate">Housing</span>{' '}
          </p>
          <p className="text-sm md:text-base truncate">
            ₦{data[1].value.toLocaleString('en-US')}K
          </p>
        </div>
        {/* Transportation */}
        <div className="border rounded-lg px-4 py-1">
          <p className="flex text-xs md:text-sm text-[#999999] items-center gap-2">
            <span>
              <img
                src={bus}
                alt="Transportation icon"
                className="w-4 h-4 md:w-6 md:h-6"
              />
            </span>
            <span className="truncate">Transportation</span>
          </p>
          <p className="text-sm md:text-base truncate">
            ₦{data[0].value.toLocaleString('en-US')}K
          </p>
        </div>
        {/* Food */}
        <div className="border rounded-lg px-4 py-1">
          <p className="flex text-xs md:text-sm text-[#999999] items-center gap-2">
            <span>
              <img
                src={food}
                alt="Food icon"
                className="w-4 h-4 md:w-6 md:h-6"
              />
            </span>
            <span className="truncate">Food</span>
          </p>
          <p className="text-sm md:text-base truncate">
            ₦{data[2].value.toLocaleString('en-US')}K
          </p>
        </div>
        {/* Utilities */}
        <div className="border rounded-lg px-4 py-1">
          <p className="flex text-xs md:text-sm text-[#999999] items-center gap-2">
            <span>
              <img
                src={app}
                alt="Utilities icon"
                className="w-4 h-4 md:w-6 md:h-6"
              />
            </span>
            <span className="truncate">Utilities</span>
          </p>
          <p className="text-sm md:text-base truncate">
            ₦{data[3].value.toLocaleString('en-US')}K
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
