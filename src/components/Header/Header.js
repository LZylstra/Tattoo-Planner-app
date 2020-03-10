import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import HeaderContext from "../../contexts/HeaderContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };
  }

  static contextType = HeaderContext;

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    TokenService.clearUser();
    this.updateLoggedIn(false);
  };

  updateLoggedIn = LoggedIn => {
    this.setState({ isLoggedIn: LoggedIn });
  };

  renderLogoutLink() {
    return (
      <div className="Header_logged-in">
        <Link className="menu-icon" to="/clients">
          Clients
          <FontAwesomeIcon icon="caret-down" />
        </Link>
        <Link className="menu-icon" to="/ledger">
          Ledger
          <FontAwesomeIcon icon="caret-down" />
        </Link>
        <Link className="menu-icon" to="/tattoos">
          Tattoos
          <FontAwesomeIcon icon="caret-down" />
        </Link>
        <Link className="menu-icon" to="/home">
          Calendar
          <FontAwesomeIcon icon="caret-down" />
        </Link>
        <Link className="menu-icon" onClick={this.handleLogoutClick} to="/">
          Logout
          <FontAwesomeIcon icon="caret-down" />
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Header_not-logged-in">
        <Link className="menu-item" to="/register">
          Register
          <FontAwesomeIcon icon="caret-down" />
        </Link>
        <Link className="menu-item" to="/login">
          Log in
          <FontAwesomeIcon icon="caret-down" />
        </Link>
      </div>
    );
  }

  checkLoggedIn() {
    if (TokenService.hasAuthToken()) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <nav className="Header">
        <h1>
          <Link id="app-name" to="/">
            {" "}
            Tattoo Task Tracker{" "}
          </Link>
        </h1>
        {this.checkLoggedIn()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    );
  }
}
