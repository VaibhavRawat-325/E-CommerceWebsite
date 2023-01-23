import React from "react";
import { AlertContext } from "../Context";
import { uniqueId } from "lodash";

function AlertProvider({ children }) {
  const [alerts, setAlerts] = React.useState([]);

  const removeAlert = (alert) => {
    setAlerts((latestOldAlerts) => {
      return latestOldAlerts.filter((a) => a.id !== alert.id);
    });
  };

  const showAlert = (message, type, dismiss = 4) => {
    const id = uniqueId();
    const alert = { message, type, id };
    setAlerts([...alerts, alert]);

    dismiss &&
      setTimeout(() => {
        removeAlert(alert);
      }, dismiss * 1000);
  };

  return (
    <AlertContext.Provider value={{ alerts, showAlert, removeAlert }}>
      {children}
    </AlertContext.Provider>
  );
}

export default AlertProvider;
