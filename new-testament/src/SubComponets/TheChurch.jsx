import React, { useState } from "react";
import './TheChurch.css'
import TheDefault from "../Contents/TheDefault";

const OurChurch = () => {
  const [activeComponent, setActiveComponent] = useState("default");
  const [showButtons, setShowButtons] = useState(false);

  const renderComponent = () => {
    switch (activeComponent) {
      case "one": return <h1>CLERGY.</h1>;
      case "two": return <h1>BRETHREN</h1>;
      case "three": return <h1>THE YOUTH</h1>;
      case "four": return <h1>SUNDAY SCHOOL.</h1>
      default: return <TheDefault />
    }
  };

  return (
    <div className="layout">
      {/* Mobile header */}
      <div className="mobile-header">
        <h2>THE CHURCH.</h2>
        <button className="settings-icon" onClick={() => setShowButtons(!showButtons)}>☰</button>
      </div>

      {/* Buttons sidebar */}
      <div className={`sidebar ${showButtons ? "show" : ""}`} id="scrollable">
        <button onClick={() => { setActiveComponent("one"); setShowButtons(false); }}>CLERGY.</button>
        <button onClick={() => { setActiveComponent("two"); setShowButtons(false); }}>BRETHREN.</button>
        <button onClick={() => { setActiveComponent("three"); setShowButtons(false); }}>THE YOUTH.</button>
        <button onClick={() => { setActiveComponent("four"); setShowButtons(false); }}>SUNDAY SHOOL.</button>
      </div>

      {/* Content area */}
      <div className="main-content" id="scrollable">
        {renderComponent()}
      </div>
    </div>
  );
};

export default OurChurch;
