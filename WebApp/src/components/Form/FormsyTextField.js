import React from "react";
import {withFormsy} from "formsy-react";
import {TextField} from "@material-ui/core";

class FormsyTextField extends React.Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(event) {
    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form
    // Important: Don't skip this step. This pattern is required
    // for Formsy to work.
    const val = event.target.value;
    this.props.setValue(val);

    if (this.props.onChange) {
      this.props.onChange(val);
    }
  }

  render() {
    const value = this.props.getValue() || "";
    const {props} = this;

    return (
      <TextField
        id={props.id}
        name={props.name}
        type={props.type}
        variant={props.variant}
        label={props.label}
        hiddenLabel={props.hiddenLabel}
        margin={props.margin}
        multiline={props.multiline}
        rows={props.rows}
        placeholder={props.placeholder}
        className={props.className}
        fullWidth={props.fullWidth}
        required={props.required}
        InputProps={props.InputProps}
        onChange={this.changeValue}
        value={value}>
        {this.props.children}
      </TextField>
    );
  }
}

export default withFormsy(FormsyTextField);
