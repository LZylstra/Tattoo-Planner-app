import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import Icon from "../../components/Icon/Icon";
import financialIcon from "../../img/financial-icon.png";
import clientIcon from "../../img/client-icon.png";
import tattooIcon from "../../img/tattoo-icon.png";
import calendarIcon from "../../img/calendar-icon.png";
import coverImg from "../../img/cover-img.png";
import mobileImg from "../../img/demo-mobile.png";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing_page">
        <p className="app_description">
          Tattoo Task Tracker is a tattoo artists best friend and virtual
          assistant. Artists work hard and Tattoo Task Tracker is there to make
          things a little easier. It helps them stay organized by giving them
          the ability to create and view schedules as well as manage client and
          tattoo information.
        </p>
        <img id="demo_pic" src={coverImg} alt="demo of app" />
        {/* <img id="mobile_pic" src={mobileImg} alt="mobile demo" /> */}
        <Icon
          title="Financials"
          description="Keep track of all of the money related information you need. Track quotes, hourly rates, deposits and more"
          picture={financialIcon}
        />
        <Icon
          title="Clients"
          description="Maintain a list of your clients and their information"
          picture={clientIcon}
        />
        <Icon
          title="Tattoos"
          description="See all of the tattoos you have upcoming and past"
          picture={tattooIcon}
        />
        <Icon
          title="Calendar"
          description="Schedule events such as consultations and tattooing sessions and view them in convenient calendar or schedule views"
          picture={calendarIcon}
        />

        <div className="demo_section">
          <Link className="tryit" to="/home">
            {" "}
            Try it out
          </Link>
        </div>
      </div>
    );
  }
}

export default LandingPage;
