import React, {Component} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./JobAlert.scss";
import {FaEnvelope} from "react-icons/fa";
import {MdAddAlert} from "react-icons/md";
import {Message} from "semantic-ui-react";
import FormHandler from "../../../../../components/Form/FormHandler";
import FormsyTextField from "../../../../../components/Form/FormsyTextField";
import {UserErrorMessage} from "../../../../../Utilities/errorHandling";
import {ValidationErrors} from "../../../../../data";
import {MergeObjects} from "../../../../../Utilities";
import {GetJobSearchFilters} from "../../../../../components/JobSearch/JobSearchBar/JobSearchBar";
import App from "../../../../../App";
import Reporter from "../../../../../Services/reporter";
import {fromObj} from "form-data-to-object";

export default class JobAlert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showTerms: false,
      sentAlert: false,
      errored: false,
      error: null,
      isValid: true
    };

    App.Current.OnLoggedIn(() => {
      if (App.Current.CurrentUser) {
        this.loadUserData();
      }
    });
  }

  render() {
    return (
      <div className="alert__container">
        {this.state.sentAlert ? (
          <div className="alert__success">
            <FaEnvelope />
            <p>
              Thank you!
              <br />
              We'll send new jobs to your email.
            </p>
          </div>
        ) : (
          <div>
            <div className="alert__title">
              <FaEnvelope />
              <p>Get a job alert for this search</p>
            </div>
            <FormHandler
              ref="form"
              noValidate={false}
              onSubmit={this.onSubmit}
              onValid={this.onValid}
              onInvalid={this.onInvalid}
              className="alert__form">
              <FormsyTextField
                id="alert_email"
                name="emailaddress"
                label="Enter Your Email"
                type="text"
                fullWidth
                variant="filled"
                required
                onFocus={this.onSelectedEmail}
                validations={{
                  isExisty: true,
                  isEmail: true
                }}
                validationErrors={{
                  isExisty: "Please provide an Email Address.",
                  isEmail: ValidationErrors.validEmailAddress
                }}
              />

              <Button variant="contained" color="primary" size="large" type="submit">
                <MdAddAlert />
                <span>Create a Job Alert</span>
              </Button>
            </FormHandler>

            {this.state.showTerms && (
              <p className="alert__description">
                You can cancel emails at any time. By clicking "Create a Job Alert"
                you agree to WCB’s privacy policy.
              </p>
            )}

            {!this.state.isValid ? (
              <Message negative className="errorMessage">
                <Message.Header>
                  {this.getErrors().map(e => (
                    <div key={e}>{e}</div>
                  ))}
                </Message.Header>
              </Message>
            ) : null}

            {this.state.errored && (
              <Message negative className="errorMessage">
                <Message.Header>{UserErrorMessage(this.state.error)}</Message.Header>
              </Message>
            )}
          </div>
        )}
      </div>
    );
  }

  componentDidMount() {
    this.loadUserData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.setState(
        {
          showTerms: false,
          sentAlert: false,
          errored: false,
          error: null,
          isValid: true
        },
        this.loadUserData
      );
    }
  }

  loadUserData = () => {
    if (this.refs.form) {
      const user = App.Current.CurrentUser;
      if (user) {
        this.refs.form.loadData({emailaddress: user.email});
      }
    }
  };

  onSelectedEmail = () => {
    this.setState({showTerms: true});
  };

  getErrors = (group = null) => {
    return this.refs.form ? this.refs.form.getFormErrors(group) : [];
  };

  onValid = () => {
    this.setState({isValid: true});
  };

  onInvalid = () => {
    this.setState({isValid: false});
  };

  onSubmit = data => {
    const filters = GetJobSearchFilters();
    MergeObjects(data, filters);
    data = fromObj(data);

    App.Current.API.Jobs.CreateJobAlert(data)
      .then(() => {
        this.setState({sentAlert: true});
      })
      .catch(e => {
        Reporter.ReportError(e);
        this.setState({errored: true, error: e});
      });
  };
}
