import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Row.css";

class Row extends Component {
  render() {
    const { client } = this.props;
    //console.log(client);
    // console.log(client.id);
    return (
      <Link to={`/clients/${client.id}`}>
        <div className="row">
          <div className="inner-row">
            <img src="https://via.placeholder.com/100" alt="client" />
            <div className="row-text">
              {" "}
              <h3 className="row-text-item">{client.full_name}</h3>
              <p>{client.phone}</p>
              {/* <p className="row-text-item">{props.tattoo}</p> */}
            </div>

            {/* <div className="date-box">
            <p className="row-text-item">{props.label}</p>
            <p className="date">{props.date}</p>
          </div> */}
          </div>
        </div>
      </Link>
    );
  }
}

export default Row;
