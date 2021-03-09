import AuthenticationService from "./service/AuthenticationService";

export default class APIState {
  constructor() {
    this.Authenticated = false;

    /**
     * @typedef {AuthenticationService}
     * */
    this.Authenticator = null;

    /**
     * Remember Credentials?
     *
     * @typedef {boolean}
     * */
    this.Remember = false;

    /**
     * @type {string} The Url Root of the Backend.
     */
    this.UrlRoot = "";

    /**
     * @type {string} The Url Root of the API.
     */
    this.APIRoot = `${this.UrlRoot}/api`;
  }

  /**
   * Makes an absolute Url.
   * @param {String} url
   */
  MakeAbsolute(url) {
    return this.APIRoot + url;
  }
}
