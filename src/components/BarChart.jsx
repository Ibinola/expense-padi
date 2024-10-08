import React from 'react';
import { data } from '../utils/chart-data';
// import BarChart
import {
  BarChart,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

function CustomBarChart() {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[600px]">
        {' '}
        {/* Minimum width for scrollability */}
        <ResponsiveContainer width="100%" height={340}>
          <BarChart
            data={data}
            barGap={0}
            // margin={{
            //   top: 10,
            // }}
          >
            <CartesianGrid strokeDasharray="1 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              barSize={10}
              dataKey="Income"
              fill="#23AD7C"
              radius={[10, 10, 0, 0]}
            />
            <Bar
              barSize={10}
              dataKey="Expenses"
              fill="#FF2323"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default CustomBarChart;
