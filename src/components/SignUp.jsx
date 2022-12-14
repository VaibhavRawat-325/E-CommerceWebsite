import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormikInput from "./FormikInput";
import Button from "./Button";
import { callSigninApi } from "./Api";

function SignUp() {
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
    console.log("name", values.fullName);
    console.log("email", values.email);
    console.log("password", values.password);
    callSigninApi(values);
  };
  return (
    <div className="flex justify-center">
      <div className="h-screen flex justify-center items-center">
        <Formik
          onSubmit={onSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <Form className="flex flex-col gap-5 bg-gray-100 px-10 py-10 border border-gray-300">
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
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default SignUp;
