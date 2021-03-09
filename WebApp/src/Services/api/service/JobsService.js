import ServiceBase from "./ServiceBase";
import APIState from "../APIState";
import PageInfo from "../models/PageInfo";

/**
 * Jobs Service for the Application.
 * */
export default class JobsService extends ServiceBase {
  /**
   * Creates the Jobs Service
   *
   * @param {APIState} state State Object
   */
  constructor(state) {
    super(state);
  }

  /**
   * Get Available Job Categories.
   */
  async GetCategories() {
    const req = this.CreateRequest(`/jobs/categories`);
    const response = await this.Send(req);
    return response && response.json();
  }

  /**
   * Get Available Job Filters.
   */
  async GetFilters() {
    const req = this.CreateRequest(`/jobs/filters`);
    const response = await this.Send(req);
    return response && response.json();
  }

  /**
   * Gets the Jobs for the Jobs Board.
   */
  async GetJobs(filters = {}, page = 0, pageSize = 15) {
    filters["page"] = page;
    filters["size"] = pageSize;
    const options = {queries: filters, includeNull: true, arrayKeys: true};

    const req = this.CreateRequest(`/jobs`, options);
    const response = await this.Send(req);
    return new PageInfo(response && (await response.json()));
  }

  /**
   * Get an Entry by ID.
   *
   * @param {string} id
   */
  async GetJob(id) {
    const req = this.CreateRequest(`/jobs/${id}`);
    const response = await this.Send(req);
    return response && response.json();
  }

  /**
   * Submits a CV to White Collar Blue.
   *
   * @param {*} data CV Form Data
   */
  async SubmitCV(data) {
    const req = this.CreateFormRequest(`/jobs/submitcv`, data);
    const response = await this.Send(req);
    return response && response.ok;
  }

  /**
   * Creates a Job Alert Email Subscription.
   *
   * @param {*} data Alert Form Data.
   */
  async CreateJobAlert(data) {
    const req = this.CreateFormRequest(`/jobs/alert`, data, {
      includeNull: true
    });
    const response = await this.Send(req);
    return response && response.ok;
  }

  /**
   * Deletes a Job Alert Subscription.
   *
   * @param {string} id Job ID.
   */
  async DeleteJobAlert(id) {
    const req = this.CreateRequest(`/jobs/alert/${id}`, {
      method: "DELETE"
    });
    const response = await this.Send(req);
    return response && response.ok;
  }
}
