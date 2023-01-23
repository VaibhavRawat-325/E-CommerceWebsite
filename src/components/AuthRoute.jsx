import React from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./Context";
import WithProvider from "./HOCs/withProvider";

function AuthRoute({ user, children }) {
  if (user) {
    return <Navigate to="/" />;
  }
  return <div>{children}</div>;
}

export default WithProvider(UserContext)(AuthRoute);

// a route to redirect logged-in user to home page from login page.
