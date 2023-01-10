import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./Context";

function Home() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <div>welcome {user.full_name}</div>;
}

export default Home;
