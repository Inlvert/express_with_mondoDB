import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { login } from "../../redux/slices/authSlice";

const LOGIN_SCHEMA = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const initialValues = {
  email: "",
  password: "",
};

function LoginForm(props) {
  const dispatch = useDispatch();


  const hendleSubmit = (values, formikbag) => {
    dispatch(login(values));

    formikbag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={hendleSubmit}
      validationSchema={LOGIN_SCHEMA}
    >
      <Form>
        <Field name="email" type="email" placeholder="email" />
        <Field name="password" type="password" placeholder="password" />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
}

export default LoginForm;
