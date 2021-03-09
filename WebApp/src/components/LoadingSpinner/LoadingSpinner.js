import React from "react";
import "./LoadingSpinner.scss";
import CircularProgress from "@material-ui/core/CircularProgress";

const LoadingSpinner = props => {
  return (
    <div className="flex-column">
      <CircularProgress color="primary" />
      {props.title && <div className="loading-spinner__title">{props.title}</div>}
    </div>
  );
};
export default LoadingSpinner;
