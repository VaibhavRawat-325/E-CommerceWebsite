import { useContext } from "react";
import Alert from "./Alert";
import { AlertContext } from "./Context";

function Alerts() {
  const { alerts, removeAlert } = useContext(AlertContext);

  return (
    <div className="flex-col flex-wrap">
      {alerts.map((a) => (
        <Alert key={a.id} alert={a} removeAlert={removeAlert} />
      ))}
    </div>
  );
}

export default Alerts;
