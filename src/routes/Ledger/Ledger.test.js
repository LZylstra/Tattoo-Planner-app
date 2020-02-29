import React from "react";
import ReactDOM from "react-dom";
import Ledger from "./Ledger";

describe(`Ledger component`, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Ledger />, div);

    ReactDOM.unmountComponentAtNode(div);
  });
});
