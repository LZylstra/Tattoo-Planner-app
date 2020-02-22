import React, { Component } from "react";
import OptionsHeader from "../../components/OptionsHeader/OptionsHeader";
import Tile from "../../components/Tile/Tile";
import TattooListContext from "../../contexts/TattooListContext";
import TattooApiService from "../../services/tattoo-api-service";
import "./TattooList.css";
import CircleButton from "../../components/CircleButton/CircleButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

class TattooList extends Component {
  static contextType = TattooListContext;

  componentDidMount() {
    this.context.clearError();
    TattooApiService.getTattoos()
      .then(this.context.setTattoosList)
      .catch(this.context.setError);
  }

  renderTattoos() {
    const { tattooList = [] } = this.context;
    // return tattooList.map(tattoo =>
    //   //<Tile key={} line2="Sarah Smith" />
    //   )
  }

  render() {
    return (
      <div className="tattoo-list">
        <OptionsHeader title="Tattoos" type="Tattoo" />
        {/* <Link to="/tattoo">
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
        </Link> */}
        <div className="tattooList_button-container">
          <CircleButton
            tag={Link}
            to="/add-tattoo"
            type="button"
            className="tattooList_add-tattoo-button"
          >
            <FontAwesomeIcon icon="plus" />
            <br />
            Tattoo
          </CircleButton>
        </div>
      </div>
    );
  }
}

export default TattooList;
