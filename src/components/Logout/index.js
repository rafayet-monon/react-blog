import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { SuccessNotification } from "../Notification";

const Logout = () => {
  const { dispatch } = useContext(AuthContext);
  dispatch({ type: "LOGOUT" });
  SuccessNotification("Logged Out Successfully");

  return <Redirect to={"/"} />;
};

export default Logout;
