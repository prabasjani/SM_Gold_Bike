import React from "react";
import Cards from "../Components/Home/Cards";

import { CircleArrowUp } from "lucide-react";
import RevenueBarChart from "../Components/Home/RevenueBarChart";
import RecentCustomers from "../Components/Home/RecentCustomers";

const HomePage = () => {
  return (
    <div className="p-5 w-full">
      <div className="">
        <h3>Dashboard</h3>
        <div className="grid grid-cols-4 gap-5 my-4">
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
          <Cards
            title="Total Customers"
            value={127}
            percent={50}
            color="#38b2ac"
          />
          <Cards
            title="Total Customers"
            value={127}
            percent={85}
            color="#ed64a6"
          />
        </div>

        <div className="grid grid-cols-8 gap-5">
          <div className="col-span-5 bg-white p-6 rounded-lg">
            <h4>Total Revenue</h4>
            <div className="flex items-center gap-20 mt-6">
              <h2>₹. 245000</h2>
              <div className="flex items-center gap-3">
                <CircleArrowUp className="text-green-400" />
                <div className="">
                  <p className="!text-base !text-gray-400 font-semibold">12%</p>
                  <p>Increased by Last Month</p>
                </div>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="mt-14">
              <RevenueBarChart />
            </div>
          </div>
          <div className="col-span-3 bg-white p-6 rounded-lg">
            <h4>Recent Customers</h4>
            <p className="mb-5 mt-2">Last Recent 5 Customers</p>
            <RecentCustomers />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
