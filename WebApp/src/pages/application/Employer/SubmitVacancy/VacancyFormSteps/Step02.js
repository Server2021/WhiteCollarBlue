import React, { Component } from "react";
import Button from '@material-ui/core/Button';

// styles
import './Steps.scss';

export default class Step02 extends Component {
    render() {
        return(
            <div className="submit-vacancy__steps">
                <form className="step02__jobtype">
                    {/* button as checkbox */ }
                    <Button variant="outlined" color="primary" size="large">Temporary</Button>
                    <Button variant="outlined" color="primary" size="large">Permanent</Button>
                </form>
            </div>
        )
    }
}