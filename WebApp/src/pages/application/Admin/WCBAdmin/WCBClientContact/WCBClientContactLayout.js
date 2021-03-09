import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import WCBClientContact from "./WCBClientContact";
import WCBClientContactDetail from "./WCBClientContactDetail";

export default class WCBClientContactLayout extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/admin/clientcontact" component={WCBClientContact} />
          <Route path="/admin/clientcontact/*" component={WCBClientContactDetail} />
        </Switch>
      </>
    );
  }
}
