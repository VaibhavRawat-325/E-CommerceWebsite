import React from "react";
import Button from "./Button";
import WithUser from "./WithUser";

function Home({ user, setUser }) {
  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(undefined);
  };
  return (
    <div>
      <div>welcome {user.full_name}</div>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}

export default WithUser(Home);
