import React from "react";
import "./Row.css";

function Row(props) {
  return (
    <div className="row">
      <div className="inner-row">
        <h3>{props.client}</h3>
        <p>{props.tattoo}</p>
        <p>{props.label}</p>
        <p className="date">{props.date}</p>
      </div>
    </div>
  );
}

export default Row;
