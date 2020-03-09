import React from "react";
import ReactDOM from "react-dom";
import Tile from "./Tile";
import { library } from "@fortawesome/fontawesome-svg-core";
import { BrowserRouter } from "react-router-dom";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faTrashAlt);

describe(`Tile component`, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    const props = {
      type: "Tattoo",
      tattoo: {
        id: "1",
        title: "test",
        curr_status: "Testing"
      }
    };
    ReactDOM.render(
      <BrowserRouter>
        <Tile {...props} />
      </BrowserRouter>,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });
});
