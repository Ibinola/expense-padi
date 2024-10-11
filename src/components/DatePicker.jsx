import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="">
      <DatePicker
        className="p-3 text-center border cursor-pointer rounded-md text-xs text-black-500 mr-3"
        selected={startDate}
        onChange={(dates) => {
          const [start, end] = dates;
          setStartDate(start);
          setEndDate(end);
        }}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        isClearable
        showIcon
        dateFormat="MMM d, yyyy"
        placeholderText={'Jan 24 - May 24, 2024'}
      />
    </div>
  );
};

export default DateRangePicker;
