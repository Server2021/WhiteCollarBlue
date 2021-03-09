import React, {Component} from "react";
import {Link} from "react-browser-router";

// assets
import Logo from "../../assets/logo.png";
import LogoIcon from "../../assets/logo-icon.png";
import LogoMobile from "../../assets/logo-mobile.png";
import Bars from "../../assets/menu.svg";

import {FaCalendarAlt} from "react-icons/fa";

// style
import "./Header.scss";

import LoginAndRegister from "../components/LoginAndRegister/LoginAndRegister";
import {NavMenuList} from "./NavMenuList";

export default class Header extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  }
  resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 200,
      headerEl = document.getElementById("resize-header");

    if (headerEl) {
      if (distanceY > shrinkOn) {
        headerEl.classList.add("smaller");
      } else {
        headerEl.classList.remove("smaller");
      }
    }
  }
  render() {
    return (
      <div id="resize-header">
        {/* 01. mobile view */}
        <header className="header--mobile-view">
          <div className="header--mobile-view__bottom">
            <Link to="/">
              <img
                src={LogoMobile}
                alt="toolbox-logo"
                className="header--mobile-view__bottom__logo"
              />
            </Link>
            <img
              src={Bars}
              alt="menu"
              className="burger-icon"
              onClick={this.props.click}
            />
          </div>
        </header>

        {/* 02. desktop view (from ipad pro) */}
        <header className="header--desktop-view">
          <div className="header--desktop-view__content container-maxwidth">
            <div className="header--desktop-view__left">
              {/* logo */}
              <div>
                <Link to="/">
                  <img
                    src={Logo}
                    alt="wcb-logo"
                    className="header--desktop-view__logo"
                  />
                </Link>
              </div>
              <Link to="/">
                <img
                  src={LogoIcon}
                  alt="wcb-logo"
                  className="header--desktop-view__bottom__logo show-on-smaller"
                />
              </Link>
            </div>
            <div className="header--desktop-view__right">
              {/* Secondary Navigation */}
              <div className="header--desktop-view__second-nav">
                {/* <div className="second-nav__timesheet">
                  <a href="#"><FaCalendarAlt /><span>Timesheet</span></a>
                </div> */}
                <LoginAndRegister />
              </div>
              {/* Primary Navigation */}
              <div className="header--desktop-view__primary-nav">
                <NavMenuList />
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
