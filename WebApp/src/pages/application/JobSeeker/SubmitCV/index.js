import React, {Component} from "react";
// styles
import "./style.scss";
import StyledTitle from "../../../../components/StyledTitle/StyledTitle";
import CVSubmission from "../../../../components/CVSubmission";
import App from "../../../../App";

export default class SubmitCV extends Component {
  state = {
    error: true
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    App.Current.SetPageName("Submit CV");
  }

  componentWillUnmount() {
    App.Current.SetPageName(null);
  }

  render() {
    return (
      <>
          <iframe className="submitcv_iframe"  src="https://whitecollarblue.vincere.io/careers/submit-cv" width="950px" height="1280px"></iframe>
      </>
    );
  }
}
