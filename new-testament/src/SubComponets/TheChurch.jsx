import React, { useState } from "react";
import './TheChurch.css';
import TheDefault from "../Contents/TheDefault";
import Clergy from "../Contents/Clergy";

const TheChurch = () => {
  const [activeComponent, setActiveComponent] = useState("default");

  const renderComponent = () => {
    switch (activeComponent) {
      case "one": return <Clergy />;
      case "two": return <h1>BRETHREN</h1>;
      case "three": return <h1>THE YOUTH</h1>;
      case "four": return <h1>SUNDAY SCHOOL.</h1>;
      default: return <TheDefault />;
    }
  };

  return (
    <div className="the-church-container">
      {/* Heading */}
      <h2 className="the-church-heading">THE CHURCH.</h2>

      {/* Navigation Menu */}
      <div className="the-church-nav-wrapper">
        <div className="the-church-nav">
          <button onClick={() => setActiveComponent("one")}>Clergy</button>
          <button onClick={() => setActiveComponent("two")}>Brethren</button>
          <button onClick={() => setActiveComponent("three")}>The Youth</button>
          <button onClick={() => setActiveComponent("four")}>Sunday School</button>
        </div>
      </div>

      {/* Content */}
      <div className="the-church-content">
        {renderComponent()}
      </div>
    </div>
  );
};

export default TheChurch;
