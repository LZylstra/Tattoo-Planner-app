import React, { Component } from "react";
import OptionsHeader from "../../components/OptionsHeader/OptionsHeader";
import Row from "../../components/Row/Row";
import ClientListContext from "../../contexts/ClientListContext";
import ClientApiService from "../../services/client-api-service";
import "./ClientList.css";
import CircleButton from "../../components/CircleButton/CircleButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

class ClientList extends Component {
  static contextType = ClientListContext;

  componentDidMount() {
    this.context.clearError();
    ClientApiService.getClients()
      .then(this.context.setClientList)
      .catch(this.context.setError);
  }
  renderClients() {
    const { clientList = [] } = this.context;
    // console.log(this.context);
    return clientList.map(client => <Row key={client.id} client={client} />);
  }

  render() {
    const { error } = this.context;
    return (
      <div className="client-list">
        <OptionsHeader title="Clients" />
        {error ? (
          <p className="red">There was an error, try again</p>
        ) : (
          this.renderClients()
        )}
        {/* <Link to="/client" className="row-link">
          <Row
            client="Sarah Smith"
            tattoo="Butterfly"
            label="planning"
            date="02/14/20"
          />
        </Link>
        <Link to="/client" className="row-link">
          <Row
            client="Gabriel Bellamy"
            tattoo="Dragon"
            label="session scheduled"
            date="03/01/20"
          />
        </Link>
        <Link to="/client" className="row-link">
          <Row
            client="Janice Bigby"
            tattoo="Dog Portrait"
            label="session scheduled"
            date="02/23/20"
          />
        </Link> */}
        <div className="ClientList_button-container">
          <CircleButton
            tag={Link}
            to="/add-client"
            type="button"
            className="ClientList__add-client-button"
          >
            <FontAwesomeIcon icon="plus" />
            <br />
            Client
          </CircleButton>
        </div>
      </div>
    );
  }
}

export default ClientList;
