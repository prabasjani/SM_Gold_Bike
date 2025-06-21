import React, { useState } from "react";
import Cards from "../Components/Home/Cards";
import Investment from "../Components/Admin/Investment";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("investment");
  return (
    <div className="p-5 w-full">
      <div className="">
        <h3>Admin Control</h3>

        <div className="grid grid-cols-4 gap-5 my-5">
          <Cards
            title="Total Investment"
            value={127}
            percent={75}
            color="#3B82F6"
            tabName="investment"
            activeTab={activeTab}
            onClick={() => setActiveTab("investment")}
          />
          <Cards
            title="Total Customers"
            value={127}
            percent={60}
            color="#ed8936"
            tabName="loanAmount"
            activeTab={activeTab}
            onClick={() => setActiveTab("loanAmount")}
          />
          <Cards
            title="Total Customers"
            value={127}
            percent={50}
            color="#38b2ac"
            tabName="profit"
            activeTab={activeTab}
            onClick={() => setActiveTab("profit")}
          />
          <Cards
            title="Total Customers"
            value={127}
            percent={85}
            color="#ed64a6"
            tabName="expense"
            activeTab={activeTab}
            onClick={() => setActiveTab("expense")}
          />
        </div>
      </div>

      {activeTab == "investment" && <Investment />}
    </div>
  );
};

export default Admin;
