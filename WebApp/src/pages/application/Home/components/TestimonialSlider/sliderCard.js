import React, { Component } from "react";
import PropTypes from "prop-types";

import "./TestimonialSlider.scss";

import Quote from "../../../../../assets/home/quotes.svg";

export default class SliderCard extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="card-profile">
          <img src={this.props.profile} alt={this.props.name} />
          <div className="card-name">{this.props.name}</div>
          <div className="card-companyname">{this.props.companyName}</div>
        </div>
        <div className="card">
          <img src={Quote} alt="quote-icon" />
          <div className="card-text">
            <p>{this.props.text}</p>
          </div>
        </div>
      </div>
    );
  }
}
SliderCard.propTypes = {
  profile: PropTypes.string,
  name: PropTypes.string,
  companyName: PropTypes.string,
  text: PropTypes.string
};
