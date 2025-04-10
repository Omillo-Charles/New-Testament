import React, { useState } from "react";
import History from '../Contents/History'
import "./OurChurch.css";
import Default from "../Contents/Default";

const OurChurch = () => {
  const [activeComponent, setActiveComponent] = useState("default");
  const [showButtons, setShowButtons] = useState(false);

  const renderComponent = () => {
    switch (activeComponent) {
      case "one": return <History />;
      case "two": return <h1>CHURCH ADMINISTRATION.</h1>;
      case "three": return <h1>CHURCH CONSTITUTION.</h1>;
      case "four": return <h1>ARTICLES OF FAITH.</h1>
      default: return <Default />;
    }
  };

  return (
    <div className="layout">
      {/* Mobile header */}
      <div className="mobile-header">
        <h2>OUR CHURCH.</h2>
        <button className="settings-icon" onClick={() => setShowButtons(!showButtons)}>☰</button>
      </div>

      {/* Buttons sidebar */}
      <div className={`sidebar ${showButtons ? "show" : ""}`} id="scrollable">
        <button onClick={() => { setActiveComponent("one"); setShowButtons(false); }}>HISTORY OF <br />THE CHURCH.</button>
        <button onClick={() => { setActiveComponent("two"); setShowButtons(false); }}>CHURCH <br />ADMINISTRATION.</button>
        <button onClick={() => { setActiveComponent("three"); setShowButtons(false); }}>CHURCH <br />CONSTITUTION.</button>
        <button onClick={() => { setActiveComponent("four"); setShowButtons(false); }}>ARTICLES <br />OF FAITH.</button>
      </div>

      {/* Content area */}
      <div className="main-content" id="scrollable">
        {renderComponent()}
      </div>
    </div>
  );
};

export default OurChurch;
