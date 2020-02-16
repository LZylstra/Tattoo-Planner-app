import React, { Component } from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

export default class Registration extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  handleRegistrationSuccess = user => {
    const { history } = this.props;
    history.push("/home");
  };

  render() {
    return (
      <div className="RegistrationPage">
        <h2>Register</h2>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </div>
    );
  }
}
