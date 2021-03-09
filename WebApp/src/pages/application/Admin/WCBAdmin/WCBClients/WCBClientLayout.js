import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";

import WCBClients from "./WCBClients";
import WCBClientDetail from "./WCBClientDetail";
import ComingSoon from "../../../../../components/ComingSoon";

export default class WCBClientLayout extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/admin/clients" component={WCBClients} />
          <Route path="/admin/clients/*" component={WCBClientDetail} />
        </Switch>
      </>
    );
  }
}
