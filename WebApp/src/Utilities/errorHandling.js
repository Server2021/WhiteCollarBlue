import {isNullOrUndefined} from "util";
import {IsNullOrWhitespace} from ".";
import {RequestErrors} from "../data";
import APIError from "../Services/api/error/APIError";

export function UserErrorMessage(error, defaultMessage = null) {
  let message = defaultMessage;
  if (isNullOrUndefined(defaultMessage)) {
    message = RequestErrors.UnknownError;
  }

  if (typeof error == "string") {
    message = error;
  }

  if (error instanceof APIError) {
    if (error.statuscode >= 501 && error.statuscode < 600) {
      message = RequestErrors.TemporaryError;
    } else if (!IsNullOrWhitespace(error.message)) {
      message = error.message;
    }
  }

  if (!message) {
    message = RequestErrors.UnknownError;
  }

  return message;
}
