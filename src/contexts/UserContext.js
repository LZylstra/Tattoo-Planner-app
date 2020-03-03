import React, { Component } from "react";

const UserContext = React.createContext({
  user: null,
  error: null,
  setError: () => {},
  clearError: () => {},
  setUser: () => {},
  clearUser: () => {}
});
export default UserContext;

export class UserProvider extends Component {
  state = {
    user: null,
    error: null
  };

  setUser = user => {
    this.setState({ user });
    console.log(this.state.user);
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  clearUser = () => {
    this.setUser(null);
  };

  render() {
    const valueData = {
      user: this.state.user,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setUser: this.setUser,
      clearUser: this.clearUser
    };
    return (
      <UserContext.Provider value={valueData}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
