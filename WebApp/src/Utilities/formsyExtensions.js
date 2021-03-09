import {addValidationRule} from "formsy-react";
import {IsNullOrWhitespace} from ".";

export function ExtendFormsy() {
  addValidationRule("hasValue", function(values, value) {
    return !IsNullOrWhitespace(value);
  });

  addValidationRule("isPhone", function(values, value) {
    if (IsNullOrWhitespace(value)) {
      return false;
    }

    return value.match(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    );
  });
}
