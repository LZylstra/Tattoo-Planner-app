import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Row.css";

class Row extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };
  handleClickDeleteClient = e => {
    const { history } = this.props;

    const clientId = this.props.client.id;
    console.log(clientId);
  };
  render() {
    const { client } = this.props;
    //console.log(client);
    // console.log(client.id);
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
              {/* <p className="row-text-item">{props.tattoo}</p> */}
            </div>
          </Link>
          {/* <div className="date-box">
            <p className="row-text-item">{props.label}</p>
            <p className="date">{props.date}</p>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Row;
