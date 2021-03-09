import ServiceBase from "./ServiceBase";
import APIState from "../APIState";
import {Metadata, DeleteMetadata} from "../../../Utilities";

/**
 * Authentication Service for the Application.
 * */
export default class AuthenticationService extends ServiceBase {
  /**
   * Creates the Authentication Service
   *
   * @param {APIState} state State Object
   */
  constructor(state) {
    super(state);
    state.Authenticator = this;
  }

  /**
   * Login to the Application.
   *
   * @param {string} username
   * @param {string} password
   * @param {boolean} remember
   * @throws {APIAuthError} Authentication Failed
   */
  async login(username, password) {
    const request = this.CreateFormRequest("/authentication/authenticate", {
      username: username,
      password: password
    });

    const response = await this.Send(request);
    if (response && response.ok) {
      const userData = await response.json();
      this.SetUserData(userData);
      return true;
    } else {
      return false;
    }
  }

  /**
   * Checks if the API is Authenticated against the Server
   *
   * @returns {boolean} Authenticated?
   * */
  async authenticated() {
    const request = this.CreateRequest("/authentication/authenticated", {
      method: "HEAD"
    });
    try {
      const response = await this.Send(request);
      return response && response.ok;
    } catch (e) {
      return false;
    }
  }

  /**
   * Logs out of the Application
   * */
  async logout() {
    Metadata("signedIn", false);
    DeleteMetadata("admin");
    DeleteMetadata("firstname");
    DeleteMetadata("lastname");
    DeleteMetadata("email");
    DeleteMetadata("phone");
    DeleteMetadata("registered");
    DeleteMetadata("type");

    const request = this.CreateRequest("/authentication/logout", {
      method: "DELETE"
    });
    await this.Send(request);
  }

  /**
   * Sets the User Data for this Authentication.
   * @param {*} userData
   */
  SetUserData(userData) {
    Metadata("signedIn", true);
    Metadata("admin", userData.admin);
    Metadata("firstname", userData.firstname);
    Metadata("lastname", userData.lastname);
    Metadata("phone", userData.phone);
    Metadata("email", userData.email);
    Metadata("registered", userData.registered);
    Metadata("type", userData.type);
  }
}
