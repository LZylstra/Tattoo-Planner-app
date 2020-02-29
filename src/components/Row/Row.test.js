import React from "react";
import ReactDOM from "react-dom";
import Row from "./Row";
import { BrowserRouter } from "react-router-dom";

describe.skip(`Row component`, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <Row />
      </BrowserRouter>,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });
});
