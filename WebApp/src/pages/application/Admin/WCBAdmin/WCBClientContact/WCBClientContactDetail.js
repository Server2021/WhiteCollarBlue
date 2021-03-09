import React, {Component} from "react";

import SubtitleWithLine from "../../../../../components/SubtitleWithLine/SubtitleWithLine";
import AccountInfo from "../../components/AccountInfo";
import {SplitNonEmpty} from "../../../../../Utilities";

export default class WCBClientContactDetail extends Component {
  render() {
    return (
      <>
        <SubtitleWithLine title="Client Contact" />
        <AccountInfo id={this.getContactId()} />
      </>
    );
  }

  getContactId() {
    let id = null;

    // Look at the Address.
    const addressParts = SplitNonEmpty(window.location.pathname, "/");
    // Address has ID.
    if (addressParts.length == 3) {
      id = addressParts[2];
    }

    return id;
  }
}
