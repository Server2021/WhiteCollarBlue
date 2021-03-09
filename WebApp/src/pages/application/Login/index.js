import React, {Component} from "react";

import HeroSection from "../../../components/Hero/Hero";
import "../../../components/Hero/Hero.scss";
import BackgroundImage from "../../../assets/bluebg.jpg";
import App from "../../../App";

export default class Login extends Component {

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
        {/* 01. hero */}
        <HeroSection backgroundImage={BackgroundImage} title="WCB Login" />
        {/* 02. body */}
        <section className="body__bg">
          <div className="container-maxwidth body__container">
            {/* article */}
            <article className="body__article body__article--padding">
              <iframe src="https://whitecollarblue.vincere.io/careers/candidate/login" width="1100px" height="800px"></iframe>
            </article>
          </div>
        </section>
      </>
    );
  }
}
