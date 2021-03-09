import React from "react";
import Formsy from "formsy-react";
import {IsNullOrWhitespace} from "../../Utilities";
import {isNullOrUndefined} from "util";

export default class FormHandler extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Formsy
        ref="form"
        id={this.props.id}
        className={this.props.className}
        noValidate
        onChange={this.props.onChange}
        onValidSubmit={this.props.onSubmit}
        onValid={this.props.onValid}
        onInvalidSubmit={this.props.onInvalid}>
        {this.props.children}

        <button ref="submitButton" type="submit" style={{display: "none"}} />
      </Formsy>
    );
  }

  componentDidMount() {
    if (this.props.preLoad) {
      this.loadData(this.props.preLoad);
    }
  }

  getData() {
    return this.refs.form.getModel();
  }

  loadData(state) {
    this.refs.form.reset(state);
  }

  reset() {
    this.refs.form.reset();
  }

  submit = () => {
    this.refs.submitButton.click();
  };

  getFormErrors(errorGroup = null) {
    const errors = this.refs.form.inputs
      .filter(i => {
        if (errorGroup === "*") {
          return true;
        }

        if (!errorGroup) {
          return !i.props.errorGroup;
        }

        if (i.props.errorGroup == errorGroup) {
          return true;
        }

        return false;
      })
      .map(i => {
        const error = i.getErrorMessage();
        if (error) {
          return error;
        } else {
          const value = i.getValue();
          if (
            isNullOrUndefined(value) &&
            i.props.validations &&
            i.props.validations["isExisty"]
          ) {
            return i.props.validationErrors && i.props.validationErrors["isExisty"];
          } else {
            return null;
          }
        }
      })
      .filter(m => !IsNullOrWhitespace(m));
    return errors;
  }
}
