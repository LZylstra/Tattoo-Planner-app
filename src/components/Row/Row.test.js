import React from "react";
import ReactDOM from "react-dom";
import Row from "./Row";
import { BrowserRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faTrashAlt);

describe(`Row component`, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    const props = {
      client: {
        id: "1",
        full_name: "Test Name",
        phone: "123-456-7890"
      }
    };
    ReactDOM.render(
      <BrowserRouter>
        <Row {...props} />
      </BrowserRouter>,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });
});
