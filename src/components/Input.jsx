import { useField } from "formik";
import React from "react";

function Input({ name, type, id, ...rest }) {
  const [field, meta] = useField(name);

  const { touched, error } = meta;

  return (
    <div>
      <label htmlFor={id} className="sr-only ">
        {id}
      </label>

      <input
        {...field}
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
