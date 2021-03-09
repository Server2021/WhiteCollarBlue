import ServiceBase from "./ServiceBase";
import APIState from "../APIState";
import APIAuthError from "../error/APIAuthError";

/**
 * User Service for the Application.
 * */
export default class UserService extends ServiceBase {
  /**
   * Creates the User Service
   *
   * @param {APIState} state State Object
   */
  constructor(state) {
    super(state);
  }

  async SignUp(request) {
    const req = this.CreateFormRequest(`/user/signup`, request);
    await this.Send(req);
  }

  async GetUserFromToken(token) {
    const req = this.CreateRequest(`/user/token/${token}`);
    const response = await this.Send(req);
    return response && response.json();
  }

  async ForgotPassword(data) {
    const req = this.CreateFormRequest(`/user/forgotpassword`, data);
    const response = await this.Send(req);
    return response && response.ok;
  }

  async SetPassword(token, data) {
    const req = this.CreateFormRequest(`/user/setpassword/${token}`, data);
    const response = await this.Send(req);
    return response && response.ok;
  }
}
