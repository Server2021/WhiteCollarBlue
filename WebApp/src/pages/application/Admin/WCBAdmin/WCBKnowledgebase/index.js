import React from "react";
import HRSenseLogo from "../../../../../assets/hrsense-logo.png";
import {Button} from "@material-ui/core";

export default class WCBKnowledgeBase extends React.Component {
  render() {
    return (
      <div className="body__article--padding">
        {/* 01. partners */}
        {/* 02. hr sense */}
        <div className="hr__title">
          <img src={HRSenseLogo} alt="HR Sense" />
          <p>You must use HR Sense Admin to add Knowledgebase Entries.</p>

          <a
            href="https://hrsense.com.au/"
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
        </div>
      </div>
    );
  }
}
