import React from "react";
import PropTypes from "prop-types";
import "./SubtitleWithLine.scss";
import Tooltip from '@material-ui/core/Tooltip';
import { FaRegQuestionCircle } from "react-icons/fa";

const SubtitleWithLine = props => {
  return (
    <div
      className={`subtitle-with-line ${
        props.nomargin ? " subtitle-with-line--no-margin" : ""
      }`}>

      <div className="subtitle-with-line--title" style={{fontSize: props.fontSize}}>
        <span>{props.title}</span> 

        {props.tooltip &&  
          <Tooltip title={props.tooltip} placement="top" className="tooltip">
            <span><FaRegQuestionCircle /></span>
          </Tooltip>
        }
        
      </div>
      <div className="subtitle-with-line--divider" />
    </div>
  );
};

SubtitleWithLine.propTypes = {
  nomargin : PropTypes.bool,
  title : PropTypes.string,
  fontSize : PropTypes.number,
}

export default SubtitleWithLine;
