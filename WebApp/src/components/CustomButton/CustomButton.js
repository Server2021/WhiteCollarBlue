import React from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import "./CustomButton.scss";

export const CustomButton = props => {
  return (
    <Button
      onClick={props.onClick}
      variant={props.variant}
      size={props.size}
      color="primary"
      component="span"
      className="custom-button">
      <span>{props.beforeIcon}</span>
      {props.buttonName}
      <span>{props.afterIcon}</span>
    </Button>
  );
};

CustomButton.propTypes = {
  variant: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  buttonName: PropTypes.string,
  beforeIcon: PropTypes.object,
  afterIcon: PropTypes.object
};
