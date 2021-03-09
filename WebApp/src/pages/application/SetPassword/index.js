import React, {Component} from "react";
import style from "./style.module.scss";
import HeroSection from "../../../components/Hero/Hero";
import "../../../components/Hero/Hero.scss";
import BackgroundImage from "../../../assets/bluebg.jpg";

import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";

import {Message} from "semantic-ui-react";
import App from "../../../App";
import FormHandler from "../../../components/Form/FormHandler";
import FormsyTextField from "../../../components/Form/FormsyTextField";
import {UserErrorMessage} from "../../../Utilities/errorHandling";
import ErrorView from "../../../components/ErrorView";

export default class SetPassword extends Component {
  state = {
    isReset: true,
    error: true,
    errored: false,
    error: null,
    isValid: true,
    validated: false,
    failed: false,
    userinfo: null
  };

  render() {
    if (this.state.failed) {
      return <ErrorView errorcode="404" />;
    }
    if (!this.state.validated) {
      return null;
    }

    return (
      <>
        {/* 01. hero */}
        <HeroSection
          backgroundImage={BackgroundImage}
          title={this.state.isReset ? "Reset Password" : "Set Password"}
        />
        {/* 02. body */}
        <section className="body__bg">
          <div className="container-maxwidth body__container">
            {/* article */}
            <article
              className={`body__article body__article--padding ${style.setPassword}`}>
              <FormHandler
                ref="form"
                noValidate={false}
                onSubmit={this.onSubmit}
                onValid={this.onValid}
                onInvalid={this.onInvalid}>
                <h6 className={style.setPassword_description}>
                  {this.state.isReset
                    ? "Please type your new password."
                    : "You're almost there! Set your password and join the WhiteCollarBlue community."}
                </h6>
                <TextField
                  id="set-email"
                  variant="filled"
                  label="Email Address"
                  fullWidth
                  disabled={true}
                  value={this.state.userinfo && this.state.userinfo.email}
                />
                <FormsyTextField
                  id="set-password"
                  name="password"
                  type="password"
                  variant="filled"
                  label={this.state.isReset ? "New Password" : "Password"}
                  fullWidth
                  required
                  validations={{
                    isExisty: true,
                    minLength: 7
                  }}
                  validationErrors={{
                    isExisty: "You must specify a password.",
                    minLength: "Passwords must be a minimum of 7 characters long."
                  }}
                />
                <FormsyTextField
                  id="set-confirmpassword"
                  name="confirm-password"
                  type="password"
                  variant="filled"
                  label="Comfirm Password"
                  fullWidth
                  required
                  validations={{
                    equalsField: "password"
                  }}
                  validationErrors={{
                    equalsField: "Passwords do not match."
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

                <div className={style.actions}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    className="custom-button">
                    {this.state.isReset ? "Reset Password" : "Set Password"}
                  </Button>
                </div>
              </FormHandler>
            </article>
          </div>
        </section>
      </>
    );
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    const params = new URLSearchParams(window.location.search);
    this.token = params.get("token");
    this.validate();
  }

  async validate() {
    try {
      const info = await App.Current.API.User.GetUserFromToken(this.token);
      if (info == null) {
        throw new Error();
      }

      this.setState({
        validated: true,
        userinfo: info,
        isReset: info.registered
      });
    } catch (e) {
      this.setState({failed: true});
    }
  }

  getErrors = () => {
    return this.refs.form && this.refs.form.getFormErrors();
  };

  onSubmit = data => {
    App.Current.API.User.SetPassword(this.token, data)
      .then(() => {
        App.Current.API.Authentication.SetUserData(this.state.userinfo);
        App.Current.LoginSuccessful();
        App.Current.Navigate("/");
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
}
