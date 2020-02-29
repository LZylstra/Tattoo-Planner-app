import React from "react";
import ReactDOM from "react-dom";
import ClientForm from "./ClientForm";

describe(`ClientForm component`, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ClientForm />, div);

    ReactDOM.unmountComponentAtNode(div);
  });
});
