import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CarbonCalculator from "./components/CarbonCalculator";
import CarbonInfo from "./components/CarbonInfo";
import Navbar from "./components/Navbar"; // Ensure Navbar is imported

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar appears on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carbon-info" element={<CarbonInfo />} />
        <Route path="/calculator" element={<CarbonCalculator />} />
      </Routes>
    </Router>
  );
}

export default App;
