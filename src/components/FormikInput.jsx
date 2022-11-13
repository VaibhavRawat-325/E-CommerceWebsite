import { useField } from "formik";
import React from "react";
import Input from "./Input";

function FormikInput({ name, ...rest }) {
  const [field, meta] = useField(name);

  return <Input name={name} {...field} {...meta} {...rest} />;
}

export default FormikInput;
