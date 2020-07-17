import React from "react";
import { Switch, Route } from "react-router-dom";
import { AuthenticaedRoute, UnauthenticaedRoute } from "./ProtectedRoute";
import Home from "../containers/Home";
import Contact from "../containers/Contact";
import AboutMe from "../containers/AboutMe";
import BlogDetail from "../components/BlogDetail";
import Signup from "../containers/Signup";
import Login from "../containers/Login";
import Profile from "../containers/Profile";
import WriteBlog from "../containers/WriteBlog";
import NotFound from "../containers/ErrorPages/NotFound";
import Logout from "../components/Logout";

const RouteList = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={AboutMe} />
      <Route path="/blog-detail" component={BlogDetail} />
      <UnauthenticaedRoute path="/signup" component={Signup} />
      <UnauthenticaedRoute path="/login" component={Login} />
      <AuthenticaedRoute path="/profile" component={Profile} />
      <AuthenticaedRoute path="/write-blog" component={WriteBlog} />
      <AuthenticaedRoute path="/logout" component={Logout} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default RouteList;
