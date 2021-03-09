import React, {Component} from "react";
import PropTypes from "prop-types";

// styles
import "./Introduction.scss";
import StyledTitle from "../StyledTitle/StyledTitle";

// assets

export default class Introduction extends Component {
  render() {
    return (
      <div className="introduction-container">
        {/* title */}
        <div className="introduction-title">
          <StyledTitle title={this.props.title} small />
        </div>
        <div>
          {/* video */}
          <div className="intro-video">
            <video preload="none" controls poster={this.props.posterSrc}>
              <source src={this.props.videoSrc} type="video/mp4" />
            </video>
          </div>
          {/* paragraph */}
          <div className="description box-style--accent">
            <div className="description__text">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}

Introduction.propTypes = {
  title: PropTypes.string,
  videoSrc: PropTypes.string,
  posterSrc: PropTypes.string
};
