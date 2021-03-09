import React, { Component } from "react";

import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FilledInput from '@material-ui/core/FilledInput';
import { Message } from "semantic-ui-react";


export default class Step01 extends Component {
    state = {
        position: '',
        error: true
    }

    handleChange = e => {
        this.setState({ position: e.target.value })
    }

    render() {
        return (
            <div className="submit-vacancy__steps">
                <form className="flex-vertical-center">
                    <div className="formfield-columns--fullWidth">
                        <TextField
                            id="firstname"
                            label="First Name"
                            type="text"
                            variant="filled"
                            required
                            fullWidth
                        />
                        <TextField
                            id="lastname"
                            label="Last Name"
                            type="text"
                            variant="filled"
                            required
                            fullWidth
                        />
                    </div>

                    <TextField
                        id="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="filled"
                        required
                    />
                    <TextField
                        id="phone"
                        label="Direct Phone Number"
                        type="phone"
                        fullWidth
                        variant="filled"
                        required
                    />
                    <TextField
                        id="company"
                        label="Company Name"
                        type="phone"
                        fullWidth
                        variant="filled"
                        required
                    />

                    <FormControl variant="filled" fullWidth required >
                        <InputLabel htmlFor="position">Position in Company</InputLabel>
                        <Select
                            value={this.state.position}
                            onChange={this.handleChange}
                            input={<FilledInput name="position" id="position" />}
                        >
                            <MenuItem value='Business Owner'>Business Owner</MenuItem>
                            <MenuItem value='HR Manager'>HR Manager</MenuItem>
                            <MenuItem value='HR Administrator'>HR Administrator</MenuItem>
                            <MenuItem value='HR Support'>HR Support</MenuItem>
                            <MenuItem value='Office Manager'>Office Manager</MenuItem>
                            <MenuItem value='CFO'>CFO</MenuItem>
                            <MenuItem value='CEO'>CEO</MenuItem>
                            <MenuItem value='EA/PA'>EA/PA</MenuItem>
                            <MenuItem value='Other'>Other</MenuItem>
                        </Select>
                    </FormControl>


                    {this.state.error ?
                    <Message negative className="errorMessage">
                        <Message.Header>A valid email address must be entered </Message.Header>
                    </Message>
                    : null}

                </form>
            </div>
        )
    }
}