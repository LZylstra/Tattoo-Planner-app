import React from "react";
import "./Row.css";

function Row(props) {
  return (
    <div className="row">
      <div className="inner-row">
        <img src="https://via.placeholder.com/100" alt="client" />
        <h3 className="row-text">{props.client}</h3>
        <p className="row-text">{props.tattoo}</p>
        <p className="row-text">{props.label}</p>
        <div className="date-box">
          <p className="date">{props.date}</p>
        </div>
      </div>
    </div>
  );
}

export default Row;
