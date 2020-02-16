import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./Login.css";

export default class Login extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  handleLoginSuccess = () => {
    console.log("handleloginsuccess");
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/home";
    console.log(destination);
    history.push(destination);
  };

  render() {
    return (
      <div className="LoginPage">
        <p>
          To log in and test it out<br></br> Username: demo<br></br> Password:
          password
        </p>
        <h2>Login</h2>
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </div>
    );
  }
}
