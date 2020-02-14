import React from "react";
import "./Tile.css";

function Tile(props) {
  return (
    <div className="tile">
      <h3>{props.line1}</h3>
      <h4>{props.line2}</h4>
    </div>
  );
}

export default Tile;
