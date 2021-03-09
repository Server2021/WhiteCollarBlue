import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import "./style.scss";
import SubtitleWithLine from "../../components/SubtitleWithLine/SubtitleWithLine";
import HeroSection from "../../components/Hero/Hero";
import "../../components/Hero/Hero.scss";
import SideMenu from "../components/SideMenu/SideMenu";
import BackgroundImage from "../../assets/contact/contact-hero.jpeg"; // Path to BackgroundImage
import {locations} from "../../data/locations";
import ContactMap from "../../pages/application/Contact/ContactMap";
import ContactContent from "../../pages/application/Contact/ContactContent";
import ErrorView from "../../components/ErrorView";

export default class ContactLayout extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const MenuList = Object.keys(locations).map(key => ({
      name: locations[key].city,
      link: `/contact/${key}`
    }));

    return (
      <>
        {/* 01. hero */}
        <HeroSection
          backgroundImage={BackgroundImage}
          title="Get in touch with us"
          withSubMenu
        />
        {/* 02. body */}
        <section className="body__bg">
          <div className="container-maxwidth body__container">
            <SideMenu className="body__aside" data={MenuList} noIcon />
            {/* article */}
            <article className="body__article body__article--padding">
              <div className="contact__subtitle">
                <SubtitleWithLine title="Our Location" />
              </div>
              <Switch>
                {Object.keys(locations).map((key, i) => (
                  <Route
                    key={i}
                    exact
                    path={`/contact/${key}`}
                    render={() => (
                      <>
                        <ContactMap mapUrl={locations[key].map} />
                        <ContactContent {...locations[key]} />
                      </>
                    )}
                  />
                ))}
                {/* Not Found */}
                <Route
                  exact
                  path="*"
                  render={props => <ErrorView {...props} errorcode="404" />}
                />
              </Switch>
            </article>
          </div>
        </section>
      </>
    );
  }
}
