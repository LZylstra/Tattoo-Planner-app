import React, { Component } from "react";
import { Link } from "react-router-dom";
import Tile from "../../components/Tile/Tile";
import { ClientStarRating } from "../../components/ClientStarRating/ClientStarRating";
import CircleButton from "../../components/CircleButton/CircleButton";
import ClientContext from "../../contexts/ClientContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Client.css";
import ClientApiService from "../../services/client-api-service";

class Client extends Component {
  static defaultProps = {
    match: { params: {} }
  };

  static contextType = ClientContext;

  componentDidMount() {
    const clientId = this.props.match.params.id;
    //console.log(clientId);
    this.context.clearError();
    ClientApiService.getClient(clientId)
      .then(this.context.setClient)
      .catch(this.context.setError);
    ClientApiService.getClientTattoos(clientId)
      .then(this.context.setClientTattoos)
      .catch(this.context.setError);
  }
  componentWillUnmount() {
    this.context.clearClient();
  }
  renderClient() {
    const { client, tattoos } = this.context;
    // console.log(tattoos);
    return (
      <>
        <div className="client-header">
          <h3>{client.full_name}</h3>
          <ClientStarRating rating={client.client_rating} />
        </div>
        <div className="contact-info">
          {" "}
          <p>Phone: {client.phone}</p>
          <p>Email: {client.email}</p>{" "}
        </div>
        <div className="clients-tattoos">
          {tattoos.map(tattoo => (
            <Tile key={tattoo.id} tattoo={tattoo} type="tattoo" />
          ))}
        </div>
      </>
    );
  }

  render() {
    const { error, client, tattoos } = this.context;
    //  console.log(this.context);
    let content;
    if (error) {
      content =
        error.error === `Client doesn't exist` ? (
          <p className="red">Client not found</p>
        ) : (
          <p className="red">There was an error</p>
        );
    } else if (!client.id || tattoos === undefined) {
      //console.log(`clientid ${client.id} and tattooid ${tattoos.id}`);
      content = <div className="loading" />;
    } else {
      content = this.renderClient();
    }

    return (
      <div className="ClientPage">
        {content}

        <div className="Client_button-container">
          <CircleButton
            tag={Link}
            to="/add-tattoo"
            type="button"
            className="Client__add-tattoo-button"
          >
            <FontAwesomeIcon icon="plus" />
            <br />
            Tattoo
          </CircleButton>
        </div>
      </div>
    );
  }
}

export default Client;
