import React, { useEffect } from "react";
import FormikInput from "./FormikInput";
import Button from "./Button";
import Alerts from "./Alerts";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { AlertContext, UserContext } from "./Context";
import { useContext } from "react";
import { callLoginApi, callUserVerificatonApi } from "./Api";
import { NavLink } from "react-router-dom";
import Loading from "./Loading";

function LogIn() {
  const { showAlert } = useContext(AlertContext);
  const { setUser } = useContext(UserContext);
  const [loading, setLoading] = React.useState(true);

  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      callUserVerificatonApi({ token, setUser, showAlert });
      setLoading(false);
    } else {
      setLoading(false);
      return showAlert(
        "Access denied bhai token leke aao 😡, you have to login first 😤",
        "fail"
      );
    }
  }, []);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email(),
    password: Yup.string().required().min(8).max(10),
  });

  const onSubmit = (values) => {
    callLoginApi({ values, setUser, showAlert });
  };

  if (loading) {
    return (
      <div className="bg-gray-200 h-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }

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

            <div className="flex">
              <h1>Need an account?</h1>
              <NavLink to="/signup" className="underline ml-1">
                SIGNUP
              </NavLink>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default LogIn;
