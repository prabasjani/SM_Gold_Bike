import React from "react";
import { Navigate, Outlet } from "react-router";

const Protected = () => {
  const isAuth = true;
  return isAuth ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default Protected;
