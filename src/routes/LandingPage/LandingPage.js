import React from "react";
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
      <Icon />
      <Icon />
      <Icon />

      <div className="demo_section">
        <button>Try it Out</button>
      </div>
    </div>
  );
}

export default LandingPage;
