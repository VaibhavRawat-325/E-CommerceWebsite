import React from "react";

function Input({ name, type, id, error, touched, ...rest }) {
  return (
    <div className="flex flex-col items-center">
      <label htmlFor={id} className="sr-only ">
        {id}
      </label>

      <input
        name={name}
        type={type || "text"}
        {...rest}
        className="block p-2 border border-gray-300 w-full rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
      />

      <div className="h-5">
        {touched && error && <span className="text-red-500">{error}</span>}
      </div>
    </div>
  );
}

export default Input;
