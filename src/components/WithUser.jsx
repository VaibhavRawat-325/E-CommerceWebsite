import { useContext } from "react";
import { UserContext } from "./Context";

function WithUser(IncomingComponent) {
  function OutcomingComponent(props) {
    const { user, setUser } = useContext(UserContext);
    return <IncomingComponent {...props} user={user} setUser={setUser} />;
  }
  return OutcomingComponent;
}

export default WithUser;

//HOC to provide "user's data" to components
