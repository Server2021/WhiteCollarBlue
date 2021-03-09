import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import WCBJobSeekers from "./WCBJobSeekers";
import WCBJobSeekersDetail from "./WCBJobSeekersDetail";

export default class WCBJobSeekersLayout extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/admin/jobseekers" component={WCBJobSeekers} />
          <Route path="/admin/jobseekers/*" component={WCBJobSeekersDetail} />
        </Switch>
      </>
    );
  }
}
