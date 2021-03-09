import React, {Component} from "react";
import JobSeekerAdminLayout from "./JobSeeker/JobSeekerAdminLayout";
import BackgroundImage from "../../assets/bluebg.jpg"; // Path to BackgroundImage
import HeroSection from "../../components/Hero/Hero";
import EmployerAdminLayout from "./Employer/EmployerAdminLayout";
import WCBAdminLayout from "./WCB/WCBAdminLayout";
import ErrorView from "../../components/ErrorView";
import App from "../../App";
import {Metadata} from "../../Utilities";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

export default class AdminLayout extends Component {
  constructor(props) {
    super(props);

    const user = App.Current.CurrentUser;
    let name = null;
    if (user) {
      name = `${user.firstname} ${user.lastname}`;
    }

    this.state = {
      user: user,
      name: name
    };

    App.Current.OnLoggedIn(() => {
      const user = App.Current.CurrentUser;
      this.setState({
        user: user,
        name: `${user.firstname} ${user.lastname}`
      });
    });

    App.Current.OnLoggedOut(() => {
      this.setState({
        user: null,
        name: null
      });

      App.Current.RequestLogin();
    });
  }

  render() {
    const meta = Metadata("signedIn");
    // Sign in Status not loaded yet.
    if (typeof meta === "undefined") {
      return <LoadingSpinner />;
    }
    if (!this.state.user) {
      return <ErrorView errorcode="401" />;
    }

    return (
      <>
        {/* 01. hero */}
        <HeroSection
          backgroundImage={BackgroundImage}
          title={`Hello, ${this.state.name}`}
          withSubMenu
        />

        {this.getAdminLayout()}
      </>
    );
  }

  getAdminLayout() {
    const user = this.state.user;
    if (user.admin) {
      return <WCBAdminLayout />;
    } else if (user.type === "Employer") {
      return <EmployerAdminLayout />;
    } else {
      return <JobSeekerAdminLayout />;
    }
  }
}
