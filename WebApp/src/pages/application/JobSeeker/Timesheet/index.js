import React, {Component} from "react";
import App from "../../../../App";

// assets

export default class Timesheet extends Component {
  componentDidMount() {
    App.Current.SetPageName("Timesheet");
  }

  componentWillUnmount() {
    App.Current.SetPageName(null);
  }

  render() {
    return (
      <>
        <div className="body__article--padding">
          <h2>Coming Soon</h2>
        </div>
      </>
    );
  }
}
