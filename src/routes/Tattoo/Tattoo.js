import React, { Component } from "react";
import Tile from "../../components/Tile/Tile";
import TattooContext from "../../contexts/TattooContext";
import { Rating } from "../../components/Rating/Rating";
import "./Tattoo.css";
import TattooApiService from "../../services/tattoo-api-service";
import ref1img from "../../img/sunflowerref.jpg";
import ref2img from "../../img/sunflowerref2.jpg";
import ref3img from "../../img/sunflowerref3.png";
//import ClientApiService from "../../services/client-api-service";

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
    this.context.clearTattoo();
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
        <div className="client-ledger">
          <p>Deposit Amount: $100</p>
          <p>Deposit Type: Cash</p>
          <p>Tattoo Quote: $300</p>
        </div>
        <div className="next-date">
          <p>Next Date: 02/13/20</p>
        </div>
      </div>
    );
  }

  render() {
    const { error, tattoo, client } = this.context;

    //console.log(`main render tattoo:`);
    // console.log(tattoo);
    let content;
    if (error) {
      content =
        error.error === `Client doesn't exist` ? (
          <p className="red">Client not found</p>
        ) : (
          <p className="red">There was an error</p>
        );
    } else if (tattoo === undefined || client === undefined) {
      content = <div>Loading...</div>;
    } else {
      content = this.renderTattoo();
    }

    return (
      <div>
        {content}
        {/* <div>

          <p className="details">Status: Planning</p>
          <p className="details">Location of Tattoo: Hip</p>
          <p className="tattoo-desc">
            Description: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.{" "}
          </p>
          <div className="client-contact">
            <h4>Sarah Smith</h4>
            <p>Phone: 123-455-7890</p>
            <p>Email: email@email.com</p>
          </div>
          <div className="client-ledger">
            <p>Deposit Amount: $100</p>
            <p>Deposit Type: Cash</p>
            <p>Tattoo Quote: $300</p>
          </div>
          <div className="next-date">
            <p>Next Date: 02/13/20</p>
          </div>
        </div>*/}
        <div className="references">
          <Tile type="reference" line1="Real Sunflower" img={ref1img} />
          <Tile type="reference" line1="Stylized Sunflower" img={ref2img} />
          <Tile type="reference" line1="Multiple Sunflowers" img={ref3img} />
        </div>
      </div>
    );
  }
}

export default Tattoo;
