import React, { Component } from "react";
import { Link } from "react-router-dom";
import Tile from "../../components/Tile/Tile";
import CircleButton from "../../components/CircleButton/CircleButton";
import ClientContext from "../../contexts/ClientContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Client.css";
import ClientApiService from "../../services/client-api-service";

class Client extends Component {
  static defaultProps = {
    match: { params: {} }
  };
  static contextType = ClientContext;

  componentDidMount() {
    const clientId = this.props.match.params.id;
    //console.log(clientId);
    this.context.clearError();
    ClientApiService.getClient(clientId)
      .then(this.context.setClient)
      .catch(this.context.setError);
    ClientApiService.getClientTattoos(clientId)
      .then(this.context.setClientTattoos)
      .catch(this.context.setError);
  }
  componentWillUnmount() {
    this.context.clearClient();
  }
  renderClient() {
    const { client, tattoos } = this.context;
    console.log(this.context);
    return (
      <>
        <div className="client-header">
          <h3>{client.full_name}</h3>
          <p>{client.client_rating}</p>
        </div>
        <div className="contact-info">
          {" "}
          <p>Phone: {client.phone}</p>
          <p>Email: {client.email}</p>{" "}
        </div>
        <div className="clients-tattoos">
          <Link to="/tattoo/:id">
            {/* <Tile key={client.id} tattoo={tattoo} /> */}
          </Link>
          {/* <Tile line1="Sunflower" line2="Completed" />
          <Tile line1="Live Laugh Love" line2="Completed" /> */}
        </div>
      </>
    );
  }

  render() {
    const { error, client } = this.context;
    let content;
    if (error) {
      content =
        error.error === `Client doesn't exist` ? (
          <p className="red">Client not found</p>
        ) : (
          <p className="red">There was an error</p>
        );
    } else if (!client.id) {
      content = <div className="loading" />;
    } else {
      content = this.renderClient();
    }

    return (
      <div className="ClientPage">
        {content}
        {/* <div className="client-header">
          <h3>Sarah Smith</h3>
          <ul class="rate-area">
            <input type="radio" id="5-star" name="rating" value="5" />
            <label for="5-star" title="Amazing">
              5 stars
            </label>
            <input type="radio" id="4-star" name="rating" value="4" />
            <label for="4-star" title="Good">
              4 stars
            </label>
            <input type="radio" id="3-star" name="rating" value="3" />
            <label for="3-star" title="Average">
              3 stars
            </label>
            <input type="radio" id="2-star" name="rating" value="2" />
            <label for="2-star" title="Not Good">
              2 stars
            </label>
            <input type="radio" id="1-star" name="rating" value="1" />
            <label for="1-star" title="Bad">
              1 star
            </label>
          </ul>
        </div>
        <div className="contact-info">
          {" "}
          <p>Phone: 123-456-7890</p>
          <p>Email: email@email.com</p>{" "}
        </div>
        <div className="clients-tattoos">
          <Link to="/tattoo">
            <Tile line1="Butterfly" line2="Planning" />
          </Link>
          <Tile line1="Sunflower" line2="Completed" />
          <Tile line1="Live Laugh Love" line2="Completed" />
        </div> */}
        <div className="Client_button-container">
          <CircleButton
            tag={Link}
            to="/add-tattoo"
            type="button"
            className="Client__add-tattoo-button"
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

export default Client;
