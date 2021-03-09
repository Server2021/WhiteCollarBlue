import AuthenticationService from "./service/AuthenticationService";
import APIState from "./APIState";
import UserService from "./service/UserService";
import {Metadata} from "../../Utilities";
import AdminService from "./service/AdminService";
import MetadataService from "./service/MetadataService";
import JobsService from "./service/JobsService";
import ContactService from "./service/ContactService";

/**
 * The API for Interacting with White Collar Blue
 **/
export default class WhiteCollarBlueAPI {
  constructor() {
    /**
     * Internal State
     * @type {APIState}
     * */
    this.State = new APIState();

    /**
     * Application Authentication APIs.
     *
     * @type {AuthenticationService}
     * */
    this.Authentication = new AuthenticationService(this.State);

    /**
     * Application User APIs.
     *
     * @type {UserService}
     */
    this.User = new UserService(this.State);

    /**
     * Job APIs.
     *
     * @type {JobsService}
     */
    this.Jobs = new JobsService(this.State);

    /**
     * Admin APIs.
     *
     * @type {AdminService}
     */
    this.Administration = new AdminService(this.State);

    /**
     * Contact APIs.
     *
     * @type {ContactService}
     */
    this.Contact = new ContactService(this.State);

    /**
     * Metadata APIs
     *
     * @type {MetadataService}
     */
    this.Metadata = new MetadataService(this.State);
  }

  /**
   * Check if authenticated against the Server
   *
   *@returns {boolean}
   **/
  async CheckAuthenticated() {
    return this.Authentication.authenticated();
  }

  /**
   * Is Authenticated?
   * @returns {boolean}
   **/
  get Authenticated() {
    return this.State.Authenticated;
  }

  /**
   * Get the API User
   *
   * @returns {User}
   **/
  get CurrentUser() {
    const signedIn = Metadata("signedIn");
    if (signedIn == "true") {
      return {
        admin: Metadata("admin") == "true",
        email: Metadata("email"),
        firstname: Metadata("firstname"),
        lastname: Metadata("lastname"),
        phone: Metadata("phone"),
        registered: Metadata("registered") == "true",
        type: Metadata("type")
      };
    } else return null;
  }
}
