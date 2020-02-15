import React from "react";
import OptionsHeader from "../../components/OptionsHeader/OptionsHeader";
import Row from "../../components/Row/Row";

function ClientList() {
  return (
    <div>
      <OptionsHeader title="Clients" />
      <Row
        client="Sarah Smith"
        tattoo="Butterfly"
        label="planning"
        date="02/14/20"
      />
    </div>
  );
}

export default ClientList;
