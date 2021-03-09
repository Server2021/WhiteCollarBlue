import React, { Component } from "react";

import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import RadioGroup from '@material-ui/core/RadioGroup';
import { FormControl, Radio } from "@material-ui/core";


export default class Step4Permanent extends Component {

    constructor() {
        super();
        this.state = {
            otherAgencyChecked: false,
        };
    }

    render() {
        return (
            <div className="submit-vacancy__steps">
                <form>
                    <div className="form-subsection">
                        <FormControl component="fieldset" fullWidth className="fieldset-container">
                            <div className="fieldset-row">
                                <FormLabel component="legend">Public Transport accessibility?</FormLabel>
                                <RadioGroup
                                    aria-label="transport"
                                    name="transport"
                                    row
                                >
                                    <FormControlLabel value="transport-yes" control={<Radio color="primary" />} label="Yes" />
                                    <FormControlLabel value="transport-no" control={<Radio color="primary" />} label="No" />
                                </RadioGroup>
                            </div>
                        </FormControl>

                        <TextField
                            id="dress-code"
                            label="What are the dress code reqiurement for this position?"
                            type="text"
                            fullWidth
                            variant="filled"
                            multiline
                            rows="5"
                            required
                        />
                        <TextField
                            id="career-prospects"
                            label="What are the career prospects from this position?"
                            type="text"
                            fullWidth
                            variant="filled"
                            multiline
                            rows="5"
                            required
                        />
                        <TextField
                            id="training"
                            label="What training is provided?"
                            type="text"
                            fullWidth
                            variant="filled"
                            multiline
                            rows="5"
                            required
                        />

                        <FormGroup className="fieldset-container">
                            <FormLabel component="legend" >Select Benefit</FormLabel>
                            <div>
                                <FormControlLabel control={<Checkbox value="" color="primary" />} label="Base" />
                                <FormControlLabel control={<Checkbox value="" color="primary" />} label="Super" />
                                <FormControlLabel control={<Checkbox value="" color="primary" />} label="Car" />
                                <FormControlLabel control={<Checkbox value="" color="primary" />} label="Phone" />
                                <FormControlLabel control={<Checkbox value="" color="primary" />} label="Laptop" />
                                <FormControlLabel control={<Checkbox value="" color="primary" />} label="Commissions" />
                                <FormControlLabel control={<Checkbox value="" color="primary" />} label="RDO's" />
                                <FormControlLabel control={<Checkbox value="" color="primary" />} label="Car Park" />
                                <FormControlLabel control={<Checkbox value="" color="primary" />} label="Expenses" />
                            </div>
                        </FormGroup>

                        <TextField
                            id="other-benefits"
                            label="What other benefits come with this role (free products, discounts etc)"
                            type="text"
                            fullWidth
                            variant="filled"
                            multiline
                            rows="5"
                        />
                        <TextField
                            id="three-attraction"
                            label="What three things do you believe will attract a candidate to this position?"
                            type="text"
                            fullWidth
                            variant="filled"
                            multiline
                            rows="5"
                        />
                        <TextField
                            id="pre-booked-interview"
                            label="Pre-Booked Interview Time Slots"
                            type="text"
                            fullWidth
                            variant="filled"
                            multiline
                            rows="5"
                        />
                    </div>

                    <div className="form-subsection">
                        <h6 className="form-title">About this vacancy</h6>
                        <TextField
                            id="vacancy-open-days"
                            label="How long has the vacancy been open?"
                            type="text"
                            fullWidth
                            variant="filled"
                        />
                        <FormControl component="fieldset" fullWidth className="fieldset-container">
                            <div className="fieldset-row">
                                <FormLabel component="legend">Are there any other agencies working on this vacancy?</FormLabel>
                                <RadioGroup
                                    aria-label="other-agency"
                                    name="other-agency"
                                    row
                                >
                                    <FormControlLabel
                                        value="yes" control={<Radio color="primary" />} label="Yes"
                                    />
                                    <FormControlLabel value="no" control={<Radio color="primary" />} label="No" />
                                </RadioGroup>
                            </div>
                        </FormControl>
                        {/* show if above is yes */}
                        {/* {this.state.otherAgencyChecked && ( */}
                            <>
                                <TextField
                                    id="other-agency-how-long"
                                    label="How long have the agencies been woking on the vacancy?"
                                    type="text"
                                    fullWidth
                                    variant="filled"
                                />
                                <FormControl component="fieldset" fullWidth className="fieldset-container">
                                    <div className="fieldset-row">
                                        <FormLabel component="legend">Are you interviewing at this stage?</FormLabel>
                                        <RadioGroup
                                            aria-label="interview"
                                            name="interview"
                                            row
                                        >
                                            <FormControlLabel value="yes" control={<Radio color="primary" />} label="Yes" />
                                            <FormControlLabel value="no" control={<Radio color="primary" />} label="No" />
                                        </RadioGroup>
                                    </div>
                                </FormControl>
                            </>
                        {/* )} */}
                    </div>
                </form>
            </div>
        )
    }
}