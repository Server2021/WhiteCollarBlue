import React, {Component} from "react";
import PropTypes from "prop-types";
import "./style.scss";

import Button from "@material-ui/core/Button";
import SubtitleWithLine from "../../../components/SubtitleWithLine/SubtitleWithLine";

// image
import Logo from "../../../assets/logo.png";
import {Message} from "semantic-ui-react";
import FormHandler from "../../../components/Form/FormHandler";
import FormsyTextField from "../../../components/Form/FormsyTextField";
import App from "../../../App";
import {ValidationErrors} from "../../../data";
import {UserErrorMessage} from "../../../Utilities/errorHandling";

export default class ContactContent extends Component {
  state = {
    errored: false,
    error: null,
    isValid: true
  };

  render() {
    return (
      <div className="contact__contents">
        {/* contact info */}
        <div className="contact__contact-info">
          {/* logo */}
          <img src={Logo} alt="wcb-logo" className="contact__logo" />
          <h3>
            WhiteCollarBlue <span>{this.props.city}</span>
          </h3>
          <p>{this.props.address}</p>
          <br />
          {this.props.phone && <p>Ph: {this.props.phone}</p>}
          {this.props.fax && (
            <div>
              <p>Fax: {this.props.fax}</p>
            </div>
          )}
          {this.props.email && (
            <div>
              <p>Email: {this.props.email}</p>
              <br />
            </div>
          )}
          <p>
            <b>{this.props.chief}</b>
          </p>
          <p>{this.props.chiefRole}</p>
          {this.props.chiefPhone && <p>Ph: {this.props.chiefPhone}</p>}
          {this.props.chiefEmail && <p>Email: {this.props.chiefEmail}</p>}
        </div>
        {/* form */}
        <div className="contact__form-container">
          <SubtitleWithLine
            title={`Get in touch with the ${this.props.city} office`}
          />
          <div className="contact__form">
            <FormHandler
              ref="form"
              onSubmit={this.onSubmit}
              onValid={this.onValid}
              onInvalid={this.onInvalid}>
              <div className="formfield-columns--fullWidth">
                <FormsyTextField
                  id="firstname"
                  name="firstname"
                  label="First Name"
                  type="text"
                  variant="filled"
                  fullWidth
                  required
                  validations={{
                    isExisty: true
                  }}
                  validationErrors={{
                    isExisty: "Please provide your First name."
                  }}
                />
                <FormsyTextField
                  id="surname"
                  name="surname"
                  label="Last Name"
                  type="text"
                  variant="filled"
                  fullWidth
                  required
                  validations={{
                    isExisty: true
                  }}
                  validationErrors={{
                    isExisty: "Please provide your Surname."
                  }}
                />
              </div>
              <FormsyTextField
                id="email"
                name="email"
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
                  isExisty: "Please provide an Email Address.",
                  isEmail: ValidationErrors.validEmailAddress
                }}
              />
              <FormsyTextField
                id="phone"
                name="phone"
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
                  isExisty: "Please provide a Contact Number.",
                  isPhone: ValidationErrors.validPhoneNumber
                }}
              />
              <FormsyTextField
                id="message"
                name="message"
                label="Comments"
                type="text"
                fullWidth
                multiline
                rows="5"
                variant="filled"
              />

              {!this.state.isValid && (
                <Message negative className="errorMessage">
                  <Message.Header>
                    {this.getErrors().map(e => (
                      <div key={e}>{e}</div>
                    ))}
                  </Message.Header>
                </Message>
              )}
              {this.state.errored && (
                <Message negative className="errorMessage">
                  <Message.Header>
                    {UserErrorMessage(this.state.error)}
                  </Message.Header>
                </Message>
              )}

              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                className="custom-button">
                Submit
              </Button>

              <div className="clear-both" />
            </FormHandler>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    App.Current.SetPageName(`Contact ${this.props.city}`);

    if (App.Current.CurrentUser) {
      this.loadUserData(App.Current.CurrentUser);
    } else {
      App.Current.OnLoggedIn(() => {
        if (App.Current.CurrentUser) {
          this.loadUserData(App.Current.CurrentUser);
        }
      });
    }
  }

  loadUserData(user) {
    this.refs.form &&
      this.refs.form.loadData({
        firstname: user.firstname,
        surname: user.lastname,
        email: user.email,
        phone: user.phone
      });
  }

  componentWillUnmount() {
    App.Current.SetPageName(null);
  }

  onSubmit = data => {
    data["location"] = this.props.city;
    App.Current.API.Contact.ContactUs(data)
      .then(() => {
        this.setState({errored: false});
        App.Current.AlertSuccess(
          "Your Request has been sent and we will be in touch soon."
        );

        this.refs.form.reset();
      })
      .catch(e => {
        console.log(e);
        this.setState({errored: true, error: e});
      });
  };

  getErrors = () => {
    return this.refs.form && this.refs.form.getFormErrors();
  };

  onValid = () => {
    this.setState({isValid: true});
  };

  onInvalid = () => {
    this.setState({isValid: false});
  };
}

ContactContent.propTypes = {
  city: PropTypes.string,
  address: PropTypes.string,
  phone: PropTypes.string,
  fax: PropTypes.string,
  chief: PropTypes.string,
  chiefRole: PropTypes.string,
  chiefPhone: PropTypes.string,
  chiefEmail: PropTypes.string
};
