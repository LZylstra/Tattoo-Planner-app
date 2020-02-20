import React, { Component } from "react";
import { Button, Input } from "../../utils/utils";
import "./ClientForm.css";

export default class ClientForm extends Component {
  state = { error: null };

  handleSubmitClient = ev => {
    console.log("handle submit client");
  };

  render() {
    const { error } = this.state;
    return (
      <form className="ClientForm" onSubmit={this.handleSubmitClient}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="client_name">
          <label htmlFor="clientForm_client_name">Full Name</label>
          <Input
            required
            name="client_name"
            id="clientForm_client_name"
          ></Input>
        </div>
        <div className="phone">
          <label htmlFor="clientForm_phone">Phone Number</label>
          <Input name="phone" id="clientForm_phone"></Input>
        </div>
        <div className="email">
          <label htmlFor="clientForm_email">Email</label>
          <Input name="email" id="clientForm_email"></Input>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}
