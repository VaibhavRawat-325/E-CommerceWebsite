import React, { useContext } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormikInput from "./FormikInput";
import Button from "./Button";
import { callSigninApi } from "./Api";
import { NavLink } from "react-router-dom";
import { AlertContext, UserContext } from "./Context";
import Alerts from "./Alerts";

function SignUp() {
  const { setUser } = useContext(UserContext);
  const { showAlert } = useContext(AlertContext);

  const initialValues = {
    fullName: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required(),
    email: Yup.string().required().email(),
    password: Yup.string().required().min(8).max(10),
  });

  const onSubmit = (values) => {
    callSigninApi({ values, setUser, showAlert });
  };
  return (
    <div className="flex justify-center">
      <div className="h-screen flex flex-col justify-center items-center">
        <Alerts />

        <Formik
          onSubmit={onSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <Form className="flex flex-col gap-5 bg-gray-100 px-10 py-10 border border-gray-300 shadow-md">
            <FormikInput
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="fullName"
              placeholder="full name"
              required
            ></FormikInput>

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

            <Button type="submit">Sign In</Button>
            <Button type="button" theme="secondary">
              Cancel
            </Button>

            <div className="flex">
              <h1>Have an account?</h1>
              <NavLink to="/login" className="underline ml-1">
                LOGIN
              </NavLink>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default SignUp;
