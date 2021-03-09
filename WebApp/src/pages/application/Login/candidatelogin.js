import React, {Component} from "react";

import HeroSection from "../../../components/Hero/Hero";
import "../../../components/Hero/Hero.scss";
import BackgroundImage from "../../../assets/bluebg.jpg";
import App from "../../../App";

export default class CandidateLogin extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    App.Current.SetPageName("Login");
  }

  componentWillUnmount() {
    App.Current.SetPageName(null);
  }

  render() {
    return (
      <>
        <section className="body__bg">
              <iframe className="candidatelogin_iframe" src="https://whitecollarblue.vincere.io/careers/candidate/login" width="950px" height="750px"></iframe>
        </section>
      </>
    );
  }
}
