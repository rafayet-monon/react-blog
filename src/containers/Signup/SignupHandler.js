import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import * as Yup from "yup";
import Api from "../../utils/Api";
import {
  ErrorNotification,
  SuccessNotification,
} from "../../components/Notification";

const SignupHandler = () => {
  const [status, setStatus] = useState(false);
  const { dispatch } = useContext(AuthContext);

  const initialValues = {
    email: "",
    username: "",
    password: "",
    password_confirmation: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    username: Yup.string()
      .min(4, "Must be more than 4 characters")
      .max(16, "Must be more than 4 characters")
      .required("Required"),
    password: Yup.string()
      .min(6, "Must be more than 6 characters")
      .required("Required"),
    password_confirmation: Yup.string()
      .min(6, "Must be more than 6 characters")
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  const handleSubmit = async (values) => {
    try {
      await Api.post("api/v1/users/signup", {
        user: {
          email: values.email,
          username: values.username,
          password: values.password,
          password_confirmation: values.password_confirmation,
        },
      })
        .then(function (response) {
          if (response.status === 200) {
            SuccessNotification("Successfully Signed Up!");
            setStatus(true);

            return response.data;
          }
        })
        .then((resData) => {
          dispatch({
            type: "AUTH",
            payload: resData.data,
          });
        });
    } catch (error) {
      if (error.response) {
        let error_response = error.response.data.errors;
        ErrorNotification(error_response.title);
      } else {
        ErrorNotification(`Request failed: ${error}`);
      }
    }
  };

  return {
    initialValues,
    validationSchema,
    handleSubmit,
    status,
  };
};

export default SignupHandler;
