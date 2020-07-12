import React from "react";
import Header from "../../components/Header";
import backgroundImage from "../../images/login-signup.jpeg";

const Signup = () => {
  return (
    <div>
      <Header
        backgroundImage={backgroundImage}
        titlle="Sign Up"
        slogan="Join Us"
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <form name="sentMessage" id="contactForm">
              <div className="control-group">
                <div className="form-group floating-label-form-group controls">
                  <label>Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    id="email"
                    required
                    data-validation-required-message="Please enter your email address."
                  />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    id="name"
                    required
                    data-validation-required-message="Please enter your user name."
                  />
                  <p className="help-block text-danger"></p>
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
                  />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group col-xs-12 floating-label-form-group controls">
                  <label>Password Confirmation</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password Confirmation"
                    id="password_confirmation"
                    required
                    data-validation-required-message="Please retype your password."
                  />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <br />
              <div id="success"></div>
              <button
                type="submit"
                className="btn btn-primary"
                id="sendMessageButton"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default Signup;