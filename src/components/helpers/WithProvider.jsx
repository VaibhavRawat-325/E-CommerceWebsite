import React, { useContext } from "react";
import { AlertContext, CartContext, UserContext } from "../Context";

function WithProvider(contextName) {
  const MyHOC = (IncomingComponent) => {
    const OutgoingComponent = (props) => {
      const contextData = useContext(contextName);
      return <IncomingComponent {...props} {...contextData} />;
    };
    return OutgoingComponent;
  };
  return MyHOC;
}

export default WithProvider;

export const WithUser = WithProvider(UserContext);
export const WithAlert = WithProvider(AlertContext);
export const WithCart = WithProvider(CartContext);

//a super HOC which makes HOC to provide context data
