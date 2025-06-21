import React from "react";
import InvestmentTable from "./InvestmentTable";

const Investment = () => {
  return (
    <div className="grid grid-cols-7 gap-5">
      <div className="col-span-3 p-5 bg-neutral-50">
        <h4>Add Investor</h4>
        <p className="mt-3">You can add 4 investors here</p>

        <form className="mt-10 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="customerName"
              className="text-sm text-gray-500 font-medium"
            >
              Investor Name
            </label>
            <input
              type="text"
              placeholder="Enter Customer Name..."
              className="px-3 py-2 text-sm rounded-lg border border-gray-300/50 focus:outline-blue-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="customerName"
              className="text-sm text-gray-500 font-medium"
            >
              Investment Amount
            </label>
            <input
              type="number"
              placeholder="Enter Investment Amount..."
              className="px-3 py-2 text-sm rounded-lg border border-gray-300/50 focus:outline-blue-500"
            />
          </div>

          <button className="py-2 font-bold text-sm text-white uppercase cursor-pointer bg-blue-500 hover:bg-blue-600 rounded-lg ">
            Add Investor
          </button>
        </form>
      </div>
      <div className="col-span-4 p-5 bg-neutral-50">
        <h4 className="mb-5">Investor's Info</h4>

        <InvestmentTable />
      </div>
    </div>
  );
};

export default Investment;
