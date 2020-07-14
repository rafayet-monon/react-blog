import React, { createContext, useReducer } from "react";
import "./App.scss";
import Home from "./containers/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./containers/Contact";
import AboutMe from "./containers/AboutMe";
import BlogDetail from "./components/BlogDetail";
import Signup from "./containers/Signup";
import Login from "./containers/Login";

export const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "AUTH":
      const user = action.payload.attributes;
      const token = action.payload.attributes.token;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", JSON.stringify(token));
      return {
        ...state,
        isAuthenticated: true,
        user: user,
        token: token,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Router>
      <AuthContext.Provider
        value={{
          state,
          dispatch,
        }}
      >
        <div className="App">
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={AboutMe} />
          <Route path="/blog-detail" component={BlogDetail} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Footer />
          {}
        </div>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
