import React, { Component } from "react";

const TattooListContext = React.createContext({
  TattooList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setTattooList: () => {},
  addTattoo: () => {}
});
export default TattooListContext;

export class TattooListProvider extends Component {
  state = {
    TattooList: [],
    error: null
  };

  setTattooList = tattooList => {
    this.setState({ tattooList });
    // console.log(`goes into setTattooList ${this.state.tattooList}`);
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  addTattoo = tattoo => {
    this.setTattooList([...this.state.tattooList, tattoo]);
  };

  render() {
    // console.log("goes in context render");
    // console.log(this.state);
    const valueData = {
      tattooList: this.state.tattooList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setTattooList: this.setTattooList,
      addTattoo: this.addTattoo
    };
    return (
      <TattooListContext.Provider value={valueData}>
        {this.props.children}
      </TattooListContext.Provider>
    );
  }
}
