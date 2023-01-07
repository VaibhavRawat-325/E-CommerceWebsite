import React from "react";
import cn from "classnames";

export default function Button({ theme, icon, children, props, ...rest }) {
  const themeClass = cn(
    "text-white bg-orange-500 border-transparent hover:bg-orange-600",
    {
      "text-blue-gray-900 bg-white border-gray-300 hover:bg-blue-gray-50":
        theme === "secondary",
    }
  );

  const radiusClass = cn("rounded-md", {
    "rounded-full mt-4": theme === "highlight",
  });

  return (
    <button
      {...rest}
      className={
        "inline-flex justify-center items-center px-4 py-2 text-sm font-medium  border shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 " +
        themeClass +
        " " +
        radiusClass
      }
    >
      {icon && <span className="mr-2 text-lg -mt-1 inline-block">{icon}</span>}
      {children}
    </button>
  );
}
