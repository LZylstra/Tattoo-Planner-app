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
  constructor(props) {
    super(props);
    this.state = { handleDelete: {} };
  }
  static contextType = ClientListContext;

  componentDidMount() {
    this.context.clearError();
    ClientApiService.getClients()
      .then(this.context.setClientList)
      .catch(this.context.setError);
  }

  handleDelete() {
    ClientApiService.getClients()
      .then(this.context.setClientList)
      .catch(this.context.setError);
  }

  renderClients() {
    const { clientList = [] } = this.context;
    return clientList.map(client => (
      <Row key={client.id} client={client} onDeleteSucess={this.handleDelete} />
    ));
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
