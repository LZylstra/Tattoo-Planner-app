import React from "react";
import ReactDOM from "react-dom";
import Tile from "./Tile";
import { BrowserRouter } from "react-router-dom";
import TattooContext from "../../contexts/TattooContext";

describe(`Tile component`, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    const props = {
      history: {
        push: () => {}
      },
      onDeleteSucess: () => {}
    };
    ReactDOM.render(
      <Tile {...props} />,

      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });
});
