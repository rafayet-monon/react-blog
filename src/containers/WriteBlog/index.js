import React from "react";
import backgroundImage from "../../images/typewriter.jpeg";
import Header from "../../components/Header";
import { useFormik } from "formik";
import BlogForm from "./BlogForm";
import BlogHandler from "./BlogHandler";
import { Redirect } from "react-router-dom";

const WriteBlog = () => {
  const {
    initialValues,
    validationSchema,
    handleSubmit,
    status,
  } = BlogHandler();
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
        titlle="Write Your Heart Out"
        slogan="Publish A Blog"
      />
      <BlogForm formik={formik} />
      <hr />
    </div>
  );
};

export default WriteBlog;
