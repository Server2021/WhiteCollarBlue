import React, {Component} from "react";
import Button from "@material-ui/core/Button";
// import "../../Admin.scss"
import SubtitleWithLine from "../../../../../components/SubtitleWithLine/SubtitleWithLine";
import AccountTable from "../../components/AccountTable";
import {DeleteAccountModal} from "../../components/DeleteAccountModal";
import App from "../../../../../App";

const TableData = {
  "Company Name": "Toolbox",
  Address:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 0626, Sydney, Austrailia",
  "Mailing Address":
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 0626, Sydney, Austrailia",
  "Company Phone": "+610212345678",
  Fax: "+610212345678",
  "Company Linkedin": "Lorem ipsum dolor sit amet"
};

export default class EmployerCompayInfo extends Component {
  state = {
    deleteModalOpen: false
  };

  handleOpen = () => {
    this.setState({deleteModalOpen: true});
  };

  handleEditRequestSuccessOpen = () => {
    App.Current.AlertSuccess(
      "We'll let you know once we confirm this change.",
      "Edit Request Sent",
      "/admin"
    );
  };

  handleClose = () => {
    this.setState({deleteModalOpen: false});
  };

  handleDeleteSuccessModalOpen = e => {
    this.setState({deleteModalOpen: false});
    App.Current.AlertSuccess(
      "We'll let you know once we confirm this request.",
      "Delete Request Sent"
    );
  };

  render() {
    return (
      <>
        <SubtitleWithLine title="Company information" />
        <div className="admin-container--withAside">
          <div>
            <AccountTable data={TableData} />
          </div>
          <div>
            <aside className="admin-actions--right">
              <Button
                variant="contained"
                color="primary"
                size="large"
                className="custom-button"
                onClick={this.handleEditRequestSuccessOpen}>
                Edit
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                className="custom-button"
                onClick={this.handleOpen}>
                Delete Account
              </Button>
            </aside>
          </div>
        </div>

        <DeleteAccountModal
          open={this.state.deleteModalOpen}
          handleClose={this.handleClose}
          title="Success!"
          message="Your Request has been sent and we will be in touch soon."
          button="Okay"
          openSuccessModal={this.handleDeleteSuccessModalOpen}
        />
      </>
    );
  }
}
