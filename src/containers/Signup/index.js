import React from "react";
import Header from "../../components/Header";
import backgroundImage from "../../images/login-signup.jpeg";
import { useFormik } from "formik";
import SignupHandler from "./SignupHandler";
import SignupForm from "./SignupForm";
import { Redirect } from "react-router-dom";

const Signup = () => {
  const {
    initialValues,
    validationSchema,
    handleSubmit,
    status,
  } = SignupHandler();
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
        titlle="Sign Up"
        slogan="Join Us"
      />

      <SignupForm formik={formik} />

      <hr />
    </div>
  );
};

export default Signup;
