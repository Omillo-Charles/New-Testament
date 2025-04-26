import React, { useState } from "react";
import History from "../Contents/History";
import Default from "../Contents/Default";
import "./OurChurch.css";

const OurChurch = () => {
  const [activeComponent, setActiveComponent] = useState("default");

  const renderComponent = () => {
    switch (activeComponent) {
      case "one":
        return <History />;
      case "two":
        return <h1>CHURCH ADMINISTRATION.</h1>;
      case "three":
        return <h1>CHURCH CONSTITUTION.</h1>;
      case "four":
        return <h1>ARTICLES OF FAITH.</h1>;
      default:
        return <Default />;
    }
  };

  return (
    <div className="our-church-container">
      <h2 className="our-church-heading">OUR CHURCH.</h2>

      {/* Scrollable Navigation Menu */}
      <div className="our-church-nav-wrapper">
        <div className="our-church-nav">
          <button onClick={() => setActiveComponent("one")}>
            History
          </button>
          <button onClick={() => setActiveComponent("two")}>
            Administration
          </button>
          <button onClick={() => setActiveComponent("three")}>
            Consitution
          </button>
          <button onClick={() => setActiveComponent("four")}>
            Articles Of Faith
          </button>
          {/* Add more buttons if needed */}
        </div>
      </div>

      {/* Content Area */}
      <div className="our-church-content">
        {renderComponent()}
      </div>
    </div>
  );
};

export default OurChurch;
