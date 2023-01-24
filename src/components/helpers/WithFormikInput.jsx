import { useField } from "formik";
import React from "react";
import Input from "../Input";

function WithFormikInput({ name, ...rest }) {
  const [field, meta] = useField(name);
  const { value, onBlur, onChange } = field;
  const { error, touched } = meta;

  return (
    <Input
      name={name}
      {...rest}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      error={error}
      touched={touched}
    />
  );
}

export default WithFormikInput;
