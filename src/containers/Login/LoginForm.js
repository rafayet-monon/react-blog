import React from "react";
import Spinner from "../../components/Spinner";

const LoginForm = (props) => {
  const { handleSubmit, errors, isSubmitting, getFieldProps } = props.formik;

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <form name="userLogin" id="LoginForm" onSubmit={handleSubmit}>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    id="email"
                    required
                    data-validation-required-message="Please enter your email."
                    name="email"
                    {...getFieldProps("email")}
                  />
                  <p className="help-block text-danger validation-error">
                    {errors.email ? errors.email : null}
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
                    name="password"
                    {...getFieldProps("password")}
                  />
                  <p className="help-block text-danger validation-error">
                    {errors.password ? errors.password : null}
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

export default LoginForm;
