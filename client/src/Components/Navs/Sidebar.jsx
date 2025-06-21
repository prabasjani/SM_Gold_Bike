import {
  ArrowLeftRight,
  BellRing,
  LayoutDashboard,
  LogOut,
  ShieldUser,
  UserPlus,
  Users,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const Sidebar = () => {
  return (
    <div className="w-[280px] sidebar-h bg-neutral-50 h-screen">
      <div className="px-5 py-20 flex flex-col gap-5">
        <NavLink
          to="/"
          className="flex items-center gap-3 text-base text-gray-400 hover:text-gray-600 font-semibold px-4 py-3 rounded-xl"
        >
          <LayoutDashboard /> Dashboard
        </NavLink>
        <NavLink
          to="/customers"
          className="flex items-center gap-3 text-base text-gray-400 hover:text-gray-600 font-semibold px-4 py-3 rounded-xl"
        >
          <Users /> All Customers
        </NavLink>
        <NavLink
          to="/add-customer"
          className="flex items-center gap-3 text-base text-gray-400 hover:text-gray-600 font-semibold px-4 py-3 rounded-xl"
        >
          <UserPlus /> New Customer
        </NavLink>
        <NavLink
          to="/transactions"
          className="flex items-center gap-3 text-base text-gray-400 hover:text-gray-600 font-semibold px-4 py-3 rounded-xl"
        >
          <ArrowLeftRight /> Transactions
        </NavLink>
        <NavLink
          to="/notifications"
          className="flex items-center gap-3 text-base text-gray-400 hover:text-gray-600 font-semibold px-4 py-3 rounded-xl"
        >
          <BellRing /> Notifications
        </NavLink>
        <NavLink
          to="/admin"
          className="flex items-center gap-3 text-base text-gray-400 hover:text-gray-600 font-semibold px-4 py-3 rounded-xl"
        >
          <ShieldUser /> Admin Control
        </NavLink>

        <button className="flex items-center gap-3 text-base text-gray-400 font-semibold px-4 py-3 rounded-xl hover:bg-red-500/90 hover:text-white cursor-pointer">
          <LogOut /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
