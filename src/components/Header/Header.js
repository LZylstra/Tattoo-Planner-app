import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <nav className="Header">
        <h1>
          <Link to="/"> Tattoo Planner </Link>
        </h1>
        <a className="links" href="">
          Log Out
        </a>
      </nav>
    );
  }
}
