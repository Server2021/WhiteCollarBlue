import APIError from "./APIError";

export default class APIAuthError extends APIError
{
  constructor() {
    super("The provided Email address or Password is incorrect.")
  }
}