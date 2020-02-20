import React from "react";
import "./DataTile.css";

function DataTile(props) {
  return (
    <div className="data-tile">
      <div className="data-tile-box">
        <h3>{props.title}</h3>
        <p>{props.total}</p>
      </div>
    </div>
  );
}

export default DataTile;
