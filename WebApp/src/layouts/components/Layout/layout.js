import React, { Component } from "react";

import styles from "./layout.module.scss";

// components
import { push as Menu } from "react-burger-menu";
import Header from "../Header";
import Footer from "../Footer";
import SNS from "../Sns/Sns";
import LoginAndRegister from "../LoginAndRegister/LoginAndRegister";

//assets
import Close from "../../../assets/close.svg";
import { NavMenuList } from "../NavMenuList";

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }
  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false });
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    this.setState(state => ({ menuOpen: !state.menuOpen }));
  }

  render() {
    return (
      <div className={styles.layout} id="outer-container">
        {/* Menu is hidden in default. Only shows on mobile when HamburgerButton is clicked */}
        <div className={styles.hidden}>
          <Menu
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
            right
            width={248}
            customBurgerIcon={false}
            isOpen={this.state.menuOpen}
            onStateChange={state => this.handleStateChange(state)}
            customCrossIcon={<img src={Close} alt="close" />}
          >
            <div className={styles.mobileLogin}>
              <LoginAndRegister />
            </div>
            <NavMenuList />
          </Menu>
        </div>
        <div id="page-wrap">
          {/* passing the toggle function a prop to HamburgerButton inside of Header  */}
          <Header click={() => this.toggleMenu()} />
          <SNS />
          <main>{this.props.children}</main>
          <Footer />
        </div>
      </div>
    );
  }
}
