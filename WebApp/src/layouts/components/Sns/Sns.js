import React, {Component} from "react";
import Slide from "react-reveal/Slide";
import "./Sns.scss";
import {youtube, instagram, twitter, facebook, linkedin} from "./snsUrls";
import {
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn
} from "react-icons/fa";

export default class SNS extends Component {
  render() {
    return (
      <Slide left cascade>
        <div className="floating-sns">
          <a href={youtube} target="_blank" rel="noopener noreferrer">
            <div className="floating-sns__circle">
              <FaYoutube className="floating-sns__icon" />
            </div>
          </a>
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <div className="floating-sns__circle">
              <FaInstagram className="floating-sns__icon" />
            </div>
          </a>
          <a href={twitter} target="_blank" rel="noopener noreferrer">
            <div className="floating-sns__circle">
              <FaTwitter className="floating-sns__icon" />
            </div>
          </a>
          <a href={facebook} target="_blank" rel="noopener noreferrer">
            <div className="floating-sns__circle">
              <FaFacebookF className="floating-sns__icon" />
            </div>
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <div className="floating-sns__circle">
              <FaLinkedinIn className="floating-sns__icon" />
            </div>
          </a>
        </div>
      </Slide>
    );
  }
}
