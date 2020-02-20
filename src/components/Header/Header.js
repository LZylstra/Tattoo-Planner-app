import React, { Component } from "react";
import { Link } from "react-router-dom";
import financialIcon from "../../img/financial-icon.png";
import clientIcon from "../../img/client-icon.png";
import tattooIcon from "../../img/tattoo-icon.png";
//import calendarIcon from "../../img/calendar-icon.png";
import TokenService from "../../services/token-service";
import "./Header.css";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false //this.props.isLoggedIn
    };
  }
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    // this.props.updateLogin(false);
    this.setState({ isLoggedIn: false });
  };
  handleLoginClick = () => {
    console.log("handle loginclick");
    this.setState({ isLoggedIn: true });
  };
  updateLoggedIn = LoggedIn => {
    this.setState({ isLoggedIn: LoggedIn });
  };

  renderLogoutLink() {
    console.log("render logged in");
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
    console.log(" render logged out");

    return (
      <div className="Header_not-logged-in">
        <Link className="menu-item" to="/register">
          Register
        </Link>
        <Link onClick={this.handleLoginClick} className="menu-item" to="/login">
          Log in
        </Link>
      </div>
    );
  }

  checkLoggedIn() {
    // console.log("it ran");
    if (TokenService.hasAuthToken()) {
      console.log("auth serv is logged in");
      return this.setState({ isLoggedIn: true });
    } else {
      console.log("auth serv not logged in");
      return this.setState({ isLoggedIn: false });
    }
  }
  // componentDidUpdate() {
  //   this.checkLoggedIn();
  // }
  render() {
    let { isLoggedIn } = this.state;
    return (
      <nav className="Header">
        <h1>
          <Link to="/"> Tattoo Planner </Link>
        </h1>
        {isLoggedIn ? this.renderLogoutLink() : this.renderLoginLink()}
      </nav>
    );
  }
}
