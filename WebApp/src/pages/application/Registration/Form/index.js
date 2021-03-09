import React, {Component} from "react";
import "./style.scss";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import EmployerMoreDetail from "./employer";
import {Message} from "semantic-ui-react";
import App from "../../../../App";
import FormHandler from "../../../../components/Form/FormHandler";
import FormsySelect from "../../../../components/Form/FormsySelect";
import FormsyTextField from "../../../../components/Form/FormsyTextField";
import {ValidationErrors} from "../../../../data";
import {UserErrorMessage} from "../../../../Utilities/errorHandling";

export default class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    App.Current.OnLoggedIn(() => {
      App.Current.Navigate("/");
    });
  }

  state = {
    errored: false,
    error: null,
    isValid: true,
    type: null
  };

  onTypeChanged = value => {
    this.setState({type: value});
  };

  render() {
    return (
      <>
        <FormHandler
          ref="form"
          className="registration__form"
          onSubmit={this.onSubmit}
          onValid={this.onValid}
          onInvalid={this.onInvalid}>
          {/* 01. I am (Registration Type) */}
          <div className="columnForm__wrapper">
            <div className="columnForm__title">
              <h6>I am</h6>
            </div>
            <div className="columnForm__form">
              <FormControl variant="filled" fullWidth>
                <InputLabel htmlFor="registration-type">
                  Choose Registration Type *
                </InputLabel>
                <FormsySelect
                  id="registration-type"
                  name="type"
                  onChange={this.onTypeChanged}
                  validations={{
                    isExisty: true
                  }}>
                  <MenuItem value="JobSeeker">A Job Seeker</MenuItem>
                  <MenuItem value="Employer" disabled={true}>
                    An Employer
                  </MenuItem>
                </FormsySelect>
              </FormControl>
            </div>
          </div>

          {/* 02. Registration Details */}
          <div className="columnForm__wrapper">
            <div className="columnForm__title">
              <h6>Registration Details</h6>
            </div>
            <div className="columnForm__form">
              <div className="formfield-columns--fullWidth">
                <FormsyTextField
                  id="reg-firstname"
                  name="firstname"
                  errorGroup="details"
                  label="First Name"
                  type="text"
                  fullWidth
                  variant="filled"
                  required
                  validations={{
                    isExisty: true
                  }}
                />
                <FormsyTextField
                  id="reg-lastname"
                  name="surname"
                  errorGroup="details"
                  label="Last Name"
                  type="text"
                  fullWidth
                  variant="filled"
                  required
                  validations={{
                    isExisty: true
                  }}
                />
              </div>
              <FormsyTextField
                id="reg-email"
                name="email"
                errorGroup="details"
                label="Email Address"
                type="email"
                fullWidth
                variant="filled"
                required
                validations={{
                  isExisty: true,
                  isEmail: true
                }}
                validationErrors={{
                  isEmail: ValidationErrors.validEmailAddress
                }}
              />
              <FormsyTextField
                id="reg-email-confirm"
                name="confirm-email"
                errorGroup="details"
                label="Confirm Email Address"
                type="email"
                fullWidth
                variant="filled"
                required
                validations={{
                  equalsField: "email"
                }}
                validationErrors={{
                  equalsField:
                    "The specified confirmation Email Address does not match."
                }}
              />

              <FormsyTextField
                id="reg-phone"
                name="phone"
                errorGroup="details"
                label="Phone"
                type="tel"
                fullWidth
                variant="filled"
                required
                validations={{
                  isExisty: true,
                  isPhone: true
                }}
                validationErrors={{
                  isPhone: ValidationErrors.validPhoneNumber
                }}
              />

              {!this.state.isValid && this.getErrors("details").length > 0 && (
                <Message negative className="errorMessage">
                  <Message.Header>
                    {this.getErrors("details").map(e => (
                      <div key={e}>{e}</div>
                    ))}
                  </Message.Header>
                </Message>
              )}
            </div>
          </div>

          {/* 04. More Details - Employer */}
          {this.state.type === "Employer" && (
            <EmployerMoreDetail
              errorGroup="employer"
              isValid={this.state.isValid}
              getErrors={() => this.getErrors("employer")}
            />
          )}

          {!this.state.isValid && (
            <Message negative className="errorMessage">
              <Message.Header>
                {this.getErrors().length === 0 && (
                  <div>All fields marked with an asterix must be filled out.</div>
                )}
                {this.getErrors().map(e => (
                  <div key={e}>{e}</div>
                ))}
              </Message.Header>
            </Message>
          )}

          {this.state.errored && (
            <Message negative className="errorMessage">
              <Message.Header>{this.getAPIError()}</Message.Header>
            </Message>
          )}

          <div className="registration__form__submit">
            <Button
              variant="contained"
              color="primary"
              size="large"
              className="custom-button"
              type="submit">
              Submit
            </Button>
          </div>
        </FormHandler>
      </>
    );
  }

  getAPIError() {
    const error = this.state.error;
    if (error.message == "The provided Email address or Password is incorrect.") {
      const data = this.refs.form.getData();
      return (
        <>
          That email is already associated with a WhiteCollarBlue user account.
          <br />
          Do you want to{" "}
          <a href="#" onClick={() => this.sendResetPassword(data.email)}>
            reset your password?
          </a>
        </>
      );
    }
    return UserErrorMessage(error);
  }

  sendResetPassword = email => {
    App.Current.API.User.ForgotPassword({emailaddress: email})
      .then(() => {
        App.Current.AlertSuccess("Password reset Email has been sent.");
      })
      .catch(e => {
        console.log(e);
        App.Current.Alert(UserErrorMessage(e));
      });
  };

  getErrors = (group = null) => {
    return this.refs.form && this.refs.form.getFormErrors(group);
  };

  onValid = () => {
    this.setState({isValid: true});
  };

  onInvalid = () => {
    this.setState({isValid: false});
  };

  onSubmit = data => {
    App.Current.API.User.SignUp(data)
      .then(() => {
        App.Current.Navigate("/");
        App.Current.AlertSuccess(
          "Confirmation Email has been sent.\nYou might need to check your Spam Folder."
        );
      })
      .catch(e => this.setState({errored: true, error: e}));
  };
}
