import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Padlock from "../../assets/icons/padlock.svg";
import {MdClose} from "react-icons/md";

import {Message} from "semantic-ui-react";
import "./LoginModal.scss";
import App from "../../App";
import FormHandler from "../Form/FormHandler";
import {UserErrorMessage} from "../../Utilities/errorHandling";
import FormsyTextField from "../Form/FormsyTextField";
import {ValidationErrors} from "../../data";

export default class ForgotPasswordModal extends Component {
  state = {
    isOpen: this.props.isOpen || false,
    errored: false,
    error: null,
    isValid: true
  };

  render() {
    return (
      <div className="login-modal">
        <Dialog
          open={this.state.isOpen}
          onClose={this.close}
          aria-labelledby="form-dialog-title">
          <MdClose onClick={this.close} className="modal-close" />

          <div className="login-title">
            <img src={Padlock} alt="login" />
            <span>Forgot Password?</span>
          </div>

          <FormHandler
            ref="form"
            noValidate={false}
            onSubmit={this.onSubmit}
            onValid={this.onValid}
            onInvalid={this.onInvalid}>
            <DialogContent>
              <FormsyTextField
                id="forgot-email"
                name="emailaddress"
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
                  <Message.Header>
                    {UserErrorMessage(this.state.error)}
                  </Message.Header>
                </Message>
              )}
            </DialogContent>

            <DialogActions className="modal-action">
              <div className="modal-action__top">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  className="custom-button">
                  Submit
                </Button>
                <Button
                  type="button"
                  variant="outlined"
                  color="primary"
                  size="large"
                  className="custom-button"
                  onClick={this.login}>
                  Login Instead
                </Button>
              </div>
            </DialogActions>
          </FormHandler>
        </Dialog>
      </div>
    );
  }

  getErrors = () => {
    return this.refs.form && this.refs.form.getFormErrors();
  };

  onSubmit = data => {
    App.Current.API.User.ForgotPassword(data)
      .then(() => {
        this.close();
        App.Current.AlertSuccess("Reset Password Email Sent.");
      })
      .catch(e => {
        console.log(e);
        this.setState({errored: true, error: e});
      });
  };

  onValid = () => {
    this.setState({isValid: true});
  };

  onInvalid = () => {
    this.setState({isValid: false});
  };

  open = () => {
    this.setState({isOpen: true});
  };

  login = () => {
    this.close();
    App.Current.RequestLogin();
  };

  close = () => {
    this.refs.form.reset();
    this.setState({isOpen: false, errored: false});
  };
}
