import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import RouteList from "./routes";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App Fade">
          <Navbar />
          <RouteList />
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
