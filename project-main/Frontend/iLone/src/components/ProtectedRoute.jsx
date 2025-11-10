import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // const token = localStorage.getItem("token");
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  // If no token found, redirect to login page
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // If token exists, render the requested page
  return children;
};

export default ProtectedRoute;
