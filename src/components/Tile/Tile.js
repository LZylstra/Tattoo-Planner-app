import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import TattooContext from "../../contexts/TattooContext";
import TattooApiService from "../../services/tattoo-api-service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Tile.css";

class Tile extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    },
    onDeleteSucess: () => {}
  };

  static contextType = TattooContext;

  handleClickDeleteTattoo = e => {
    e.preventDefault();
    const { history } = this.props;
    const tattooId = this.props.tattoo.id;

    TattooApiService.deleteTattoo(tattooId).then(() => {
      this.context.clearTattoos();
      //refreshes the whole page
      history.go(0);
    });
  };
  render() {
    const { tattoo } = this.props;

    const tileType = this.props.type;

    if (tileType === "reference") {
      return (
        <div className="tile">
          <button
            className="delete"
            type="button"
            onClick={this.handleClickDeleteReference}
          >
            <FontAwesomeIcon icon="trash-alt" />{" "}
          </button>
          <div className="inner">
            <img src="https://via.placeholder.com/250x150" alt="preview" />
            {/* Future Feature will show reference images
            <img id="ref-img" src={this.props.img} alt="preview" /> */}
            <h4>{this.props.line1}</h4>
          </div>
        </div>
      );
    } else {
      return (
        <div className="tile">
          <button
            className="delete"
            type="button"
            onClick={this.handleClickDeleteTattoo}
          >
            <FontAwesomeIcon icon="trash-alt" />{" "}
          </button>
          <Link to={`/tattoos/${tattoo.id}`}>
            <div className="inner">
              <img src="https://via.placeholder.com/250x150" alt="preview" />
              <h3>{tattoo.title}</h3>
              <h4>{tattoo.curr_status}</h4>
            </div>
          </Link>
        </div>
      );
    }
  }
}

export default withRouter(Tile);
