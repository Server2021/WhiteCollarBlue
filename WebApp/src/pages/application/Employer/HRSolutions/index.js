import React, {Component} from "react";

import {FaChevronCircleRight} from "react-icons/fa";
import {Button} from "@material-ui/core";

// styles
import "./style.scss";
import StyledTitle from "../../../../components/StyledTitle/StyledTitle";

// assets
import HRSenseLogo from "../../../../assets/hrsense-logo.png";
import App from "../../../../App";

const CardSection = props => {
  return (
    <div className={`hr__card-section ${props.cardLeft && "hr__card-left"}`}>
      <img className="hr__image" src={props.image} alt={props.title} />
      <div className="hr__card">
        <div>{props.paragraph}</div>
        <div className="hr__link">
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            {props.title}
            <FaChevronCircleRight />
          </a>
        </div>
      </div>
    </div>
  );
};
export default class HRSolutions extends Component {
  componentDidMount() {
    App.Current.SetPageName("HR solutions");
  }

  componentWillUnmount() {
    App.Current.SetPageName(null);
  }

  render() {
    return (
      <>
        <div className="body__article--padding">
          <StyledTitle title="HR Solutions" small />

          {/* 01. partners */}
          {/* 02. hr sense */}
          <div className="hr__title">
            <img src={HRSenseLogo} alt="HR Sense" />
            <p>
              HR Sense was developed to support business owners in learning how to
              create and maintain a compliant HR framework within their business. We
              offer a suite of services including a variety of membership options
              depending on your business needs. To support you we must first
              understand your business, and this is why we start the process by
              conducting a “Business Health check” to gain an insight to what stage
              your current HR Framework is at. &nbsp;
              <b>
                HR Sense has been working with businesses like yours, solving
                problems like yours.
              </b>
            </p>
            <a
              href="https://www.hrsense.com.au"
              target="_blank"
              rel="noopener noreferrer">
              <Button
                variant="contained"
                color="primary"
                size="large"
                className="custom-button">
                Go to&nbsp;<b>HR Sense</b>
              </Button>
            </a>
            <a
              href="https://hrsense.com.au/ourservices"
              target="_blank"
              rel="noopener noreferrer">
              <Button
                variant="outlined"
                color="primary"
                size="large"
                className="custom-button">
                View Our&nbsp;<b>HR service</b>&nbsp;Options
              </Button>
            </a>
          </div>
        </div>
        <CardSection
          image={require("../../../../assets/employers/business-health-check.jpg")}
          title="Business Health Check"
          paragraph="Is your business complaint with Fair Work Regulations? 
                    Click below to book in your Business Healthcheck with one of our HR Practioners."
          link="https://hrsense.com.au/healthcheck"
        />
        <CardSection
          image={require("../../../../assets/employers/hr_practitioners-01.png")}
          title="Speak with one of our HR Practitioners"
          paragraph="If you would like to have a confidential conversation with one of Qualified Practitioners, 
                    simply click below and we will contact you."
          link="/contact/sydney"
          cardLeft
        />
        <CardSection
          image={require("../../../../assets/employers/hr_practitioners-02.png")}
          title="Speak with one of our HR Specialists"
          paragraph="Our Team of Specialists can assist in finding your next exceptional team member. 
                    Whether the need be on casual, contract or permanent terms."
          link="/contact/sydney"
        />
      </>
    );
  }
}
