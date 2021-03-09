import React, {Component} from "react";

import SubtitleWithLine from "../../../../../components/SubtitleWithLine/SubtitleWithLine";
import App from "../../../../../App";
import AccountInfo from "../../components/AccountInfo";

export default class MyAccount extends Component {
  componentDidMount() {
    App.Current.SetPageName("My Account");
  }

  componentWillUnmount() {
    App.Current.SetPageName(null);
  }

  render() {
    return (
      <>
        <SubtitleWithLine title="My Account" />
        <AccountInfo />
      </>
    );
  }
}
