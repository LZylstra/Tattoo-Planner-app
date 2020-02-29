import React from "react";
import ReactDOM from "react-dom";
import Tile from "./Tile";
import { BrowserRouter } from "react-router-dom";

describe.skip(`Tile component`, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <Tile />
      </BrowserRouter>,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });
});
