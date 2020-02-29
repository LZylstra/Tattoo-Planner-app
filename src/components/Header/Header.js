import React, { Component } from "react";
import { Link } from "react-router-dom";
// import financialIcon from "../../img/financial-icon.png";
// import clientIcon from "../../img/client-icon.png";
// import tattooIcon from "../../img/tattoo-icon.png";
//import calendarIcon from "../../img/calendar-icon.png";
import TokenService from "../../services/token-service";
import HeaderContext from "../../contexts/HeaderContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false //this.props.isLoggedIn
    };
  }

  static contextType = HeaderContext;

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.updateLoggedIn(false);
    // this.props.updateLogin(false);
    // this.context.clearLoggedIn();
    // this.props.updateLogin(false);
    //this.setState({ isLoggedIn: false });
  };
  // handleLoginClick = () => {
  //   console.log("handle loginclick");
  //   this.setState({ isLoggedIn: true });
  // };
  updateLoggedIn = LoggedIn => {
    this.setState({ isLoggedIn: LoggedIn });
  };

  renderLogoutLink() {
    // console.log("render logged in");
    return (
      <div className="Header_logged-in">
        <Link className="menu-icon" to="/clients">
          {/* <img src={clientIcon} alt="clients" width="40" /> */}
          Clients
          <FontAwesomeIcon icon="caret-down" />
        </Link>
        <Link className="menu-icon" to="/ledger">
          {/* <img src={financialIcon} alt="ledger" width="40" /> */}
          Ledger
          <FontAwesomeIcon icon="caret-down" />
        </Link>
        <Link className="menu-icon" to="/tattoos">
          {/* <img src={tattooIcon} alt="tattoos" width="40" /> */}
          Tattoos
          <FontAwesomeIcon icon="caret-down" />
        </Link>
        <Link className="menu-icon" to="/home">
          {/* <img src={calendarIcon} alt="tattoos" width="40" /> */}
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
    // console.log(" render logged out");

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
        <Link className="menu-item" onClick={this.handleLogoutClick} to="/">
          Temp Logout
        </Link>
      </div>
    );
  }

  checkLoggedIn() {
    // console.log("it ran");
    if (TokenService.hasAuthToken()) {
      // console.log("auth serv is logged in");
      return this.setState({ isLoggedIn: true });
    } else {
      // console.log("auth serv not logged in");
      return this.setState({ isLoggedIn: false });
    }
  }
  // componentDidUpdate() {
  //   this.checkLoggedIn();
  // }
  render() {
    let { isLoggedIn } = this.state;
    //console.log(isLoggedIn);
    return (
      <nav className="Header">
        <h1>
          <Link id="app-name" to="/">
            {" "}
            Tattoo Task Tracker{" "}
          </Link>
        </h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
        {/* {isLoggedIn ? this.renderLogoutLink() : this.renderLoginLink()} */}
      </nav>
    );
  }
}
