import React, { Component } from "react";
import Tile from "../../components/Tile/Tile";
import TattooContext from "../../contexts/TattooContext";
import { Rating } from "../../components/Rating/Rating";
import "./Tattoo.css";
import TattooApiService from "../../services/tattoo-api-service";

// temporary placeholder images in use until references feature is finished
import ref1img from "../../img/sunflowerref.jpg";
import ref2img from "../../img/sunflowerref2.jpg";
import ref3img from "../../img/sunflowerref3.png";

class Tattoo extends Component {
  static defaultProps = {
    match: { params: {} }
  };

  static contextType = TattooContext;

  componentDidMount() {
    const tattooId = this.props.match.params.id;

    this.context.clearError();
    TattooApiService.getTattoo(tattooId)
      .then(this.context.setTattoo)
      .catch(this.context.setError);
    TattooApiService.getTattoosClient(tattooId)
      .then(this.context.setTattoosClient)
      .catch(this.context.setError);
  }

  componentWillUnmount() {
    this.context.clearTattoos();
    this.context.clearTattoosClient();
  }

  renderTattoo() {
    const { tattoo, client } = this.context;

    return (
      <div className="tattoo-info">
        <h2>{tattoo.title}</h2>
        <Rating
          type="tattoo"
          rating={tattoo.tattoo_rating}
          className="heart-rating"
        />
        <p className="details">Status: {tattoo.curr_status}</p>
        <p className="details">Location of Tattoo: {tattoo.position}</p>
        <p className="tattoo-desc">{tattoo.info}</p>
        <div className="client-contact">
          <h4>{client.full_name}</h4>
          <p>Phone: {client.phone}</p>
          <p>Email: {client.email}</p>
        </div>
        {/* future feature */}
        <div className="client-ledger">
          <p>Deposit Amount: $100</p>
          <p>Deposit Type: Cash</p>
          <p>Tattoo Quote: $300</p>
        </div>
        {/* future feature */}
        <div className="next-date">
          <p>Next Date: 02/13/20</p>
        </div>
      </div>
    );
  }

  render() {
    const { error, tattoo, client } = this.context;

    let content;
    if (error) {
      content =
        error.error === `Client doesn't exist` ? (
          <p className="red">Client not found</p>
        ) : (
          <p className="red">There was an error</p>
        );
    } else if (tattoo === undefined || client === undefined) {
      content = (
        <div>
          {" "}
          <br />
        </div>
      );
    } else {
      content = this.renderTattoo();
    }

    return (
      <div>
        {content}
        <div className="references">
          <Tile type="reference" line1="Reference 1" img={ref1img} />
          <Tile type="reference" line1="Reference 2" img={ref2img} />
          <Tile type="reference" line1="Reference 3" img={ref3img} />
        </div>
      </div>
    );
  }
}

export default Tattoo;
