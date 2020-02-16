import React, { Component } from "react";
import Icon from "../../components/Icon/Icon";
import financialIcon from "../../img/financial-icon.png";
import clientIcon from "../../img/client-icon.png";
import tattooIcon from "../../img/tattoo-icon.png";
import calendarPlaceholder from "../../img/calendar-placeholder.png";
import { Link } from "react-router-dom";
import "./UserHome.css";

class UserHome extends Component {
  render() {
    return (
      <div className="home">
        <div className="calendar-section">
          <img
            src={calendarPlaceholder}
            alt="temporary placeholder for calendar"
          />
        </div>
        <div className="icon-row">
          <Link to="/client-list">
            <Icon title="Clients" picture={clientIcon} />
          </Link>
          <Link to="/ledger">
            <Icon title="Ledger" picture={financialIcon} />
          </Link>
          <Link to="/tattoo-list">
            <Icon title="Tattoos" picture={tattooIcon} />
          </Link>
        </div>
      </div>
    );
  }
}

export default UserHome;
