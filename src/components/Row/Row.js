import React from "react";
import "./Row.css";

function Row(props) {
  return (
    <div className="row">
      <div className="inner-row">
        <img src="https://via.placeholder.com/100" alt="client" />
        <div className="row-text">
          {" "}
          <h3 className="row-text-item">{props.client}</h3>
          <p className="row-text-item">{props.tattoo}</p>
        </div>

        <div className="date-box">
          <p className="row-text-item">{props.label}</p>
          <p className="date">{props.date}</p>
        </div>
      </div>
    </div>
  );
}

export default Row;
