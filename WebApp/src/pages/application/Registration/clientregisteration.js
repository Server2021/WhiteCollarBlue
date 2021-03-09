import React, {Component} from "react";

import HeroSection from "../../../components/Hero/Hero";
import "../../../components/Hero/Hero.scss";
import BackgroundImage from "../../../assets/bluebg.jpg";
import RegistrationForm from "./Form";
import App from "../../../App";


export default class ClientRegistration extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    App.Current.SetPageName("Register");
  }

  componentWillUnmount() {
    App.Current.SetPageName(null);
  }

  render() {
    return (
      <>
        <section className="body__bg">
              <iframe className="clientregister_iframe"  src="https://whitecollarblue.vincere.io/careers/client/register" width="950px" height="1150px"></iframe>
        </section>
      </>
    );
  }
}
