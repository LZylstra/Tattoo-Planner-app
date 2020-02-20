import React from "react";
import OptionsHeader from "../../components/OptionsHeader/OptionsHeader";
import Row from "../../components/Row/Row";
import "./ClientList.css";
import CircleButton from "../../components/CircleButton/CircleButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function ClientList() {
  return (
    <div className="client-list">
      <OptionsHeader title="Clients" />
      <Link to="/client" className="row-link">
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
      </Link>
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

export default ClientList;
