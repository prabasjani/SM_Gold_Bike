import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage";
import Protected from "./Utils/Protected";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Navbar from "./Components/Navs/Navbar";
import Sidebar from "./Components/Navs/Sidebar";
import AllCustomers from "./Pages/AllCustomers";
import AddCustomers from "./Pages/AddCustomers";
import Transactions from "./Pages/Transactions";
import Notifications from "./Pages/Notifications";
import Admin from "./Pages/Admin";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/login" element={<Login />} />

          <Route element={<Protected />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/customers" element={<AllCustomers />} />
            <Route path="/add-customer" element={<AddCustomers />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/admin" element={<Admin />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
