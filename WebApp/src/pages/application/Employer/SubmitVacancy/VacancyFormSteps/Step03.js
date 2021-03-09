import React, {Component} from "react";

import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FilledInput from "@material-ui/core/FilledInput";
import FormGroup from "@material-ui/core/FormGroup";

import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import {Radio} from "@material-ui/core";

import {InputAdornment, Checkbox, FormControlLabel} from "@material-ui/core";
import FileUploadInput from "../../../../../components/Form/FileUploadInput/FileUploadInput";
import FormHandler from "../../../../../components/Form/FormHandler";

export default class Step03 extends Component {
  constructor() {
    super();
    this.state = {
      payRangeChecked: false,
      message: "Upload a Job Description",
      workCategory: ""
    };
  }

  getUploadedFileName = e => {
    let files = e.target.files,
      value = e.target.value,
      message;
    if (files && files.length > 1) message = `${files.length} files selected`;
    else message = value.split("\\").pop();

    if (message) this.setState({...this.state, message});
  };

  handleChange = e => {
    this.setState({...this.state, workCategory: e.target.value});
  };

  handleShowPayRange = () => {
    this.setState(prevState => {
      return {payRangeChecked: !prevState.payRangeChecked};
    });
  };

  render() {
    return (
      <div className="submit-vacancy__steps">
        <FormHandler ref="form">
          <div className="form-subsection">
            <TextField
              id="job-title"
              label="Job Title"
              type="text"
              fullWidth
              variant="filled"
              required
            />
            <FormControl variant="filled" fullWidth required>
              <InputLabel htmlFor="work-category">Work Category</InputLabel>
              <Select
                value={this.state.workCategory}
                onChange={this.handleChange}
                input={<FilledInput name="work-category" id="work-category" />}>
                <MenuItem value="Electrician">Electrician</MenuItem>
                <MenuItem value="Healthcare">Healthcare</MenuItem>
                <MenuItem value="Industrial">Industrial</MenuItem>
                <MenuItem value="Sales&amp;Marketing">Sales&amp;Marketing</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="form-subsection">
            <h6 className="form-title">Upload a Job description or type here</h6>
            <FileUploadInput
              id="file-upload"
              name="file-upload"
              message="Upload a Job Description"
              buttonName="Select File"
            />
            <TextField
              id="position-description"
              label="Type the position description"
              type="text"
              fullWidth
              variant="filled"
              multiline
              rows="5"
              required
            />
            <div className="formfield-columns">
              <TextField
                id="number-of-position"
                label="Number of Positions"
                type="number"
                variant="filled"
                required
                className="small"
                fullWidth
              />
              <TextField
                id="supervisor-name"
                label="Supervisor Name"
                type="text"
                variant="filled"
                fullWidth
              />
            </div>
          </div>
          <div className="form-subsection">
            <h6 className="form-title">Physical Location</h6>
            <div>
              <TextField
                id="address"
                label="Address"
                type="text"
                fullWidth
                variant="filled"
                required
              />
              <div className="formfield-columns">
                <TextField
                  id="suburb"
                  label="Suburb"
                  type="text"
                  variant="filled"
                  className="small"
                  required
                />
                <TextField
                  id="postcode"
                  label="Postcode"
                  type="text"
                  variant="filled"
                  className="small"
                  required
                />
              </div>
              <div className="formfield-columns">
                <TextField
                  id="state"
                  label="State"
                  type="text"
                  variant="filled"
                  className="small"
                  required
                />
                <TextField
                  id="country"
                  label="Country"
                  type="text"
                  variant="filled"
                  className="small"
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-subsection">
            <h6 className="form-title">Work Date and Time</h6>
            <div className="fieldset-container">
              <FormGroup row>
                <FormControlLabel
                  control={<Checkbox value="" color="primary" />}
                  label="Start ASAP"
                />
                <FormControlLabel
                  control={<Checkbox value="" color="primary" />}
                  label="Start date negotiable"
                />
              </FormGroup>
              <div className="formfield-columns">
                <TextField
                  id="start-date"
                  label="Start Date"
                  type="date"
                  variant="filled"
                  defaultValue="2017-05-24"
                  className="small"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <TextField
                  id="finish-date"
                  label="Finish Date"
                  type="date"
                  variant="filled"
                  defaultValue="2017-05-24"
                  className="small"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </div>
              <div className="formfield-columns">
                <TextField
                  id="start-time"
                  label="Start Time"
                  type="time"
                  variant="filled"
                  className="small"
                  InputLabelProps={{
                    shrink: true
                  }}
                />

                <TextField
                  id="finish-time"
                  label="Finish Time"
                  type="time"
                  variant="filled"
                  className="small"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </div>
              <div className="formfield-columns">
                <TextField
                  id="hours-per-day"
                  label="Hours per day"
                  type="number"
                  variant="filled"
                  className="small"
                  InputLabelProps={{
                    shrink: true
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">Hours</InputAdornment>
                    )
                  }}
                />
                <TextField
                  id="hours-per-week"
                  label="Hours per week"
                  type="number"
                  variant="filled"
                  className="small"
                  InputLabelProps={{
                    shrink: true
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">Hours</InputAdornment>
                    )
                  }}
                />
              </div>
              <div className="fieldset-container">
                <div className="fieldset-row">
                  <FormLabel component="legend">Possible Overtime?</FormLabel>
                  <RadioGroup aria-label="overtime" name="overtime" row>
                    <FormControlLabel
                      value="overtime-yes"
                      control={<Radio color="primary" />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="overtime-no"
                      control={<Radio color="primary" />}
                      label="No"
                    />
                  </RadioGroup>
                </div>
              </div>
            </div>
          </div>
          <div className="form-subsection">
            <h6 className="form-title">Wage</h6>
            <div className="formfield-columns">
              <TextField
                id="hourly-payrate"
                label="Hourly Payrate"
                type="number"
                variant="filled"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="pay-range"
                    color="primary"
                    checked={this.state.payRangeChecked}
                    onChange={this.handleShowPayRange}
                  />
                }
                label="I'd prefer to enter a pay range"
              />
            </div>

            {this.state.payRangeChecked && (
              <div className="fieldset-container">
                <div className="fieldset-row">
                  <FormLabel component="legend">Pay range per hour</FormLabel>
                  <div className="formfield-columns" style={{width: "auto"}}>
                    <TextField
                      id="pay-from"
                      label="From"
                      type="number"
                      variant="filled"
                      className="tiny"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">$</InputAdornment>
                        ),
                        style: {marginRight: 0}
                      }}
                    />
                    <TextField
                      id="pay-to"
                      label="To"
                      type="number"
                      variant="filled"
                      className="tiny"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">$</InputAdornment>
                        ),
                        style: {marginLeft: 0}
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </FormHandler>
      </div>
    );
  }
}
