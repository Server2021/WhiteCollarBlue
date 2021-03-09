import React, {Component} from "react";
import Button from "@material-ui/core/Button";

import SubtitleWithLine from "../../../../../../components/SubtitleWithLine/SubtitleWithLine";
import AccountTable from "../../../components/AccountTable";

const TableData = {
  Name: "Toolbox",
  Address:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 0626, Sydney, Austrailia",
  "Mailing Address":
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 0626, Sydney, Austrailia",
  "Company Phone": "+610212345678",
  Fax: "+610212345678",
  "Company Linkedin": "Lorem ipsum dolor sit amet"
};

export default class ClientInformation extends Component {
  state = {
    activated: true
  };

  handleActivation = () => {
    this.setState(prevState => {
      return {activated: !prevState.activated};
    });
  };

  render() {
    return (
      <>
        <SubtitleWithLine title="Client Information" />
        <div className="admin-container--withAside">
          <div>
            <AccountTable data={TableData} />
          </div>
          <div>
            <aside className="admin-actions--right">
              <Button
                variant="outlined"
                color="primary"
                size="large"
                className="custom-button"
                onClick={this.handleActivation}>
                {this.state.activated
                  ? "Deactivate the client"
                  : "Activate the client"}
              </Button>
            </aside>
          </div>
        </div>
      </>
    );
  }
}
