import React, { Component } from "react";

const TattooListContext = React.createContext({
  TattooList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setTattooList: () => {}
});
export default TattooListContext;

export class TattooListProvider extends Component {
  state = {
    TattooList: [],
    error: null
  };

  setTattooList = tattooList => {
    // console.log({ tattooList });
    this.setState({ tattooList });
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  render() {
    const value = {
      tattooList: this.state.tattooList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setTattooList: this.setTattooList
    };
    return (
      <TattooListContext.Provider value={value}>
        {this.props.children}
      </TattooListContext.Provider>
    );
  }
}
