import React from "react";
import Tile from "../../components/Tile/Tile";
import "./Tattoo.css";

function Tattoo() {
  return (
    <div>
      <div className="tattoo-info">
        <h2>Butterfly</h2>
        <ul class="rate-area-t">
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
        <p className="details">Status: Planning</p>
        <p className="details">Location of Tattoo: Hip</p>
        <p className="tattoo-desc">
          Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
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
      </div>
      <div className="references">
        <Tile line1="Art Reference 1" />
        <Tile line1="Art Reference 2" />
        <Tile line1="Art Reference3" />
      </div>
    </div>
  );
}

export default Tattoo;
