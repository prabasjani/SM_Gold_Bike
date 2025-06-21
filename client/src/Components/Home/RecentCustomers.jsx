import React from "react";

const RecentCustomers = () => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-600 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Customer name
            </th>
            <th scope="col" className="px-6 py-3">
              Loan Amount
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b border-gray-200 hover:bg-gray-50">
            <th
              scope="row"
              className="px-6 py-4 font-semibold text-gray-600 whitespace-nowrap"
            >
              Thirupathy
            </th>
            <td className="px-6 py-4 font-semibold text-green-500">₹. 55000</td>
          </tr>
          <tr className="bg-white border-b border-gray-200 hover:bg-gray-50">
            <th
              scope="row"
              className="px-6 py-4 font-semibold text-gray-600 whitespace-nowrap"
            >
              Thirupathy
            </th>
            <td className="px-6 py-4 font-semibold text-red-500">₹. 55000</td>
          </tr>
          <tr className="bg-white border-b border-gray-200 hover:bg-gray-50">
            <th
              scope="row"
              className="px-6 py-4 font-semibold text-gray-600 whitespace-nowrap"
            >
              Thirupathy
            </th>
            <td className="px-6 py-4 font-semibold text-green-500">₹. 55000</td>
          </tr>
          <tr className="bg-white border-b border-gray-200 hover:bg-gray-50">
            <th
              scope="row"
              className="px-6 py-4 font-semibold text-gray-600 whitespace-nowrap"
            >
              Thirupathy
            </th>
            <td className="px-6 py-4 font-semibold text-red-500">₹. 55000</td>
          </tr>
          <tr className="bg-white border-b border-gray-200 hover:bg-gray-50">
            <th
              scope="row"
              className="px-6 py-4 font-semibold text-gray-600 whitespace-nowrap"
            >
              Thirupathy
            </th>
            <td className="px-6 py-4 font-semibold text-red-500">₹. 55000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RecentCustomers;
