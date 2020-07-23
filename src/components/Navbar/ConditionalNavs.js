import React, { useContext, Fragment } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { NavLink } from "react-router-dom";

const UnauthenticaedNavs = () => {
  return (
    <Fragment>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">
          Login
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/signup">
          Sign Up
        </NavLink>
      </li>
    </Fragment>
  );
};

const AuthenticaedNavs = () => {
  return (
    <Fragment>
      <li className="nav-item">
        <NavLink className="nav-link" to="/write-blog">
          Write Blog
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/profile">
          Profile
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/logout">
          Logout
        </NavLink>
      </li>
    </Fragment>
  );
};
const ConditionalNavs = () => {
  const { state } = useContext(AuthContext);

  return state.isAuthenticated ? <AuthenticaedNavs /> : <UnauthenticaedNavs />;
};

export default ConditionalNavs;
