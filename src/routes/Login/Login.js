import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./Login.css";
//import AllContext from "../../contexts/AllContext";
//import AuthApiService from "../../services/auth-api-service";

export default class Login extends Component {
  static defaultProps = {
    location: {},
    // userName: null,
    history: {
      push: () => {}
    }
  };

  // setUserName(name) {
  //   this.setState({ userName: name });
  // }

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/home";
    history.push(destination);
    //AuthApiService.getUser()
    // console.log(this.props.userName);
    this.props.history.go(0);
  };

  render() {
    return (
      <div className="LoginPage">
        <p>
          To log in and test it out<br></br> Username: demo<br></br> Password:
          password
        </p>
        <h2>Login</h2>
        <LoginForm
          setUserName={this.setUserName}
          onLoginSuccess={this.handleLoginSuccess}
        />
      </div>
    );
  }
}
