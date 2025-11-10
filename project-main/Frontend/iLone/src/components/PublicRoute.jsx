import React from "react";
import { Navigate } from "react-router-dom";

function PublicRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  // If already logged in → redirect to profile
  if (isLoggedIn) {
    return <Navigate to="/profile" replace />;
  }

  return children;
}

export default PublicRoute;
