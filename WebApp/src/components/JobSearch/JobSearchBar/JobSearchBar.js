import React, {Component} from "react";

import "./JobSearchBar.scss";

import {FaSearch} from "react-icons/fa";
import {Button, Checkbox} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FormHandler from "../../Form/FormHandler";
import FormsySelect from "../../Form/FormsySelect";
import App from "../../../App";
import FormsyTextField from "../../Form/FormsyTextField";
import {isNullOrUndefined} from "util";

export default class JobSearchBar extends Component {
  constructor() {
    super();
    this.state = {
      show: [false, false],
      value: [20, 37],
      categories: [],
      locations: [],
      loadedFilters: false
    };
  }

  showHandler(num) {
    this.setState(prevState => {
      const newItems = [...prevState.show];
      newItems[num] = !newItems[num];
      return {show: newItems};
    });
  }

  render() {
    const dropdownHeight = 500;
    return (
      <FormHandler ref="form" onSubmit={this.onSubmit} className="jobsearch">
        <div className="jobsearch__top">
          <div className="jobsearch__filters">
            <div className="jobsearch__top__inputDiv">
              <div className="label">What</div>
              <FormsyTextField
                id="jobsearch_search"
                name="search"
                label="Job title or description"
                InputLabelProps={{
                  className: "input-label"
                }}
                type="text"
                variant="filled"
                fullWidth
              />
            </div>
            <div className="jobsearch__top__inputDiv">
              <FormControl variant="filled" fullWidth>
                <InputLabel htmlFor="jobsearch_category">Category</InputLabel>
                <FormsySelect
                  id="jobsearch_category"
                  name="category"
                  multiple
                  disabled={!this.state.loadedFilters}
                  renderValue={selected => {
                    if (selected.length === 1) {
                      return `${selected.length} Category Selected`;
                    }
                    return `${selected.length} Categories Selected`;
                  }}
                  MenuProps={{
                    style: {
                      maxHeight: dropdownHeight
                    }
                  }}>
                  {this.state.categories.map(category => {
                    return ({isSelected}) => (
                      <MenuItem value={category.id} key={category.id}>
                        <Checkbox
                          color="primary"
                          checked={isSelected(category.id)}
                        />
                        {category.name} ({category.total})
                      </MenuItem>
                    );
                  })}
                </FormsySelect>
              </FormControl>
            </div>
            <div className="jobsearch__top__inputDiv">
              <div className="label">Where</div>
              <FormControl variant="filled" fullWidth>
                <InputLabel htmlFor="jobsearch_location">Location</InputLabel>
                <FormsySelect
                  id="jobsearch_location"
                  name="location"
                  multiple
                  disabled={!this.state.loadedFilters}
                  renderValue={selected => {
                    if (selected.length === 1) {
                      return `${selected.length} Location Selected`;
                    }
                    return `${selected.length} Locations Selected`;
                  }}
                  MenuProps={{
                    style: {
                      maxHeight: dropdownHeight
                    }
                  }}>
                  {this.state.locations.map(location => {
                    return ({isSelected}) => {
                      return (
                        <MenuItem
                          key={location.key}
                          value={location.key}
                          style={{alignItems: "flex-start"}}>
                          <Checkbox
                            color="primary"
                            checked={isSelected(location.key)}
                          />
                          <ul style={{marginTop: 6, marginBottom: -6}}>
                            <li>
                              {location.locality} ({location.total})
                            </li>
                            <li style={{color: "#666666", fontSize: 14}}>
                              {location.region}
                            </li>
                          </ul>
                        </MenuItem>
                      );
                    };
                  })}
                </FormsySelect>
              </FormControl>
            </div>

            <Button
              type="submit"
              color="primary"
              variant="contained"
              className="custom-button jobsearch__top__button">
              Find Jobs <FaSearch />
            </Button>
          </div>
          {this.hasFilters() && (
            <div className="jobsearch__clearFilters">
              <Button
                type="button"
                color="primary"
                variant="outlined"
                className="custom-button"
                onClick={this.clearFilters}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>

        {/* <div className="jobsearch__bottom"> */}
        {/* {this.props.moreFilter && (
            <>
              <div className="jobsearch__filter-items">
                <div
                  className="jobsearch__filter-item"
                  onClick={() => this.showHandler(0)}>
                  <span>
                    Any <b>Employment Types</b>
                    <FaChevronDown />
                  </span>
                </div>
                <div
                  className="jobsearch__filter-item"
                  onClick={() => this.showHandler(1)}>
                  <span>
                    Any <b>Pay Range</b>
                    <FaChevronDown />
                  </span>
                </div>
              </div>

              {this.state.show[0] && (
                <div className="jobsearch__filter-items--open">
                  <div>
                    <SemanticButton.Group basic inverted>
                      <SemanticButton size="large">Full time</SemanticButton>
                      <SemanticButton size="large">Part time</SemanticButton>
                      <SemanticButton size="large">
                        Contract/Temporary
                      </SemanticButton>
                      <SemanticButton size="large">Casual/Vacation</SemanticButton>
                    </SemanticButton.Group>
                  </div>
                </div>
              )}

              {this.state.show[1] && (
                <div className="jobsearch__filter-items--open">
                  <SemanticButton.Group basic inverted>
                    <SemanticButton size="large">Hourly</SemanticButton>
                    <SemanticButton size="large">Annually</SemanticButton>
                  </SemanticButton.Group>
                  <RangeSlider />
                </div>
              )}
            </>
          )} */}
        {/* </div> */}
      </FormHandler>
    );
  }

  componentDidMount() {
    this.getFilters();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location && this.refs.form) {
      const currentState = GetJobSearchFilters();
      this.refs.form.loadData(currentState);
    }
  }

  clearFilters = e => {
    e.preventDefault();
    this.onSubmit({});
  };

  hasFilters = () => {
    const filters = this.refs.form ? this.refs.form.getData() : {};
    let hasFilters = false;

    Object.keys(filters).forEach(f => {
      const filter = filters[f];
      if (Array.isArray(filter)) {
        if (!hasFilters) {
          hasFilters = filter.length > 0;
        }
      } else if (!hasFilters) {
        hasFilters = !isNullOrUndefined(filter);
      }

      if (hasFilters) {
        return;
      }
    });

    return hasFilters;
  };

  getFilters = () => {
    App.Current.API.Jobs.GetFilters().then(filters => {
      this.setState({...filters, loadedFilters: true}, () => {
        const currentState = GetJobSearchFilters();
        if (this.refs.form) {
          this.refs.form.loadData(currentState);
        }
      });
    });
  };

  onSubmit = data => {
    const params = new URLSearchParams();
    Object.keys(data).forEach(key => {
      const value = data[key];
      if (!isNullOrUndefined(value)) {
        if (Array.isArray(value)) {
          for (let val of value) {
            params.append(key, val);
          }
        } else {
          params.set(key, value);
        }
      }
    });

    const search = params.toString();
    let url = "/jobseeker/board";
    if (search) {
      url += "?" + search;
    }

    App.Current.Navigate(url);
  };
}

export function GetJobSearchFilters() {
  const filters = {};
  const params = new URLSearchParams(window.location.search);
  const search = params.get("search");
  if (!isNullOrUndefined(search)) {
    filters["search"] = search;
  }

  const categories = params.getAll("category");
  if (!isNullOrUndefined(categories)) {
    filters["category"] = categories.map(c => {
      if (c === "null") {
        return null;
      } else {
        return c;
      }
    });
  }

  const locations = params.getAll("location");
  if (!isNullOrUndefined(locations)) {
    filters["location"] = locations.map(l => {
      if (l === "null") {
        return null;
      } else {
        return l;
      }
    });
  }
  return filters;
}
