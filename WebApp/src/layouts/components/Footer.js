import React, {Component} from "react";
import {Link} from "react-router-dom";

// icons
import {
  FaSearch,
  FaFileUpload,
  FaEdit,
  FaBell,
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn
} from "react-icons/fa";
import HRSenseIcon from "../../assets/icons/hrsense.png";

// assets
import Logo from "../../assets/logo_without-tagline.png";
import HRSenseLogo from "../../assets/hrsense-logo.png";
import ToolboxDigitalLogo from "../../assets/toolbox-digital.png";

/** Style **/
import "./Footer.scss";

import {youtube, instagram, twitter, facebook, linkedin} from "./Sns/snsUrls";

export default class Header extends Component {
  render() {
    return (
      <div>
        <footer>
          {/* 01. footer top */}
          <div className="footer--top container-maxwidth">
            <div className="footer--top__content">
              <div className="footer--top__column">
                <div className="footer--top__column__title">
                  {/* Differentiation */}
                  <Link to="/">
                    <img src={Logo} alt="toolbox-logo" className="footer__wcblogo" />
                  </Link>
                </div>
                <div className="footer--top__column__description">
                  <p>
                    WhiteCollarBlue are an authority in providing HR Solutions to a
                    broad range of industries, their professional team of specialists
                    take a personal approach in understanding your business
                    challenges before delivering tailored and simplistic solutions.
                    We have global capabilities to source and secure the right talent
                    aligned to your core business values.
                  </p>
                </div>
              </div>
              <div className="footer--top__column">
                <div className="footer--top__column__title">
                  {/* HRSense Summary */}
                  <a href="http://hrsense.com.au">
                    <img
                      src={HRSenseLogo}
                      alt="hrsense-logo"
                      className="footer__hrslogo"
                    />
                  </a>
                </div>
                <div className="footer--top__column__description">
                  We work collaboratively with our clients to seek and understand
                  your business, its drivers, its culture and its objectives. This is
                  where we can support you by tailoring our services specific to your
                  business needs. Whatever stage your internal HR Function is
                  currently at HR Sense can help streamline your processes by
                  offering our customised HR Consulting service tailored to your
                  specific need.
                </div>
              </div>
              <div className="footer--top__column">
                <div className="footer--top__column__title">Quick Links</div>
                <div className="footer--top__list">
                  <ul>
                    <li>
                      <FaSearch />
                      <Link to="/jobseeker/findjob">
                        <span>Find a Job</span>
                      </Link>
                    </li>
                    <li>
                      <FaFileUpload />
                      <Link to="/jobseeker/submitcv">
                        <span>Submit CV</span>
                      </Link>
                    </li>
                    {/*                     <li>
                      <FaEdit />
                      <Link to="/employer/vacancy">
                        <span>Submit a Vacancy</span>
                      </Link>
                    </li> */}
                    {/* <li>
                      <FaBell />
                      <Link to="/jobseeker/board">
                        <span>Job Alerts</span>
                      </Link>
                    </li> */}
                    <li>
                      <FaPhone />
                      <Link to="/contact/sydney">
                        <span>Talk to Us</span>
                      </Link>
                    </li>
                    <li>
                      <img src={HRSenseIcon} alt="HR Sense" />
                      <a
                        href="https://hrsense.com.au/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <span>HR Sense</span>
                      </a>
                    </li>
                    <li className="footer--top__sns">
                      {/* sns only show in mobile */}
                      <a href={youtube} target="_blank" rel="noopener noreferrer">
                        <FaYoutube style={{fontSize: "18px"}} />
                      </a>
                      <a href={instagram} target="_blank" rel="noopener noreferrer">
                        <FaInstagram style={{fontSize: "18px"}} />
                      </a>
                      <a href={facebook} target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                      </a>
                      <a href={twitter} target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                      </a>
                      <a href={linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* 02. footer bottom */}
          <div className="footer--bottom">
            <div className="container-maxwidth">
              <div className="footer--bottom-flex">
                <div className="footer--bottom__menu">
                  <Link to="/sitemap">Site map</Link>  | {" "}
                  <Link to="/privacypolicy">Privacy Policy</Link>  | {" "}
                  <Link to="/termsofuse">Terms of Use</Link>
                </div>
                <div className="footer--bottom__right">
                  <div className="footer--bottom__copyright">
                    Copyright &copy; WhiteCollarBlue 2019  |
                  </div>
                  <div className="footer--bottom__designed">
                    <span>Website By</span>
                    <a
                      href="https://digital.toolbox.net.nz/"
                      target="_blank"
                      rel="noopener noreferrer">
                      <img src={ToolboxDigitalLogo} alt="ToolboxDigital" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* 02. footer end */}
      </div>
    );
  }
}
