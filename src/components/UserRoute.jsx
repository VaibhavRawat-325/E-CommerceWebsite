import React from "react";
import { Navigate } from "react-router-dom";
import WithUser from "./WithUser";

function UserRoute({ user, children }) {
  if (!user) {
    return <Navigate to="/login" />;
  }
  return <div>{children}</div>;
}

export default WithUser(UserRoute);

// a route to redirect un-logged-in user to login page and logged-in user to home page.
