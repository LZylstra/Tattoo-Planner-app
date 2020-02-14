import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import Icon from "../../components/Icon/Icon";

function LandingPage() {
  return (
    <div className="landing_page">
      <p className="app_description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et
        vehicula justo, id ullamcorper augue. Nam ornare sit amet tellus ac
        mollis. Phasellus id sapien ipsum.
      </p>
      <img
        id="demo_pic"
        src="https://via.placeholder.com/800x500"
        alt="demo of app"
      />
      <Icon title="Feature 1" />
      <Icon title="Feature 2" />
      <Icon title="Feature 3" />

      <div className="demo_section">
        <Link className="tryit" to="/home">
          {" "}
          Try it out
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
