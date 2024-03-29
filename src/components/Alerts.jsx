import Alert from "./Alert";
import { WithAlert } from "./helpers/WithProvider";

function Alerts({ alerts, removeAlert }) {
  return (
    <div className="flex-col flex-wrap">
      {alerts.map((a) => (
        <Alert key={a.id} alert={a} removeAlert={removeAlert} />
      ))}
    </div>
  );
}

export default WithAlert(Alerts);
