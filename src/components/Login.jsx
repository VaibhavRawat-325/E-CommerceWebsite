import React from "react";
import FormikInput from "./FormikInput";
import Button from "./Button";
import Alerts from "./Alerts";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import AlertContext from "./AlertContext";
import { useContext } from "react";

function Login() {
  const { showAlert } = useContext(AlertContext);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email(),
    password: Yup.string().required().min(8).max(10),
  });

  const onSubmit = ({ email, password }) => {
    console.log("calling API with data", email, password);
    showAlert("login successfull");
  };

  return (
    <div className="flex justify-center">
      <Alerts />
      <div className="h-screen flex justify-center items-center">
        <Formik
          onSubmit={onSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <Form className="flex flex-col gap-5 bg-gray-100 px-10 py-10">
            <FormikInput
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="email address"
              required
            ></FormikInput>

            <FormikInput
              id="password"
              name="password"
              type="password"
              autoComplete="email"
              placeholder="password"
              required
            ></FormikInput>

            <Button type="submit">Login</Button>
            <Button type="button" theme="secondary">
              Cancel
            </Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Login;
