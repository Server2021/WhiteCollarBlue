import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import {Link} from "react-router-dom";
import Padlock from "../../assets/icons/padlock.svg";
import {MdClose} from "react-icons/md";

import {Message} from "semantic-ui-react";
import "./LoginModal.scss";
import App from "../../App";
import FormHandler from "../Form/FormHandler";
import {ValidationErrors} from "../../data";
import {UserErrorMessage} from "../../Utilities/errorHandling";
import FormsyTextField from "../Form/FormsyTextField";

export default class LoginModal extends Component {
  state = {
    isOpen: this.props.isOpen || false,
    error: true,
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

          {/* { <div className="login-title">
            <img src={Padlock} alt="login" />
            <span>Login</span>
          </div> } */}
        
          <FormHandler
            ref="form"
            noValidate={false}
            onSubmit={this.onSubmit}
            onValid={this.onValid}
            onInvalid={this.onInvalid}>
              <iframe src="https://whitecollarblue.vincere.io/careers/candidate/login" width="500px" height="750px"></iframe>
            {/* <DialogContent>
              <FormsyTextField
                id="login-email"
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
                id="login-password"
                name="password"
                type="password"
                variant="filled"
                label="Password"
                fullWidth
                required
                validations={{
                  isExisty: true
                }}
                validationErrors={{
                  isExisty: "Please provide a Password."
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
            </DialogContent> */}

            {/* <DialogActions className="modal-action">
              <div className="modal-action__top">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  className="custom-button">
                  Login
                </Button>
                <Link to="/registration">
                  <Button
                    type="button"
                    variant="outlined"
                    color="primary"
                    size="large"
                    className="custom-button"
                    onClick={this.close}>
                    Register
                  </Button>
                </Link>
              </div>
              <div className="modal-action__bottom">
                <Button
                  type="button"
                  color="primary"
                  size="large"
                  className="custom-button"
                  onClick={this.forgotPassword}>
                  Forgot Password?
                </Button>
              </div>
            </DialogActions> */}
          </FormHandler> 
        </Dialog>
      </div>
    );
  }

  getErrors = () => {
    return this.refs.form && this.refs.form.getFormErrors();
  };

  onSubmit = data => {
    App.Current.API.Authentication.login(data.email, data.password)
      .then(() => {
        this.close();
        App.Current.LoginSuccessful();
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

  forgotPassword = () => {
    this.close();
    App.Current.RequestForgotPassword();
  };

  close = () => {
    this.refs.form.reset();
    this.setState({isOpen: false, errored: false});
  };
}
