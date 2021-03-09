import * as Sentry from "@sentry/browser";
import App from "../App";

/**
 * Creates the Reporter for messages and errors.
 */
class Reporter {
  /**
   * Creates the Reporter for messages and errors.
   */
  static Init() {
    Promise.resolve(App.Current.Info).then(info => {
      const sentryDsn = info.sentry_address;
      Reporter.report = sentryDsn != null;

      // Add Sentry if the Sentry Address is provided.
      if (Reporter.report) {
        Sentry.init({
          dsn: sentryDsn
        });
      }
    });
  }

  /**
   * Report an Error
   *
   * @param {*} error Error Data.
   * @param {Object} parameters Parameters to the Error.
   */
  static ReportError(error, parameters) {
    if (!Reporter.report) {
      return;
    }

    Sentry.withScope(scope => {
      Object.keys(parameters).forEach(key => {
        scope.setExtra(key, parameters[key]);
      });
      Sentry.captureException(error);
    });
  }
}

export default Reporter;
