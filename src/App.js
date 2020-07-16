import React from "react";
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
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App Fade">
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={AboutMe} />
          <Route path="/blog-detail" component={BlogDetail} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
