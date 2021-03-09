import React, {Component} from "react";

// styles
import StyledTitle from "../../../../components/StyledTitle/StyledTitle";

// components
import Steps from "./VacancyFormSteps";
import App from "../../../../App";

// assets

export default class SubmitVacancy extends Component {
  componentDidMount() {
    App.Current.SetPageName("Submit a vancancy");
  }

  componentWillUnmount() {
    App.Current.SetPageName(null);
  }

  render() {
    return (
      <>
        <iframe className="submitvacancy_iframe"  src="https://whitecollarblue.vincere.io/careers/submit-vacancy" width="950px" height="1900px"></iframe>
      </>
    );
  }
}
