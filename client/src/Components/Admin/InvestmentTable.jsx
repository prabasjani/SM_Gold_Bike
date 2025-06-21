import { Line } from "rc-progress";
import React from "react";

const InvestmentTable = () => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-600 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="py-3">
              Investor name
            </th>
            <th scope="col" className="px-10 py-3">
              Investment Amount
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b border-gray-200 hover:bg-gray-50">
            <th
              scope="row"
              className="py-2 font-semibold text-gray-600 whitespace-nowrap"
            >
              <div className="flex items-center justify-between">
                <p className="mb-2 !text-sm">Thirupathy</p>
                <p>27%</p>
              </div>
              <Line percent={25} strokeWidth={3} strokeColor="#D3D3D3" />
            </th>
            <td className=" px-10 py-2">
              <h5>₹. 55000</h5>
            </td>
          </tr>
          <tr className="bg-white border-b border-gray-200 hover:bg-gray-50">
            <th
              scope="row"
              className="py-2 font-semibold text-gray-600 whitespace-nowrap"
            >
              <div className="flex items-center justify-between">
                <p className="mb-2 !text-sm">Thirupathy</p>
                <p>27%</p>
              </div>
              <Line percent={25} strokeWidth={3} strokeColor="#D3D3D3" />
            </th>
            <td className=" px-10 py-2">
              <h5>₹. 55000</h5>
            </td>
          </tr>
          <tr className="bg-white border-b border-gray-200 hover:bg-gray-50">
            <th
              scope="row"
              className="py-2 font-semibold text-gray-600 whitespace-nowrap"
            >
              <div className="flex items-center justify-between">
                <p className="mb-2 !text-sm">Thirupathy</p>
                <p>27%</p>
              </div>
              <Line percent={25} strokeWidth={3} strokeColor="#D3D3D3" />
            </th>
            <td className=" px-10 py-2">
              <h5>₹. 55000</h5>
            </td>
          </tr>
          <tr className="bg-white border-b border-gray-200 hover:bg-gray-50">
            <th
              scope="row"
              className="py-2 font-semibold text-gray-600 whitespace-nowrap"
            >
              <div className="flex items-center justify-between">
                <p className="mb-2 !text-sm">Thirupathy</p>
                <p>27%</p>
              </div>
              <Line percent={25} strokeWidth={3} strokeColor="#D3D3D3" />
            </th>
            <td className=" px-10 py-2">
              <h5>₹. 55000</h5>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InvestmentTable;
