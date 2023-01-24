import React from "react";
import { UserContext } from "../js/Context";

function UserProvider({ children }) {
  const [user, setUser] = React.useState();
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
