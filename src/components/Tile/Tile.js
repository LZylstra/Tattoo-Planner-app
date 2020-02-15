import React from "react";
import "./Tile.css";

function Tile(props) {
  return (
    <div className="tile">
      <div className="inner">
        <img src="https://via.placeholder.com/250x150" alt="preview" />
        <h3>{props.line1}</h3>
        <h4>{props.line2}</h4>
      </div>
    </div>
  );
}

export default Tile;
