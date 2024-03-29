import React from "react";
import { Navigate } from "react-router-dom";
import { WithUser } from "../helpers/WithProvider";

function AuthRoute({ user, children }) {
  if (user) {
    return <Navigate to="/" />;
  }
  return <div>{children}</div>;
}

export default WithUser(AuthRoute);

// a route to redirect logged-in user to home page from login page.
