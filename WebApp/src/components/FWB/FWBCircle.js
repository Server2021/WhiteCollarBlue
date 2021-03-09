import React, { Component } from "react";
import "./style.scss";

class FWBCircle extends Component {
    render() {
        return (
            <div className="fwb-circle">
                <div>
                    <span><i>Bonus</i></span>
                    <div>$100</div>
                    <span><i>Visa Card</i></span>
                </div>
            </div>
        );
    }
}

export default FWBCircle;