import React, { Component } from "react";
import { Button, Input, Textarea } from "../../utils/utils";
import TattooContext from "../../contexts/TattooContext";
import ClientApiService from "../../services/client-api-service";
import TattooApiService from "../../services/tattoo-api-service";
//import ClientListContext from "../../contexts/ClientListContext";
import "./TattooForm.css";

export default class TattooForm extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };
  state = { error: null };

  static contextType = TattooContext;
  componentDidMount() {
    this.context.clearError();
    ClientApiService.getClients()
      .then(this.context.setAllClients)
      .catch(this.context.setError);
    // ClientApiService.getClientTattoos(clientId)
    //   .then(this.context.setClientTattoos)
    //   .catch(this.context.setError);
  }
  componentWillUnmount() {
    this.context.clearTattoo();
  }

  handleSubmitTattoo = ev => {
    ev.preventDefault();
    const clientId = ev.target["client-id"].value;
    const newTattoo = {
      client: ev.target["client-id"].value,
      title: ev.target["tattoo_title"].value,
      position: ev.target["tattoo_location"].value,
      info: ev.target["tattoo_info"].value,
      curr_status: "New",
      tattoo_rating: 0
    };
    console.log(newTattoo);

    TattooApiService.postTattoo(newTattoo)
      //.then(this.context.addTattoo)
      .then(this.props.history.push(`/clients/${clientId}`));
  };

  render() {
    const { error } = this.state;
    const { allClients = [] } = this.context;
    let clientDropDown;

    // console.log(this.context);
    if (allClients === undefined) {
      console.log("loading");
    } else {
      clientDropDown = allClients.map(client => (
        <option key={client.id} value={client.id}>
          {client.full_name}
        </option>
      ));
    }
    return (
      <form className="TattooForm" onSubmit={this.handleSubmitTattoo}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="client_name">
          <label htmlFor="TattooForm__client_name">Client's Full Name </label>
          <select id="client-select" name="client-id" required>
            <option value="">Select a Client...</option>
            {clientDropDown}
          </select>

          {/* <Input
            required
            name="client_name"
            id="TattooForm_client_name"
          ></Input> */}
        </div>
        <div className="tattoo_title">
          <label htmlFor="TattooForm_title">Title For Tattoo</label>
          <Input required name="tattoo_title" id="TattooForm_title"></Input>
        </div>
        <div className="tattoo_location">
          <label htmlFor="TattooForm_location">Location Of Tattoo</label>
          <Input name="tattoo_location" id="TattooForm_location"></Input>
        </div>
        <div className="tattoo_info">
          <label htmlFor="TattooForm_info">Description</label>
          <Textarea name="tattoo_info" id="TattooForm_info"></Textarea>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}
