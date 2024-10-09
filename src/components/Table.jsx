import React from 'react';
import tableId from '../assets/table-icon.svg';
import { IoIosArrowDown } from 'react-icons/io';
import { HiDotsHorizontal } from 'react-icons/hi';

const transactions = [
  {
    id: '9876543210',
    img: tableId,
    amount: 'N150,000.00',
    reference: 'TGA2-4567234',
    type: 'Debit',
    date: '30th AUG 2023',
    time: '12:30 PM',
    status: 'Pending',
    remark: 'Data Purchase',
  },
  {
    id: '1122334455',
    img: tableId,
    amount: 'N50,000.00',
    reference: 'FSE8-9981123',
    type: 'Credit',
    date: '15th SEP 2023',
    time: '09:45 AM',
    status: 'Failed',
    remark: 'Transfer',
  },
  {
    id: '6677889900',
    img: tableId,
    amount: 'N75,000.00',
    reference: 'KLP7-3345567',
    type: 'Debit',
    date: '10th OCT 2023',
    time: '02:00 PM',
    status: 'Settled',
    remark: 'Electricity Bill',
  },
  {
    id: '4433221100',
    img: tableId,
    amount: 'N300,000.00',
    reference: 'HGB5-2245567',
    type: 'Credit',
    date: '22nd SEP 2023',
    time: '11:15 AM',
    status: 'Pending',
    remark: 'Salary',
  },
  {
    id: '5566778899',
    img: tableId,
    amount: 'N90,000.00',
    reference: 'BVC9-5678902',
    type: 'Debit',
    date: '5th NOV 2023',
    time: '04:45 PM',
    status: 'Settled',
    remark: 'Shopping',
  },
  {
    id: '9988776655',
    img: tableId,
    amount: 'N500,000.00',
    reference: 'POY1-8876543',
    type: 'Credit',
    date: '1st DEC 2023',
    time: '08:30 AM',
    status: 'Failed',
    remark: 'Loan Payment',
  },
];

export default function TransactionTable() {
  return (
    <div className="mt-4 flow-root ">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-[#5D5D5D] sm:pl-6"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-[#5D5D5D]"
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-[#5D5D5D]"
                  >
                    Reference ID
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-[#5D5D5D]"
                  >
                    Transaction type
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-[#5D5D5D]"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-[#5D5D5D]"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-[#5D5D5D]"
                  >
                    Remark
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y  divide-gray-200 bg-white">
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-[#121212]">
                      <div className="flex items-center">
                        <div className="">
                          <img src={tableId} />
                        </div>
                        <div className="ml-4">
                          <div className="font-medium text-gray-900">
                            {transaction.id}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-[#121212]">
                      {transaction.amount}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-[#121212]">
                      {transaction.reference}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-[#121212]">
                      {transaction.type}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-[#121212]">
                      <div>{transaction.date}</div>
                      <div className="text-gray-400 ml-5">
                        {transaction.time}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-[#121212]">
                      <span
                        className={`px-2 inline-flex items-center text-xs leading-5 font-semibold rounded-full ${
                          transaction.status === 'Settled'
                            ? 'bg-green-100 text-[#00B03C]'
                            : transaction.status === 'Failed'
                              ? 'bg-[#FFF0F0] text-[#F50000]'
                              : 'bg-[#FEF6C9] text-[#D5B407]'
                        }`}
                      >
                        <span
                          className={`w-1 h-1 mr-2 rounded-full ${
                            transaction.status === 'Settled'
                              ? 'bg-green-400'
                              : transaction.status === 'Failed'
                                ? 'bg-red-400'
                                : 'bg-yellow-400'
                          }`}
                        ></span>
                        {transaction.status}
                      </span>
                    </td>
                    <td className="whitespace-nowrap py-4 text-sm text-[#121212]">
                      <div className="border rounded-lg p-2  flex justify-between items-center">
                        {transaction.remark}
                        <span>
                          <IoIosArrowDown />
                        </span>
                      </div>
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <button className="text-indigo-600 hover:text-indigo-900">
                        <HiDotsHorizontal />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
