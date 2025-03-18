import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import CSS

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Track. Reduce. Sustain - Your Carbon Journey Starts Here</h1>
      <Link to="/carbon-info">
      <button className="begin-button">Begin Here</button>
</Link>
    </div>
  );
};

export default Home;
