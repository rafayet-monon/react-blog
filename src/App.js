import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import RouteList from "./routes";
import ScrollToTop from "./routes/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <AuthProvider>
          <div className="App Fade">
            <Navbar />
            <RouteList />
            <Footer />
          </div>
        </AuthProvider>
      </ScrollToTop>
    </Router>
  );
}

export default App;
