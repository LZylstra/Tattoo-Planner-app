import React from "react";
import ReactDOM from "react-dom";
import Tattoo from "./Tattoo";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrashAlt,
  faHeart as fasHeart
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { BrowserRouter } from "react-router-dom";

library.add(faTrashAlt, fasHeart, farHeart);

describe(`Tattoo component`, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <Tattoo />
      </BrowserRouter>,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });
});
