export default class APIError extends Error
{
  constructor(message = null) {
    let customMessage = null;
    if (message == null) {
      message = "An unexpected error occurred, try again later.";
    }
    else{
      customMessage = message;
    }
    super(message);
    this.issue = customMessage;
  }
}