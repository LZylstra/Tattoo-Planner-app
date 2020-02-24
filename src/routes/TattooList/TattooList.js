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
  constructor(props) {
    super(props);
    this.state = { handleDelete: {} };
  }
  static contextType = TattooListContext;

  setTattooList(list) {
    this.setState({ tattooListState: list });
  }
  componentDidMount() {
    this.context.clearError();
    TattooApiService.getTattoos()
      .then(this.context.setTattooList)
      // .then(this.state.setTattooList)
      .catch(this.context.setError);
  }
  handleDelete() {
    TattooApiService.getTattoos()
      .then(this.context.setTattooList)
      .catch(this.context.setError);
  }
  renderTattoos() {
    const { tattooList = [] } = this.context;
    // const stateTattoos = this.state.tattooListState;
    // console.log(stateTattoos);
    if (tattooList[0] === undefined) {
      return <div>Loading</div>;
    } else {
      //  console.log(tattooList);
      return tattooList.map(tattoo => (
        <Tile
          key={tattoo.id}
          tattoo={tattoo}
          onDeleteSuccess={this.handleDelete}
        />
      ));
    }
  }

  render() {
    const { error } = this.context;
    return (
      <div className="tattoo-list">
        <OptionsHeader title="Tattoos" type="Tattoo" />
        {error ? (
          <p className="red">There was an error, try again</p>
        ) : (
          this.renderTattoos()
        )}
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
