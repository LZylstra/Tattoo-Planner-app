import React from "react";
import "./Icon.css";

function Icon(props) {
  return (
    <div className="icon">
      <div className="box">
        <img src={props.picture} alt="icon" />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Icon;
