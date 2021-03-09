import ServiceBase from "./ServiceBase";
import APIState from "../APIState";

/**
 * Contact Service for the Application.
 * */
export default class ContactService extends ServiceBase {
  /**
   * Creates the Contact Service
   *
   * @param {APIState} state State Object
   */
  constructor(state) {
    super(state);
  }

  ContactUs = async request => {
    const req = this.CreateFormRequest(`/contact/us`, request);
    await this.Send(req);
  };

  ReferFriend = async request => {
    const req = this.CreateFormRequest(`/contact/refer`, request);
    await this.Send(req);
  };
}
