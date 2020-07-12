import React, { useState, useContext } from "react";
import Header from "../../components/Header";
import backgroundImage from "../../images/login-signup.jpeg";
import Api from "../../utils/Api";
import { AuthContext } from "../../App";
import { Redirect } from "react-router-dom";

const Login = () => {
  const { dispatch } = useContext(AuthContext);

  const initialState = {
    email: "",
    password: "",
    isSubmitting: false,
    errorMessage: null,
    success: false,
  };
  const [data, setData] = useState(initialState);
  const handleInputChange = (event) => {
    console.log(event.target.name);
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setData({ ...data, isSubmitting: true });
    try {
      Api.post("api/v1/users/login", {
        user: {
          email: data.email,
          password: data.password,
        },
      })
        .then(function (response) {
          if (response.status === 200) {
            return response.data;
          }
          throw response;
        })
        .then((resData) => {
          dispatch({
            type: "LOGIN",
            payload: resData.data,
          });
          console.log("here");
          setData({ ...data, success: true });
        });
    } catch (e) {
      console.log(`Request failed: ${e}`);
    }
  };

  if (data.success) {
    return <Redirect to={"/"}/>
  }

  return (
    <div>
      <Header
        backgroundImage={backgroundImage}
        titlle="Log In"
        slogan="Welcome Again!"
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <form name="userLogin" id="LoginForm" onSubmit={handleFormSubmit}>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    id="email"
                    required
                    data-validation-required-message="Please enter your email."
                    name="email"
                    value={data.email}
                    onChange={handleInputChange}
                  />
                  {/*<p className="help-block text-danger"></p> */}
                </div>
              </div>
              <div className="control-group">
                <div className="form-group col-xs-12 floating-label-form-group controls">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    id="password"
                    required
                    data-validation-required-message="Please type a password."
                    name="password"
                    value={data.password}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <br />
              {data.errorMessage && (
                <span className="help-block text-danger">
                  {data.errorMessage}
                </span>
              )}
              <button
                type="submit"
                className="btn btn-primary"
                id="sendMessageButton"
                disabled={data.isSubmitting}
              >
                {data.isSubmitting ? "Loading..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default Login;
