import React, { Component } from "react";
import { Link } from "react-router-dom";
import financialIcon from "../../img/financial-icon.png";
import clientIcon from "../../img/client-icon.png";
import tattooIcon from "../../img/tattoo-icon.png";
import calendarIcon from "../../img/calendar-icon.png";
import TokenService from "../../services/token-service";
import "./Header.css";

export default class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
  };

  renderLogoutLink() {
    // console.log("render logged in");
    return (
      <div className="Header_logged-in">
        <Link className="menu-icon" to="/client-list">
          <img src={clientIcon} alt="clients" width="40" />
        </Link>
        <Link className="menu-icon" to="/ledger">
          <img src={financialIcon} alt="ledger" width="40" />
        </Link>
        <Link className="menu-icon" to="/tattoo-list">
          <img src={tattooIcon} alt="tattoos" width="40" />
        </Link>
        {/* <Link className="menu-icon" to="/home">
          <img src={calendarIcon} alt="tattoos" width="40" />
        </Link> */}
        <Link onClick={this.handleLogoutClick} to="/">
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    //  console.log(" render logged out");
    return (
      <div className="Header_not-logged-in">
        <Link className="menu-item" to="/register">
          Register
        </Link>
        <Link className="menu-item" to="/login">
          Log in
        </Link>
      </div>
    );
  }

  render() {
    return (
      <nav className="Header">
        <h1>
          <Link to="/"> Tattoo Planner </Link>
        </h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    );
  }
}
