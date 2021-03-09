import React, {Component} from "react";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import AccountTable from "../AccountTable";
import App from "../../../../../App";
import LoadingSpinner from "../../../../../components/LoadingSpinner/LoadingSpinner";
import {DeleteAccountModal} from "../DeleteAccountModal";
import ErrorView from "../../../../../components/ErrorView";
import {UserErrorMessage} from "../../../../../Utilities/errorHandling";

export default class AccountInfo extends Component {
  state = {
    loading: true,
    errored: false,
    error: null,
    user: null
  };

  currentUser = App.Current.CurrentUser;

  render() {
    if (this.state.loading) {
      return <LoadingSpinner />;
    }

    if (this.state.errored) {
      return <ErrorView message={UserErrorMessage(this.state.error)} />;
    }

    const user = this.state.user;
    const accountData = {
      Name: (user.firstname + " " + user.lastname).trim(),
      Email: user.email,
      "Contact Number": user.phone || "None",
      LinkedIn: user.linkedInId ? (
        <a
          href={`https://www.linkedin.com/in/${user.linkedInId}`}
          target="_blank"
          rel="noopener noreferrer">
          View
        </a>
      ) : (
        "None"
      )
    };

    return (
      <>
        {this.state.loading && <LoadingSpinner />}
        {!this.state.loading && (
          <div className="admin-container--withAside">
            <div>
              <AccountTable data={accountData} />
            </div>
            {/*             <div>
              <aside className="admin-actions--right">
                {this.getAdminActions()}
              </aside>
            </div> */}
          </div>
        )}

        <DeleteAccountModal
          title="Success!"
          message="Your Request has been sent and we will be in touch soon."
          button="Okay"
        />
      </>
    );
  }

  getAdminActions() {
    const userID = this.getUserID();
    const user = this.state.user;

    if (userID !== this.currentUser.id) {
      if (user.type === "Employer") {
        return (
          <>
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
              className="custom-button">
              Send a password reset
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              className="custom-button"
              onClick={this.handleOpen}>
              Deactivate Account
            </Button>
          </>
        );
      } else {
        return (
          <>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className="custom-button">
              Request a Testimonial
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              className="custom-button">
              Edit Job Seeker Detail
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              className="custom-button">
              Send a password reset
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              className="custom-button"
              onClick={this.handleOpen}>
              Deactivate the account
            </Button>
          </>
        );
      }
    } else {
      return (
        <>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className="custom-button">
            Edit
          </Button>
          <Link to="/setpassword">
            <Button
              variant="outlined"
              color="primary"
              size="large"
              className="custom-button">
              Change Password
            </Button>
          </Link>
          {!user.admin && (
            <Button
              variant="outlined"
              color="primary"
              size="large"
              className="custom-button">
              Delete Account
            </Button>
          )}
        </>
      );
    }
  }

  componentDidMount() {
    this.getInfo();
  }

  getInfo() {
    const userID = this.getUserID(true);
    App.Current.API.Administration.AccountInfo(userID)
      .then(user => this.setState({user: user, loading: false}))
      .catch(e => this.setState({errored: true, error: e, loading: false}));
  }

  getUserID(forRequest = false) {
    const userID = this.props.id || null;
    if (!forRequest && !userID) {
      return App.Current.CurrentUser.id;
    }
    return userID;
  }

  deleteSuccess() {
    App.Current.AlertSuccess("Your Account has been deleted");
  }
}
