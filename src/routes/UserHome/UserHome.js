import React from "react";
import Icon from "../../components/Icon/Icon";
import financialIcon from "../../img/financial-icon.png";
import clientIcon from "../../img/client-icon.png";
import tattooIcon from "../../img/tattoo-icon.png";
import { Link } from "react-router-dom";
import "./UserHome.css";

function UserHome() {
  return (
    <div className="home">
      User Home Page
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
  );
}

export default UserHome;
