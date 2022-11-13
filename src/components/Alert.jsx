import cn from "classnames";
import { MdOutlineCancel } from "react-icons/md";

export default function Alert({ alert, removeAlert }) {
  let { message, type } = alert;

  type = type || "success";

  const alertClasses = cn(
    "p-5 text-white rounded-md flex justify-between gap-20 border",
    {
      "bg-green-500 border-green-500": type === "success",
      "bg-red-500 border-red-500": type === "fail",
      "bg-yellow-500 border-yellow-500": type === "warning",
    }
  );

  return (
    <div>
      {alert && (
        <div className={alertClasses}>
          <span>{message}</span>
          <button onClick={() => removeAlert(alert)}>
            <MdOutlineCancel />
          </button>
        </div>
      )}
    </div>
  );
}
