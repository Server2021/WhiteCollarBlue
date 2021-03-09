import React, {Component} from "react";
import SubtitleWithLine from "../../../../../components/SubtitleWithLine/SubtitleWithLine";
import {SplitNonEmpty} from "../../../../../Utilities";
import App from "../../../../../App";
import AccountInfo from "../../components/AccountInfo";
import UserCVs from "../../components/UserCVs";

export default class WCBJobSeekersDetail extends Component {
  render() {
    const userID = this.getSeekerId();

    return (
      <>
        <div className="admin-container__wrapper">
          <SubtitleWithLine title="Job Seekers Detail" />
          <AccountInfo id={userID} />
        </div>
        <SubtitleWithLine title="CVs" />
        <UserCVs id={userID} />
      </>
    );
  }

  getSeekerId() {
    let id = null;

    // Look at the Address.
    const addressParts = SplitNonEmpty(window.location.pathname, "/");
    // Address has ID.
    if (addressParts.length == 3) {
      id = addressParts[2];
    }

    return id;
  }

  componentDidMount() {
    const params = new URLSearchParams(window.location.search);
    const showCV = params.get("showCV");
    if (showCV) {
      window.open(
        App.Current.API.Administration.GetCVSubmissionUrl(showCV),
        "_blank"
      );
    }
  }
}
