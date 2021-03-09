import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";

import PendingVacancies from "./PendingVacancies";
import RecentCV from "./RecentCV";
import PendingClientAccount from "./PendingClientAccount";
import PendingVacancyDetail from "./PendingVacancyDetail";
import PendingChanges from "./PendingChanges";

export default class WCBDashboardLayout extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/admin/dashboard" component={WCBDashboard} />
          <Route
            path="/admin/dashboard/vacancydetail/*"
            component={PendingVacancyDetail}
          />
        </Switch>
      </>
    );
  }
}

const WCBDashboard = () => {
  return (
    <>
      <div className="admin-container__wrapper">
        <PendingVacancies />
      </div>
      <div className="admin-container__wrapper">
        <RecentCV />
      </div>
      <div className="admin-container__wrapper">
        <PendingClientAccount />
      </div>
      <PendingChanges />
    </>
  );
};
