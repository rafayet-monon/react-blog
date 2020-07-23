import React from "react";
import Header from "../../components/Header";
import backgroundImage from "../../images/login-signup.jpg";
import { Redirect } from "react-router-dom";
import { useFormik } from "formik";
import LoginHandler from "./LoginHandler";
import LoginForm from "./LoginForm";

const Login = () => {
  const {
    initialValues,
    validationSchema,
    handleSubmit,
    status,
  } = LoginHandler();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  if (status) {
    return <Redirect to={"/"} />;
  }

  return (
    <div>
      <Header
        backgroundImage={backgroundImage}
        titlle="Log In"
        slogan="Welcome Again!"
      />
      <LoginForm formik={formik} />

      <hr />
    </div>
  );
};

export default Login;
