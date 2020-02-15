import React from "react";
import OptionsHeader from "../../components/OptionsHeader/OptionsHeader";
import Tile from "../../components/Tile/Tile";
import "./TattooList.css";
import { Link } from "react-router-dom";

function TattooList() {
  return (
    <div className="tattoo-list">
      <OptionsHeader title="Tattoos" />
      <Link to="/tattoo">
        <Tile line1="Butterfly" line2="Sarah Smith" />
      </Link>
      <Link to="/tattoo">
        <Tile line1="Dragon" line2="Gabriel Bellamy" />
      </Link>
      <Link to="/tattoo">
        <Tile line1="Dog Portrait" line2="Janice Bigby" />
      </Link>
      <Link to="/tattoo">
        <Tile line1="Tribal" line2="Helen Henderson" />
      </Link>
      <Link to="/tattoo">
        <Tile line1="Flower" line2="Robert Morelli" />
      </Link>
      <Link to="/tattoo">
        <Tile line1="Tree" line2="Arthur Hays" />
      </Link>
    </div>
  );
}

export default TattooList;
