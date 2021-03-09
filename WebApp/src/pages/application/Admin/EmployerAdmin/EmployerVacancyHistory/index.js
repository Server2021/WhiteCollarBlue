import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import VacancyHistory from "./VacancyHistory";
import VacancyDetail from "./VacancyDetail";

export default class EmployerVacancyHistory extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/admin/vacancyhistory" component={VacancyHistory} />
          <Route path="/admin/vacancyhistory/detail/*" component={VacancyDetail} />
        </Switch>
      </>
    );
  }
}
