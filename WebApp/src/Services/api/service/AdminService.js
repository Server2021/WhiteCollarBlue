import ServiceBase from "./ServiceBase";
import APIState from "../APIState";
import PageInfo from "../models/PageInfo";

/**
 * Administration Service for the Application.
 * */
export default class AdminService extends ServiceBase {
  /**
   * Creates the Administration Service
   *
   * @param {APIState} state State Object
   */
  constructor(state) {
    super(state);
  }

  async GetCategorizationInfo() {
    const req = this.CreateRequest(`/admin/categorizationinfo`);
    const response = await this.Send(req);
    return response && response.json();
  }

  async CreateKnowledgeBaseEntry(data) {
    const req = this.CreateFormRequest(`/admin/knowledgebase/add`, data);
    const response = await this.Send(req);
    return response && response.ok;
  }

  async UpdateKnowledgeBaseEntry(id, data) {
    const req = this.CreateFormRequest(`/admin/knowledgebase/${id}`, data);
    const response = await this.Send(req);
    return response && response.ok;
  }

  async GetJobSeekers(page = 0) {
    const req = this.CreateRequest(`/admin/jobseekers`, {
      queries: {page: page}
    });
    const response = await this.Send(req);
    return new PageInfo(response && (await response.json()));
  }

  async GetRecentCVs(page = 0, search = null) {
    const options = {queries: {page: page}};
    if (search) {
      options.queries["search"] = search;
    }

    const req = this.CreateRequest(`/admin/cv/recent`, options);
    const response = await this.Send(req);
    return new PageInfo(response && (await response.json()));
  }

  async GetEmployerRequests(page = 0, search = null) {
    const options = {queries: {page: page}};
    if (search) {
      options.queries["search"] = search;
    }

    const req = this.CreateRequest(`/admin/employers/requests`, options);
    const response = await this.Send(req);
    return new PageInfo(response && (await response.json()));
  }

  async GetCompanies(page = 0, search = null) {
    const options = {queries: {page: page}};
    if (search) {
      options.queries["search"] = search;
    }

    const req = this.CreateRequest(`/admin/employers/companies`, options);
    const response = await this.Send(req);
    return new PageInfo(response && (await response.json()));
  }

  async GetCompanyContacts(page = 0, search = null) {
    const options = {queries: {page: page}};
    if (search) {
      options.queries["search"] = search;
    }

    const req = this.CreateRequest(`/admin/employers/contacts`, options);
    const response = await this.Send(req);
    return new PageInfo(response && (await response.json()));
  }

  async AccountInfo(id = null) {
    let url = `/admin/account`;
    if (id) {
      url += `/${id}`;
    }

    const req = this.CreateRequest(url);
    const response = await this.Send(req);
    return response && response.json();
  }

  async GetUserCVs(page = 0, id = null) {
    let url = `/admin/cv`;
    if (id) {
      url += `/${id}`;
    }

    const req = this.CreateRequest(url, {queries: {page: page}});
    const response = await this.Send(req);
    return new PageInfo(response && (await response.json()));
  }

  async GetUserApplications(page = 0, id = null) {
    let url = `/admin/applications`;
    if (id) {
      url += `/${id}`;
    }

    const req = this.CreateRequest(url, {queries: {page: page}});
    const response = await this.Send(req);
    return new PageInfo(response && (await response.json()));
  }

  async DeleteAccount(id = null) {
    let url = `/admin/account`;
    if (id) {
      url += `/${id}`;
    }

    const req = this.CreateRequest(url, {method: "DELETE"});
    const response = await this.Send(req);
    return response && response.ok;
  }

  GetCVSubmissionUrl(id) {
    return `/admin/view/cv/${id}`;
  }
}
