import React, { Component } from "react";
import PropTypes from "prop-types";
import "./StyledTitle.scss";

export const YellowLine = () => {
  return (
    <svg className="yellow-line">
      <line x2="60" />
    </svg>
  )
}
export default class StyledTitle extends Component {
  render() {
    return (
      <div
        className={`
           styled-title 
           ${this.props.left && 'styled-title--left'}
           ${this.props.light && 'styled-title--light'}
           ${this.props.small && 'styled-title--small'}
        `}>
        <h1 >{this.props.title}</h1>
        <YellowLine />
      </div>
    );
  }
}

StyledTitle.propTypes = {
  left: PropTypes.bool,
  light: PropTypes.bool,
  small: PropTypes.bool,
  title: PropTypes.string
}