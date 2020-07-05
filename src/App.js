import React from "react";
import "./App.scss";
import Home from "./containers/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./containers/Contact";
import AboutMe from "./containers/AboutMe";
import BlogDetail from "./components/BlogDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={AboutMe} />
        <Route path="/blog-detail" component={BlogDetail} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
