import React, { Component } from "react";
import { Button, Input } from "../../utils/utils";
import ClientContext from "../../contexts/ClientContext";
import ClientApiService from "../../services/client-api-service";
import TokenService from "../../services/token-service";
import "./ClientForm.css";
// eslint-disable-next-line no-control-regex
const EMAIL_CHECK = /(?:[a-z0-9!#$%&'*+/=?s^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const PHONE_CHECK = /^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

export default class ClientForm extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };
  state = { error: null };

  static contextType = ClientContext;

  handleSubmitClient = ev => {
    ev.preventDefault();
    let phone = ev.target["phone"].value;
    let email = ev.target["email"].value;
    let user = Number(TokenService.getUser());

    if (!PHONE_CHECK.test(phone)) {
      return this.setState({ error: "Not a valid phone number" });
    }

    if (!EMAIL_CHECK.test(email)) {
      return this.setState({ error: "Not a valid email" });
    }

    const newClient = {
      full_name: ev.target["client_name"].value,
      phone: phone,
      email: email,
      client_rating: 0,
      artist: user
    };

    ClientApiService.postClient(newClient)
      .then(this.props.history.push(`/clients`))
      .catch(res => {
        this.setState({ error: res.error });
      });
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
