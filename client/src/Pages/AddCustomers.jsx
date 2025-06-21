import React from "react";
import Cards from "../Components/Home/Cards";

const AddCustomers = () => {
  return (
    <div className="p-5 w-full">
      <div className="grid grid-cols-2 gap-5 items-center justify-between">
        <div className="col">
          <h3>Add New Customer</h3>
          <p className="mt-3">
            Add a new customer here without adding any ornaments
          </p>
        </div>
        <div className="col grid grid-cols-2 items-center gap-5">
          <Cards
            title="Total Customers"
            value={127}
            percent={75}
            color="#3B82F6"
          />
          <Cards
            title="Total Customers"
            value={127}
            percent={60}
            color="#ed8936"
          />
        </div>
      </div>

      <form className="grid grid-cols-3 gap-5 mt-5 p-5 bg-neutral-50 rounded-lg">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="customerName"
            className="text-sm text-gray-500 font-medium"
          >
            Customer Name
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
            Customer Name
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
            Customer Name
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
            Customer Name
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
            Customer Name
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
            Customer Name
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
            Customer Name
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
            Customer Name
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
            Customer Name
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
            Customer Name
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
            Customer Name
          </label>
          <input
            type="text"
            placeholder="Enter Customer Name..."
            className="px-3 py-2 text-sm rounded-lg border border-gray-300/50 focus:outline-blue-500"
          />
        </div>

        <div className="flex items-end">
          <button className="bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold uppercase py-2 rounded-lg w-full cursor-pointer">
            Add Customer
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCustomers;
