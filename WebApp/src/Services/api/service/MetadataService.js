import ServiceBase from "./ServiceBase";
import APIState from "../APIState";

/**
 * Metadata for this application.
 * */
export default class MetadataService extends ServiceBase {
  /**
   * Creates the Administration Service
   *
   * @param {APIState} state State Object
   */
  constructor(state) {
    super(state);

    // The Asset Root path.
    this.RootPath = this.state.UrlRoot;
  }

  async GetMetadata() {
    const req = this.CreateRequest(`/metadata`);
    const response = await this.Send(req);
    return response && response.json();
  }
}
