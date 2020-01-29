import React from "react";
import LandingPage from "./routes/LandingPage";
import Home from "./routes/Home";
import "./App.css";
import { AuthProvider } from "./auth/Auth";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={Home} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
