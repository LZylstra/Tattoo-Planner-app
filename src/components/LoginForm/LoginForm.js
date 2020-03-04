import React, { Component } from "react";
import TokenService from "../../services/token-service";
import { Button, Input } from "../../utils/utils";
import AuthApiService from "../../services/auth-api-service";
//import HeaderContext from "../../contexts/HeaderContext";
import AllContext from "../../contexts/AllContext";

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  state = { error: null };

  static contextType = AllContext;

  // handleSubmitBasicAuth = ev => {
  //   ev.preventDefault();
  //   const { user_name, password } = ev.target;

  //   TokenService.saveAuthToken(
  //     TokenService.makeBasicAuthToken(user_name.value, password.value)
  //   );

  //   user_name.value = "";
  //   password.value = "";
  //   this.props.onLoginSuccess();
  // };

  handleSubmitJwtAuth = ev => {
    ev.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = ev.target;

    // console.log(user_name.value);
    // TokenService.saveUserId(user_name.value);

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then(res => {
        user_name.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        TokenService.saveUserId(res.user_id); // SAVE USER ID
        // AuthApiService.getUser(user_name.value).then(this.context.setUser);
        this.props.onLoginSuccess();

        //  this.props.updateLogin(true);
        //this.context.setLoggedIn();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });

    //AuthApiService.getUser(user_name.value).then(this.context.setUser);
  };

  render() {
    const { error } = this.state;
    return (
      <form className="LoginForm" onSubmit={this.handleSubmitJwtAuth}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="user_name">
          <label htmlFor="LoginForm__user_name">User name</label>
          <Input required name="user_name" id="LoginForm__user_name"></Input>
        </div>
        <div className="password">
          <label htmlFor="LoginForm__password">Password</label>
          <Input
            required
            name="password"
            type="password"
            id="LoginForm__password"
          ></Input>
        </div>
        <Button type="submit">Login</Button>
      </form>
    );
  }
}
