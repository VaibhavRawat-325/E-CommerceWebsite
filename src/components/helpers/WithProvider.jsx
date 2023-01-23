import React, { useContext } from "react";

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

//a super HOC which makes HOC to provide context data
