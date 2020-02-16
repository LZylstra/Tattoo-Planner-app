import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";

export default class Login extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/home";
    history.push(destination);
  };

  render() {
    return (
      <div className="LoginPage">
        <h2>Login</h2>
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </div>
    );
  }
}
