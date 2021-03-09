import React, {Component} from "react";
import "./style.scss";

import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import {Checkbox} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {Message} from "semantic-ui-react";
import FormsySelect from "../../../../components/Form/FormsySelect";
import FormsyTextField from "../../../../components/Form/FormsyTextField";

export const RoleList = [
  "Business Owner",
  "HR Manager",
  "HR Administrator",
  "HR Support",
  "Office Manager",
  "CFO",
  "CEO",
  "EA/PA",
  "Other"
];

export default class EmployerMoreDetail extends Component {
  constructor() {
    super();
    this.state = {
      addMailAddressChecked: false,
      role: "",
      error: true
    };
  }

  onaddMailAddressChange = e => {
    this.setState({...this.state, addMailAddressChecked: e.target.value});
  };

  handleShowAddMailingAddress = () => {
    this.setState(prevState => {
      return {addMailAddressChecked: !prevState.addMailAddressChecked};
    });
  };

  handleChange = e => {
    this.setState({...this.state, role: e.target.value});
  };

  render() {
    return (
      <div className="columnForm__wrapper">
        <div className="columnForm__title">
          <h6>More Details</h6>
        </div>
        <div className="columnForm__form">
          <FormsyTextField
            id="reg-company-name"
            name="company.name"
            label="Company Name"
            type="text"
            variant="filled"
            fullWidth
            required
          />
          <FormControl variant="filled" fullWidth>
            <InputLabel htmlFor="registration-type">Choose Your Role</InputLabel>
            <FormsySelect
              id="reg-your-role"
              name="role"
              errorGroup={this.props.errorGroup}>
              {RoleList.map((item, index) => {
                return (
                  <MenuItem value={item} key={index}>
                    {item}
                  </MenuItem>
                );
              })}
            </FormsySelect>
          </FormControl>
          <FormsyTextField
            id="reg-your-phone"
            name="phone"
            label="Your Direct Phone Number"
            type="tel"
            fullWidth
            variant="filled"
            required
          />
          <FormsyTextField
            id="reg-company-phone"
            name="company.phone"
            label="Company Phone Number"
            type="tel"
            fullWidth
            variant="filled"
            required
          />
          <FormsyTextField
            id="reg-company-fax"
            name="company.fax"
            label="Fax"
            type="tel"
            fullWidth
            variant="filled"
          />
          {/* address */}
          <div>
            <FormsyTextField
              id="reg-company-streetaddress"
              name="company.address.streetaddress"
              label="Company Address"
              type="text"
              fullWidth
              variant="filled"
              required
            />
            <div className="formfield-columns">
              <FormsyTextField
                id="reg-company-locality"
                name="company.address.locality"
                label="City / Town"
                type="text"
                fullWidth
                variant="filled"
                required
              />
              <FormsyTextField
                id="reg-company-postcode"
                name="company.address.postcode"
                label="Postcode"
                type="text"
                variant="filled"
                required
              />
            </div>
            <FormsyTextField
              id="reg-company-country"
              name="company.address.streetaddress"
              label="Country"
              type="text"
              variant="filled"
              fullWidth
              required
            />
          </div>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                value="add-mail-address"
                checked={this.state.addMailAddressChecked}
                onChange={this.handleShowAddMailingAddress}
              />
            }
            label="Add Mailing Address"
          />

          {/* Mailing Address - opens when the checkbox checked */}
          {this.state.addMailAddressChecked && (
            <div style={{marginTop: 40}}>
              <div className="flex-horizontal-justify">
                <h6>Mailing Address</h6>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Same as above"
                />
              </div>
              <TextField
                id="reg-company-mail-streetaddress"
                name="company.mailingaddress.streetaddress"
                label="Address"
                type="text"
                fullWidth
                variant="filled"
                required
              />
              <div className="formfield-columns">
                <TextField
                  id="reg-company-mail-locality"
                  name="company.mailingaddress.locality"
                  label="City / Town"
                  type="text"
                  fullWidth
                  variant="filled"
                  required
                />
                <TextField
                  id="reg-company-mail-postcode"
                  name="company.mailingaddress.postcode"
                  label="Postcode"
                  type="text"
                  variant="filled"
                  required
                />
              </div>
              <TextField
                id="reg-company-mail-country"
                name="company.mailingaddress.country"
                label="Country"
                type="text"
                variant="filled"
                fullWidth
                required
              />
            </div>
          )}

          {!this.props.isValid && this.props.getErrors().length > 0 && (
            <Message negative className="errorMessage">
              <Message.Header>
                {this.props.getErrors().map(e => (
                  <div key={e}>{e}</div>
                ))}
              </Message.Header>
            </Message>
          )}
        </div>
      </div>
    );
  }
}
