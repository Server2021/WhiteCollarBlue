import React from "react";
import {withFormsy} from "formsy-react";
import Select from "@material-ui/core/Select";
import {FilledInput} from "@material-ui/core";
import {isFunction} from "util";

class FormsySelect extends React.Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue = event => {
    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form
    // Important: Don't skip this step. This pattern is required
    // for Formsy to work.
    const value = event.target.value;
    this.props.setValue(value);

    if (this.props.onChange) {
      this.props.onChange(value);
    }
  };

  render() {
    const value = this.props.getValue() || (this.props.multiple ? [] : null);
    const {props} = this;

    return (
      <Select
        input={<FilledInput id={props.id} name={props.name} />}
        onChange={this.changeValue}
        multiple={this.props.multiple}
        value={value}
        renderValue={this.props.renderValue}
        formNoValidate
        MenuProps={this.props.MenuProps}
        disabled={this.props.disabled}>
        {/* Add Logical Props to the Form Option elements */}
        {this.props.children.map(child => {
          if (child) {
            const isSelected = childValue => {
              if (this.props.multiple) {
                return value && value.includes(childValue);
              } else {
                return childValue == value;
              }
            };

            if (isFunction(child)) {
              return child({isSelected: isSelected});
            } else {
              return child;
            }
          }
          return null;
        })}
      </Select>
    );
  }
}

export default withFormsy(FormsySelect);
