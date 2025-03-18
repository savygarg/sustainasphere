import React from "react";
import { Link } from "react-router-dom";
import "../components/CarbonInfo.css";

const CarbonInfo = () => {
  return (
    <div className="carbon-info-container">
      <div className="carbon-info-card">
        <h1 className="carbon-title">Knowing the Carbon Footprint</h1>
        <p className="carbon-text">
          The total amount of greenhouse gas (GHG) emissions produced by a person, group, activity, or product is known as their "carbon footprint."
          Taking into account gases such as carbon dioxide (CO₂), methane (CH₄), and nitrous oxide (N₂O), these emissions are expressed in carbon
          dioxide equivalent (CO₂e). Our carbon footprint is increased by routine actions including eating, driving, and using energy.
          Combating climate change requires measuring and lowering these emissions.
        </p>
        
        <h2 className="carbon-subtitle">Breaking Down Carbon Footprint Sources</h2>
        
        <p className="carbon-text">Carbon emissions come from various direct and indirect sources, categorized into three scopes:</p>
        <br></br>
        <div className="scopes">
        <div className = "carbon-cards">
        <ul className="carbon-list">
           <strong className="points">Direct Emissions (Scope 1) - The Pollution We Control</strong>
          <p className="carbon-text">These emissions come directly from activities under an individual's or organization's control.</p>
          <li><i className="fa-solid fa-car"></i> Burning fuel in personal vehicles</li><br></br>
          <li><i className="fa-solid fa-fire"></i> Gas heating in homes and offices</li><br></br>
          <li><i className="fa-solid fa-industry"></i> Industrial emissions from factories</li><br></br>
</ul>
</div>
<div className = "carbon-cards">
        <ul className="carbon-list">
          <strong className = "points">Indirect Energy Emissions (Scope 2) - The Power We Use</strong><br></br>
          <p className="carbon-text">These are emissions from purchased energy like electricity, heating, or cooling.</p>
          <li><i className="fa-solid fa-plug"></i> Fossil fuel-based electricity generation</li><br></br>
          <li><i className="fa-solid fa-battery-full"></i> Power plants producing energy for homes and industries</li><br></br>
          </ul>
          </div>
          <div className = "carbon-cards">
        <ul className="carbon-list">
           <strong className="points">Supply Chain & Lifestyle Emissions (Scope 3) - The Hidden Impact</strong>
          <p className="carbon-text">These emissions occur from the entire lifecycle of products and services we consume.</p>
          <li><i className="fa-solid fa-box"></i> Manufacturing, packaging, and transportation of goods</li><br></br>
          <li><i className="fa-solid fa-plane"></i> Air travel, public transport, and freight shipping</li><br></br>
          <li><i className="fa-solid fa-seedling"></i> Agriculture, deforestation, and waste management</li><br></br>
        </ul>
</div>
</div> <br></br><br></br><br></br>
<div className = "second">
<div className = "carbon-cards2">
        <h2 className="carbon-subtitle">How to Measure Your Carbon Footprint</h2>
        <ul className="carbon-list">
          <li><i className="fa-solid fa-calculator"></i> Online Carbon Calculators</li><br></br>
          <li><i className="fa-solid fa-recycle"></i> Life Cycle Assessments (LCA) - Evaluates emissions across a product's entire lifespan.</li><br></br>
          <li><i className="fa-solid fa-chart-line"></i> Carbon Accounting - Used by businesses to track and reduce their environmental impact.</li>
        </ul>
</div>
<div className = "carbon-cards2">
        <h2 className="carbon-subtitle">Why Does It Matter?</h2>
        <p className="carbon-text">
          Reducing your carbon footprint helps combat climate change, conserves natural 
          resources, and ensures a sustainable future. Small actions like using renewable 
          energy, driving less, and eating sustainably can make a big difference.
        </p>
</div>
</div>
<br></br><br></br>
<div className = "third">
<div className = "carbon-cards3">
        <h2 className="carbon-subtitle">Simple Ways to Reduce Your Carbon Footprint</h2>
        <ul className="carbon-list">
          <li><i className="fa-solid fa-home"></i> <strong>At Home</strong></li><br></br>
          <li><i className="fa-solid fa-lightbulb"></i> Switch to LED bulbs and energy-efficient appliances</li><br></br>
          <li><i className="fa-solid fa-temperature-high"></i> Use smart thermostats to save electricity</li><br></br>
          <li><i className="fa-solid fa-power-off"></i> Unplug electronics when not in use</li><br></br>

          <li><i className="fa-solid fa-bus"></i> <strong>Transportation Choices</strong></li><br></br>
          <li><i className="fa-solid fa-walking"></i> Walk, bike, or use public transport instead of driving</li><br></br>
          <li><i className="fa-solid fa-car-side"></i> Choose electric or hybrid vehicles over fuel-powered cars</li><br></br>

          <li><i className="fa-solid fa-utensils"></i> <strong>Sustainable Eating Habits</strong></li><br></br>
          <li><i className="fa-solid fa-leaf"></i> Reduce meat and dairy intake, especially beef and lamb</li><br></br>
          <li><i className="fa-solid fa-apple-alt"></i> Support local and organic food sources</li><br></br>

          <li><i className="fa-solid fa-shopping-bag"></i> <strong>Eco-Friendly Shopping</strong></li><br></br>
          <li><i className="fa-solid fa-shopping-cart"></i> Buy sustainable and durable products</li><br></br>
          <li><i className="fa-solid fa-hand-holding-heart"></i> Support brands committed to sustainability</li>
        </ul>
</div>
<div className = "carbon-cards4">
        <h2 className="carbon-subtitle">How to Reduce Your Carbon Footprint?</h2>
        <ul className="carbon-list">
          <li><i className="fa-solid fa-train"></i> Use public transport, bike, or walk instead of driving.</li><br></br>
          <li><i className="fa-solid fa-bolt"></i> Switch to energy-efficient appliances & LED lights.</li><br></br>
          <li><i className="fa-solid fa-seedling"></i> Eat more plant-based meals and reduce food waste.</li><br></br>
          <li><i className="fa-solid fa-solar-panel"></i> Opt for renewable energy sources when possible.</li><br></br>
          <li><i className="fa-solid fa-recycle"></i> Reduce, reuse, and recycle to minimize waste.</li>
        </ul>
</div>
</div>
        <Link to="/calculator" className="no-underline">
  <button className="carbon-button">
    <i className="fa-solid fa-calculator"></i> Try the Calculator ➜
  </button>
</Link>
      </div>
    </div>
  );
};

export default CarbonInfo;
