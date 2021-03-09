import React from "react";
import FormHandler from "../Form/FormHandler";
import FormsyTextField from "../Form/FormsyTextField";
import App from "../../App";
import {ValidationErrors} from "../../data";
import FileUploadInput from "../Form/FileUploadInput/FileUploadInput";
import {Message} from "semantic-ui-react";
import Button from "@material-ui/core/Button";
import {UserErrorMessage} from "../../Utilities/errorHandling";

export default class CVSubmission extends React.Component {
  state = {
    errored: false,
    error: null,
    isValid: true,
    fileTypes: null,
    maxUploadSize: null
  };

  render() {
    return (
      <FormHandler
        ref="form"
        noValidate={false}
        onSubmit={this.onSubmit}
        onValid={this.onValid}
        onInvalid={this.onInvalid}>
        <div className="formfield-columns--fullWidth">
          <FormsyTextField
            id="cv-firstname"
            name="firstname"
            label="First Name"
            type="name"
            fullWidth
            variant="filled"
            required
            validations={{
              isExisty: true
            }}
            validationErrors={{
              isExisty: "Please provide your First name."
            }}
          />
          <FormsyTextField
            id="cv-surname"
            name="surname"
            label="Surname"
            type="name"
            fullWidth
            variant="filled"
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
          id="cv-email"
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
          id="cv-phone"
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
        <FileUploadInput
          id="cv-file"
          name="cv-file"
          message="Upload your CV *"
          buttonName="Select a CV"
          fileTypes={this.state.fileTypes}
          maxFileSize={this.state.maxUploadSize}
          validations={{
            isExisty: true
          }}
          validationErrors={{
            isExisty: "Please upload a CV."
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
            <Message.Header>{UserErrorMessage(this.state.error)}</Message.Header>
          </Message>
        )}

        {!this.props.hideButton && (
          <div className="submit-cv__submit">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              className="custom-button">
              Submit
            </Button>
          </div>
        )}
      </FormHandler>
    );
  }

  componentDidMount() {
    Promise.resolve(App.Current.Info).then(info => {
      this.setState({
        fileTypes: info.file_types.cv_upload,
        maxUploadSize: info.maxUploadSize
      });
    });

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

  getErrors = () => {
    return this.refs.form && this.refs.form.getFormErrors();
  };

  submit = () => {
    this.refs.form && this.refs.form.submit();
  };

  onSubmit = data => {
    if (this.props.onSubmitData) {
      this.props.onSubmitData(data);
    }

    App.Current.API.Jobs.SubmitCV(data)
      .then(() => {
        App.Current.AlertSuccess("We'll contact you soon.");
        this.refs.form.reset();
        this.setState({errored: false});

        if (this.props.onSubmitted) {
          this.props.onSubmitted();
        }
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
