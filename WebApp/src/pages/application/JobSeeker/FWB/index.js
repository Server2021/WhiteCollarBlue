import React, {Component} from "react";
import Button from "@material-ui/core/Button";

// styles
import "./style.scss";

// components
import FWBBody from "../../../../components/FWB/FWBBody";

// assets
import TermsandConditions from "../../../../assets/TermsandConditionsforReferralBonus.pdf";
import {Message} from "semantic-ui-react";
import App from "../../../../App";
import FormHandler from "../../../../components/Form/FormHandler";
import FormsyTextField from "../../../../components/Form/FormsyTextField";
import {ValidationErrors} from "../../../../data";
import {UserErrorMessage} from "../../../../Utilities/errorHandling";
import {fromObj} from "form-data-to-object";

export default class FWB extends Component {
  state = {
    errored: false,
    error: null,
    isValid: true,
    type: null
  };

  render() {
    return (
      <>
        <div>
          <FWBBody page />
        </div>
        {/* form */}
        <div className="fwb__form">
          <div className="fwb__tnc">
            <a href={TermsandConditions} download>
              Terms & Condition Apply
            </a>
          </div>
          <FormHandler
            ref="form"
            className="registration__form"
            onSubmit={this.onSubmit}
            onValid={this.onValid}
            onInvalid={this.onInvalid}>
            {/* 01. Share Your Friends Details */}
            <div className="columnForm__wrapper">
              <div className="columnForm__title">
                <h6>Share Your Friends Details</h6>
              </div>
              <div className="columnForm__form">
                <div className="formfield-columns--fullWidth">
                  <FormsyTextField
                    id="friends-firstname"
                    name="friend.firstname"
                    errorGroup="friend"
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
                    id="friends-lastname"
                    name="friend.lastname"
                    errorGroup="friend"
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
                  id="friends-email"
                  name="friend.email"
                  errorGroup="friend"
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
                  id="friend-phone"
                  name="friend.phone"
                  errorGroup="friend"
                  label="Contact Number"
                  type="phone"
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
                {!this.state.isValid && this.getErrors("friend").length > 0 && (
                  <Message negative className="errorMessage">
                    <Message.Header>
                      {this.getErrors("friend").map(e => (
                        <div key={e}>{e}</div>
                      ))}
                    </Message.Header>
                  </Message>
                )}
              </div>
            </div>

            {/* 02. Your Details */}
            <div className="columnForm__wrapper">
              <div className="columnForm__title">
                <h6>Your Details</h6>
              </div>
              <div className="columnForm__form">
                <div className="formfield-columns--fullWidth">
                  <FormsyTextField
                    id="your-firstname"
                    name="your.firstname"
                    errorGroup="your"
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
                    id="your-lastname"
                    name="your.lastname"
                    errorGroup="your"
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
                  id="your-email"
                  name="your.email"
                  errorGroup="your"
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
                  id="your-phone"
                  name="your.phone"
                  errorGroup="your"
                  label="Contact Number"
                  type="phone"
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

                {!this.state.isValid && this.getErrors("your").length > 0 && (
                  <Message negative className="errorMessage">
                    <Message.Header>
                      {this.getErrors("your").map(e => (
                        <div key={e}>{e}</div>
                      ))}
                    </Message.Header>
                  </Message>
                )}
              </div>
            </div>

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
                <Message.Header>{UserErrorMessage(this.state.error)}</Message.Header>
              </Message>
            )}

            <div className="fwb__form__submit">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                className="custom-button">
                Submit
              </Button>
            </div>
          </FormHandler>
        </div>
      </>
    );
  }

  componentDidMount() {
    App.Current.SetPageName("Friends with benefits");
  }

  componentWillUnmount() {
    App.Current.SetPageName(null);
  }

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
    const formData = fromObj(data);

    App.Current.API.Contact.ReferFriend(formData)
      .then(() => {
        this.setState({errored: false});
        this.refs.form.reset();
        App.Current.AlertSuccess("We'll contact you soon.");
      })
      .catch(e => this.setState({errored: true, error: e}));
  };
}
