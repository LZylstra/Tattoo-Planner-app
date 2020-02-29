import React from "react";
import ReactDOM from "react-dom";
import TattooForm from "./TattooForm";
import { BrowserRouter } from "react-router-dom";

describe(`TattooForm component`, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <TattooForm />
      </BrowserRouter>,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });
});
