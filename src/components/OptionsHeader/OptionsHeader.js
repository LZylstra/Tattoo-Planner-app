import React from "react";
// import { Button } from "../../utils/utils";
import "./OptionsHeader.css";

function OptionsHeader(props) {
  return (
    <div className="options-header">
      <h2>{props.title}</h2>
      {/* <Button className="add-btn">Add {props.type}</Button> */}
      <input type="text" placeholder="Search.."></input>
    </div>
  );
}

export default OptionsHeader;
