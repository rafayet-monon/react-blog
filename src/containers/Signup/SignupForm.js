import React from "react";
import Spinner from "../../components/Spinner";

const SignupForm = (props) => {
  const { handleSubmit, errors, isSubmitting, getFieldProps } = props.formik;

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <form name="sentMessage" id="contactForm" onSubmit={handleSubmit}>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    id="email"
                    required
                    data-validation-required-message="Please enter your email address."
                    {...getFieldProps("email")}
                  />
                  <p className="help-block text-danger validation-error">
                    {errors.email ? errors.email : null}
                  </p>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    id="name"
                    required
                    data-validation-required-message="Please enter your user name."
                    {...getFieldProps("username")}
                  />
                  <p className="help-block text-danger validation-error">
                    {errors.username ? errors.username : null}
                  </p>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group col-xs-12 floating-label-form-group controls">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    id="password"
                    required
                    data-validation-required-message="Please type a password."
                    {...getFieldProps("password")}
                  />
                  <p className="help-block text-danger validation-error">
                    {errors.password ? errors.password : null}
                  </p>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group col-xs-12 floating-label-form-group controls">
                  <label htmlFor="password_confirmation">
                    Password Confirmation
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password Confirmation"
                    id="password_confirmation"
                    required
                    data-validation-required-message="Please retype your password."
                    {...getFieldProps("password_confirmation")}
                  />
                  <p className="help-block text-danger validation-error">
                    {errors.password_confirmation
                      ? errors.password_confirmation
                      : null}
                  </p>
                </div>
              </div>
              <br />
              <button
                type="submit"
                className="btn btn-primary"
                id="sendMessageButton"
                disabled={isSubmitting}
              >
                {isSubmitting ? <Spinner /> : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
