import React from "react";
import ReactDOM from "react-dom";
import OptionsHeader from "./OptionsHeader";

describe(`CptionsHeader component`, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<OptionsHeader />, div);

    ReactDOM.unmountComponentAtNode(div);
  });
});
