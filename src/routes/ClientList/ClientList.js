import React from "react";
import OptionsHeader from "../../components/OptionsHeader/OptionsHeader";
import Row from "../../components/Row/Row";
import "./ClientList.css";
import { Link } from "react-router-dom";

function ClientList() {
  return (
    <div className="client-list">
      <OptionsHeader title="Clients" />
      <Link to="/client">
        <Row
          client="Sarah Smith"
          tattoo="Butterfly"
          label="planning"
          date="02/14/20"
        />
      </Link>
      <Link to="/client">
        <Row
          client="Gabriel Bellamy"
          tattoo="Dragon"
          label="session scheduled"
          date="03/01/20"
        />
      </Link>
      <Link to="/client">
        <Row
          client="Janice Bigby"
          tattoo="Dog Portrait"
          label="session scheduled"
          date="02/23/20"
        />
      </Link>
    </div>
  );
}

export default ClientList;
