import React from "react";
import OptionsHeader from "../../components/OptionsHeader/OptionsHeader";
import Tile from "../../components/Tile/Tile";
import "./TattooList.css";

function TattooList() {
  return (
    <div className="tattoo-list">
      <OptionsHeader title="Tattoos" />
      <Tile line1="Butterfly" line2="Sarah Smith" />
      <Tile line1="Dragon" line2="Gabriel Bellamy" />
      <Tile line1="Dog Portrait" line2="Janice Bigby" />
      <Tile line1="Tribal" line2="Helen Henderson" />
      <Tile line1="Flower" line2="Robert Morelli" />
      <Tile line1="Tree" line2="Arthur Hays" />
    </div>
  );
}

export default TattooList;
