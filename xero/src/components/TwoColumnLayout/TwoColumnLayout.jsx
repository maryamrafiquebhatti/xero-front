import React from "react";
import "./TwoColumnLayout.css";

const TwoColumnLayout = ({ children }) => {
  return (
    <div className="two-column-layout">
      <div className="left-column">{children}</div>
      <div className="right-column"></div>
    </div>
  );
};

export default TwoColumnLayout;
