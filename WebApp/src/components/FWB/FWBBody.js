import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import "./style.scss";
import StyledTitle from "../StyledTitle/StyledTitle";
import FWBCircle from "./FWBCircle";

import FWBImage from "../../assets/home/fwb-image.jpeg";
import {Button} from "@material-ui/core";

export default class FWBBody extends Component {
  render() {
    return (
      <div
        className={`fwb__content ${this.props.modal && "fwb-modal__body"} ${this
          .props.page && "fwb-page__body"}`}>
        {/* image */}
        <div className="fwb__image">
          <img src={FWBImage} alt="Friends with Benefits" />
          <div className="fwb__circle-container">
            <FWBCircle />
          </div>
        </div>
        {/* content */}
        <div className="fwb__body">
          <div className="fwb__title">
            <StyledTitle title="Friends with Benefits" left />
          </div>
          <h1 className="fwb__subtitle">
            <i>
              At WhiteCollarBlue <span>We love friends!</span>
            </i>
          </h1>
          <div className="fwb__text">
            <p>
              If you have any friends that are looking for employment opportunities,
              click and fill in their details.
            </p>
            <p>
              <b>
                To say ‘thank you’ from us to you, <br />
                <span>we will give you a referral bonus valued at $100*</span>
              </b>
            </p>
            <p>
              You don’t need to be registered with us to refer a friend! We welcome
              everyone to refer great people.
            </p>
          </div>
          <Link
            to="/jobseeker/friendswithbenefits"
            className="fwb__button"
            onClick={this.props.onMove && this.props.onMove}>
            <Button
              color="primary"
              className="custom-button capitalized"
              variant="contained"
              size="large">
              Refer a Friend Today and Receive $100!
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

FWBBody.propTypes = {
  modal: PropTypes.bool,
  page: PropTypes.bool
};
