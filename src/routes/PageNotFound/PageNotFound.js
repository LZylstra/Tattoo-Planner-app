import React, { Component } from "react";
import "./PageNotFound.css";

export default class NotFoundPage extends Component {
  render() {
    return (
      <div className="notFound">
        <h2>404 - Page not found</h2>
        <p>Try going back to your previous page.</p>
      </div>
    );
  }
}
