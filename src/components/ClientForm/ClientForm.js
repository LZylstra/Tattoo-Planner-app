import React, { Component } from "react";
import { Button, Input } from "../../utils/utils";
import ClientContext from "../../contexts/ClientContext";
import ClientApiService from "../../services/client-api-service";
import "./ClientForm.css";

export default class ClientForm extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };
  state = { error: null };

  static contextType = ClientContext;
  // NEED TO UPDATE WHEN SET UP AUTHENTICATION SO THAT ARTIST IS USER ID
  handleSubmitClient = ev => {
    ev.preventDefault();
    const newClient = {
      full_name: ev.target["client_name"].value,
      phone: ev.target["phone"].value,
      email: ev.target["email"].value,
      client_rating: 0,
      artist: 2 //defaults to demo user for now
    };
    //console.log(newClient);

    ClientApiService.postClient(newClient).then(
      this.props.history.push(`/clients`)
    );
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
