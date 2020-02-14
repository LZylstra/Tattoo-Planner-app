import React from "react";
import OptionsHeader from "../../components/OptionsHeader/OptionsHeader";
import Tile from "../../components/Tile/Tile";

function TattooList() {
  return (
    <div>
      <OptionsHeader title="Tattoos" />
      <Tile line1="Butterfly" line2="Sarah Smith" />
    </div>
  );
}

export default TattooList;
