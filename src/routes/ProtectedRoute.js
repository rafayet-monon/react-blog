import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const AuthenticaedRoute = ({ component: Component, ...rest }) => {
  const { state } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        state.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        )
      }
    />
  );
};

const UnauthenticaedRoute = ({ component: Component, ...rest }) => {
  const { state } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        !state.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        )
      }
    />
  );
};

export { AuthenticaedRoute, UnauthenticaedRoute };
