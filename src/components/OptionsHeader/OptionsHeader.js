import React from "react";
import "./OptionsHeader.css";

function OptionsHeader(props) {
  return (
    <div className="options-header">
      <h2>{props.title}</h2>

      {/* Future Feature for searching
       <input type="text" placeholder="Search.."></input> */}
    </div>
  );
}

export default OptionsHeader;
