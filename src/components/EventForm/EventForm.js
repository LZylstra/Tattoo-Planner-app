import React, { Component } from "react";
import { Button, Input } from "../../utils/utils";

export default class EventForm extends Component {
  state = { error: null };

  handleSubmitEvent = ev => {
    console.log("handle submit event");
  };
  render() {
    const { error } = this.state;
    return (
      <form className="EventForm" onSubmit={this.handleSubmitEvent}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="title">
          <label htmlFor="EventForm_title">Title</label>
          <Input required name="title" id="ClientForm_title"></Input>
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
