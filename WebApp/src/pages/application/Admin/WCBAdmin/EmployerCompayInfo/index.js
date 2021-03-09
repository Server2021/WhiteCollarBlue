import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import style from "./style.module.scss";
import SubtitleWithLine from "../../../../../components/SubtitleWithLine/SubtitleWithLine";
import {DeleteAccountModal} from "../../components/DeleteAccountModal";
import App from "../../../../../App";
import AccountTable from "../../components/AccountTable";
import ComingSoon from "../../../../../components/ComingSoon";

const TableData = [
  {th: "Company Name", td: "Toolbox"},
  {
    th: "Address",
    td:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 0626, Sydney, Austrailia"
  },
  {
    th: "Mailing Address",
    td:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 0626, Sydney, Austrailia"
  },
  {th: "Company Phone", td: "+610212345678"},
  {th: "Fax", td: "+610212345678"},
  {th: "Company Linkedin", td: "Lorem ipsum dolor sit amet"}
];

export default class EmployerCompayInfo extends Component {
  state = {
    deleteModalOpen: false
  };

  handleOpen = () => {
    this.setState({deleteModalOpen: true});
  };

  handleClose = () => {
    this.setState({deleteModalOpen: false});
  };

  handleSuccessModalOpen = e => {
    this.setState({deleteModalOpen: false});
    this.deleteSuccess();
  };

  render() {
    return <ComingSoon />;

    return (
      <>
        <SubtitleWithLine title="Company information" />
        <div className={style.container}>
          <div>
            <AccountTable data={TableData} />
          </div>
          <div>
            <aside className={style.actions}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className="custom-button">
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
          openSuccessModal={this.handleSuccessModalOpen}
        />
      </>
    );
  }

  deleteSuccess() {
    App.Current.AlertSuccess("Your Account has been deleted");
  }
}
