import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 
import logo from "../assets/SUSTAINA.jpg"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="SustainaSphere" />
        <h1>SustainaSphere</h1>
      </div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
      </div>

    </nav>
  );
};

export default Navbar;
