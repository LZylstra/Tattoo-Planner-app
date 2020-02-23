import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Tile.css";

class Tile extends Component {
  render() {
    const { tattoo } = this.props;
    const tileType = this.props.type;

    // console.log(`goes into tile ${tattoo}`);
    if (tileType === "reference") {
      return (
        <div className="tile">
          <div className="inner">
            <img src="https://via.placeholder.com/250x150" alt="preview" />
            <h4>{this.props.line1}</h4>
          </div>
        </div>
      );
    } else {
      return (
        <div className="tile">
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

export default Tile;
