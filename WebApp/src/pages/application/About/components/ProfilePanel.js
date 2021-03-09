import React, { Component } from "react";
import PropTypes from "prop-types";

// styles
import "./ProfilePanel.scss";

// icons
import { FaLinkedin } from "react-icons/fa";


export default class ProfilePanel extends Component {
  render() {
    return (
        <div className="profile-panel">
          <img src={this.props.imageUri} alt={this.props.name} />
          <div className="profile-panel__body">
            <p>{this.props.name}</p>
            <div className="profile-panel__footer">
              <div>
                <p>{this.props.role}</p>
                { this.props.linkedin === null 
                  ? null 
                  : <a href={this.props.linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin />
                    </a>
                }
              </div>
            </div>
          </div>
        </div>
    );
  }
}
ProfilePanel.propTypes = {
  imageUri: PropTypes.string,
  name: PropTypes.string,
  role: PropTypes.string,
  linkedin: PropTypes.string
};