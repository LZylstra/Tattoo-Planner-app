import React from "react";
import "./Icon.css";

function Icon(props) {
  return (
    <div className="icon">
      <div className="box">
        <img src="https://via.placeholder.com/100" alt="icon" />
        <h3>{props.title}</h3>
      </div>
    </div>
  );
}

export default Icon;
