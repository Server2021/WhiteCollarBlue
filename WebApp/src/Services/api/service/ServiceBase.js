import APIState from "../APIState";
import APIAuthError from "../error/APIAuthError";
import APIError from "../error/APIError";
import {isNullOrUndefined} from "util";

/** Base Service for Requests */
export default class ServiceBase {
  /**
   * Creates the Service Base
   *
   * @param {APIState} state State Object
   */
  constructor(state) {
    /**
     * API state
     *
     * @typedef {APIState}
     * */
    this.state = state;

    /**
     * Override Service root path.
     */
    this.RootPath = null;
  }

  MakeAbsolute = url => {
    if (!isNullOrUndefined(this.RootPath)) {
      return this.RootPath + url;
    } else {
      return this.state.MakeAbsolute(url);
    }
  };

  /**
   * Creates a Form Data Request.
   *
   * @param {*} url Url Endpoint for API.
   * @param {*} request Request Data
   * @param {*} options Options for the Request
   */
  CreateFormRequest = (url, request, options = null) => {
    if (!options) {
      options = {};
    }

    const includeNull = options.includeNull || false;
    const requestData = new FormData();
    Object.keys(request).forEach(key => {
      const value = request[key];
      if (isNullOrUndefined(value) && !includeNull) {
        return;
      }

      //Json stringify array for FormData.
      if (Array.isArray(value)) {
        value.forEach(subVal => {
          requestData.append(key, subVal);
        });
      } else {
        requestData.append(key, value);
      }
    });

    options["body"] = requestData;
    if (!options.method) {
      options["method"] = "POST";
    }

    return this.CreateRequest(url, options);
  };

  /**
   * Gets the URL for an Endpoint
   *
   * @param {string} url Url Endpoint for API.
   * @param {object} options Options for the Request
   * @returns {Request} Request Object
   */
  CreateRequest = (url, options = null, relative = true) => {
    // Make absolute if relative.
    if (relative) {
      url = this.MakeAbsolute(url);
    }

    if (!options) {
      options = {};
    }

    // Get Queries.
    const includeNull = options.includeNull || false;
    const arrayKeys = options.arrayKeys || false;
    const queries = options.queries != null ? options.queries : {};

    const queryNames = Object.keys(queries || {});
    if (queryNames.length > 0) {
      let queryStr = "";

      // For each Key
      queryNames.forEach(query => {
        const key = encodeURIComponent(query);
        const value = queries[query];

        // Iterate over sub values if array, otherwise set value.
        if (Array.isArray(value)) {
          value.forEach(val => {
            if (val != null || includeNull) {
              let arrayKey = arrayKeys ? key + "[]" : key;
              queryStr += `&${arrayKey}=${encodeURIComponent(val)}`;
            }
          });
        } else if (value != null || includeNull) {
          queryStr += `&${key}=${encodeURIComponent(value)}`;
        }
      });

      queryStr = "?" + queryStr.substring(1, queryStr.length);
      url += queryStr;
    }

    let headers = options["headers"];
    if (!headers) {
      headers = {};
      options["headers"] = headers;
    }
    headers["site"] = "whitecollarblue";
    return new Request(url, options);
  };

  /**
   * Sends the Request.
   *
   * @param {Request} request Request Object
   * @returns {Promise<Response>} Response
   */
  Send = async request => {
    const response = await fetch(request);
    let message = null;

    switch (response.status) {
      case 200:
        return response;

      case 401:
        throw new APIAuthError();
    }

    message = await response.text();
    console.log(message);
    throw new APIError(message);
  };
}
