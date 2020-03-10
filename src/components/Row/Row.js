import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Row.css";
import ClientApiService from "../../services/client-api-service";

class Row extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };
  handleClickDeleteClient = e => {
    e.preventDefault();
    const { history } = this.props;
    const clientId = this.props.client.id;

    ClientApiService.deleteClient(clientId);
    history.go(0);
  };
  render() {
    const { client } = this.props;
    return (
      <div className="row">
        <div className="inner-row">
          <button
            className="client-delete"
            type="button"
            onClick={this.handleClickDeleteClient}
          >
            <FontAwesomeIcon icon="trash-alt" />{" "}
          </button>
          <Link to={`/clients/${client.id}`}>
            <img src="https://via.placeholder.com/100" alt="client" />
            <div className="row-text">
              {" "}
              <h3 className="row-text-item">{client.full_name}</h3>
              <p>{client.phone}</p>
            </div>
          </Link>
          {/* Future Feature, will show most current event date
          <div className="date-box">
            <p className="row-text-item">{props.label}</p>
            <p className="date">{props.date}</p>
          </div> */}
        </div>
      </div>
    );
  }
}

export default withRouter(Row);
