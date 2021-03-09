import React from "react";
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import RadioGroup from '@material-ui/core/RadioGroup';
import { FormControl, Radio } from "@material-ui/core";


export default function Step04() {

    return (
        <div className="submit-vacancy__steps">
            <form>
                <TextField
                    id="award-or-eba"
                    label="Award or EBA"
                    type="text"
                    fullWidth
                    variant="filled"
                />
                
                    <div className="fieldset-container">
                        <FormControl component="fieldset" fullWidth>
                            <div className="fieldset-row">
                                <FormLabel component="legend">Parking Available?</FormLabel>
                                <RadioGroup
                                    aria-label="parking"
                                    name="parking"
                                    row
                                >
                                    <FormControlLabel value="parking-yes" control={<Radio color="primary" />} label="Yes" />
                                    <FormControlLabel value="parking-no" control={<Radio color="primary" />} label="No" />
                                </RadioGroup>
                            </div>
                        </FormControl>
                        <FormControl component="fieldset" fullWidth>
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
                    </div>
                    <TextField
                        id="qualifications"
                        label="Qualifications (licenses etc.) that the worker must possess"
                        type="text"
                        fullWidth
                        variant="filled"
                        multiline
                        rows="5"
                        required
                    />
                    <TextField
                        id="experience"
                        label="Experience the worker should possess"
                        type="text"
                        fullWidth
                        variant="filled"
                        multiline
                        rows="5"
                        required
                    />
                    <TextField
                        id="other-criteria"
                        label="Other Criteria"
                        type="text"
                        fullWidth
                        variant="filled"
                        multiline
                        rows="5"
                        required
                    />
                    <div className="fieldset-container">
                        <FormControl component="fieldset" fullWidth>
                            <div className="fieldset-row">
                                <FormLabel component="legend">Noisy environment?</FormLabel>
                                <RadioGroup
                                    aria-label="noise"
                                    name="noise"
                                    row
                                >
                                    <FormControlLabel value="noise-yes" control={<Radio color="primary" />} label="Yes" />
                                    <FormControlLabel value="noise-no" control={<Radio color="primary" />} label="No" />
                                </RadioGroup>
                            </div>
                        </FormControl>
                    </div>

                    <div className="fieldset-container">
                        <FormControl component="fieldset" fullWidth>
                            <div className="fieldset-row">
                                <FormLabel component="legend">Working outside?</FormLabel>
                                <RadioGroup
                                    aria-label="working-outside"
                                    name="working-outside"
                                    row
                                >
                                    <FormControlLabel value="working-outside-yes" control={<Radio color="primary" />} label="Yes" />
                                    <FormControlLabel value="working-outside-no" control={<Radio color="primary" />} label="No" />
                                </RadioGroup>
                            </div>
                        </FormControl>
                    </div>

                    <div className="fieldset-container">
                        <FormControl component="fieldset" fullWidth >
                            <FormLabel component="legend">Supervision provided</FormLabel>
                            <RadioGroup
                                aria-label="supervision"
                                name="supervision"
                                row
                            >
                                <FormControlLabel value="supervision-continues" control={<Radio color="primary" />} label="Continues" />
                                <FormControlLabel value="supervision-frequent" control={<Radio color="primary" />} label="Frequent(hourly)" />
                                <FormControlLabel value="supervision-occasional" control={<Radio color="primary" />} label="Occasional(every few hours)" />
                                <FormControlLabel value="supervision-mininal" control={<Radio color="primary" />} label="Minimal(daily)" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className="fieldset-container">
                        <FormControl component="fieldset" fullWidth >
                            <FormLabel component="legend">Training provided</FormLabel>
                            <RadioGroup
                                aria-label="training"
                                name="traning"
                                row
                            >
                                <FormControlLabel value="traning-induction" control={<Radio color="primary" />} label="Induction" />
                                <FormControlLabel value="traning-onthejob" control={<Radio color="primary" />} label="On the Job" />
                                <FormControlLabel value="traning-formal" control={<Radio color="primary" />} label="Formal/Ongoing" />
                                <FormControlLabel value="traning-toolboxtalks" control={<Radio color="primary" />} label="Toolbox Talks" />
                                <FormControlLabel value="traning-none" control={<Radio color="primary" />} label="None" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <TextField
                        id="ppe-required"
                        label="PPE Required :"
                        type="text"
                        fullWidth
                        variant="filled"
                        multiline
                        rows="5"
                    />
                    <FormGroup row className="fieldset-container">
                        <FormLabel component="legend" >Please outline any hazards or other issues in the workplace that have the potential to cause injury to your employees:</FormLabel>
                        <FormControlLabel control={<Checkbox value="" color="primary" />} label="Slippery or Cluttered Floors" />
                        <FormControlLabel control={<Checkbox value="" color="primary" />} label="People and Forklifts in the same area" />
                        <FormControlLabel control={<Checkbox value="" color="primary" />} label="Loud noise" />
                        <FormControlLabel control={<Checkbox value="" color="primary" />} label="Falling Objects" />
                        <FormControlLabel control={<Checkbox value="" color="primary" />} label="Lifting" />
                        <FormControlLabel control={<Checkbox value="" color="primary" />} label="Dangerous Machinery" />
                        <FormControlLabel control={<Checkbox value="" color="primary" />} label="Heavy Loads" />
                        <FormControlLabel control={<Checkbox value="" color="primary" />} label="Vehicles" />
                        <FormControlLabel control={<Checkbox value="" color="primary" />} label="Stretching Reaching" />
                        <FormControlLabel control={<Checkbox value="" color="primary" />} label="Unguarded Equipment" />
                        <FormControlLabel control={<Checkbox value="" color="primary" />} label="Electricity" />
                        <FormControlLabel control={<Checkbox value="" color="primary" />} label="Occupational Violence and Bullying" />
                        <FormControlLabel control={<Checkbox value="" color="primary" />} label="Chemicals" />
                    </FormGroup>

                    <TextField
                        id="materials"
                        label="Materials to be handled"
                        type="text"
                        fullWidth
                        variant="filled"
                        multiline
                        rows="5"
                    />
                    <TextField
                        id="equipment"
                        label="Equipment to be used"
                        type="text"
                        fullWidth
                        variant="filled"
                        multiline
                        rows="5"
                    />
            </form>
        </div>
    )
}