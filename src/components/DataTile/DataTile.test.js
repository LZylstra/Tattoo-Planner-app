import React from "react";
import ReactDOM from "react-dom";
import DataTile from "./DataTile";

describe(`DataTile component`, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<DataTile />, div);

    ReactDOM.unmountComponentAtNode(div);
  });
});
