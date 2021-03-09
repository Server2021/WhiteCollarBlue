import React, {Component} from "react";
import PropTypes from "prop-types";
import "./FileUploadInput.scss";
import {Button} from "@material-ui/core";
import {withFormsy} from "formsy-react";
import {GetFileType} from "../../../Utilities";
import App from "../../../App";

class FileUploadInput extends Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);

    this.state = {
      message: this.props.message
    };
  }

  render() {
    const value = this.props.getValue();
    const message = value != null ? value.name : this.props.message;

    return (
      <div className="file-upload-input">
        <input
          ref="input"
          type="file"
          id={this.props.id}
          name={this.props.name}
          className="file-upload-input--hide"
          data-multiple-caption={this.props.message}
          onChange={this.handleFile}
          disabled={this.props.disabled}
          accept={this.props.fileTypes && this.props.fileTypes.join(",")}
        />
        <div
          className="file-upload-input--show"
          onClick={() => this.refs.input.click()}>
          <div className="MuiFormControl-root MuiTextField-root">
            <div className="MuiInputBase-root MuiFilledInput-root MuiFilledInput-underline MuiInputBase-formControl">
              <div
                aria-invalid="false"
                className="MuiInputBase-input MuiFilledInput-input">
                {message}
              </div>
            </div>
          </div>
        </div>
        <label
          htmlFor={this.props.id}
          className="file-upload-label file-upload__label">
          <Button
            variant="outlined"
            color="primary"
            className="custom-button"
            component="span">
            {this.props.buttonName}
          </Button>
        </label>
      </div>
    );
  }

  changeValue(file) {
    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form
    // Important: Don't skip this step. This pattern is required
    // for Formsy to work.
    const val = file;
    this.props.setValue(val);

    if (this.props.onChange) {
      this.props.onChange(val);
    }
  }

  handleFile = e => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      const alertTitle = "Couldn't Upload file";

      if (
        this.props.fileTypes &&
        !this.props.fileTypes.includes("." + GetFileType(file.name))
      ) {
        App.Current.Alert(
          alertTitle,
          `The file must be one of ${this.props.fileTypes.join(", ")}`
        );
        return;
      }

      if (this.props.maxFileSize && file.size > this.props.maxFileSize) {
        App.Current.Alert(alertTitle, "The provided file is too large");
        return;
      }

      this.changeValue(file);
    }
  };
}

export default withFormsy(FileUploadInput);

FileUploadInput.propTypes = {
  id: PropTypes.string,
  message: PropTypes.string,
  buttonName: PropTypes.string
};
