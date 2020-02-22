import React, { Component } from "react";
import "./Tile.css";

class Tile extends Component {
  render() {
    const { tattoo } = this.props;
    console.log(tattoo);
    return (
      <div className="tile">
        <div className="inner">
          <img src="https://via.placeholder.com/250x150" alt="preview" />
          <h3>{tattoo.title}</h3>
          <h4>{tattoo.curr_status}</h4>
        </div>
      </div>
    );
  }
}

export default Tile;
