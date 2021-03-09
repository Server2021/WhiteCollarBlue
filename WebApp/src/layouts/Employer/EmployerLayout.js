import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";

// styles

import BackgroundImage from "../../assets/employers/employers.jpg"; // Path to BackgroundImage

// components
import HeroSection from "../../components/Hero/Hero";
import "../../components/Hero/Hero.scss";
import SideMenu from "../components/SideMenu/SideMenu";
import {FaHome, FaFileUpload, FaUserFriends, FaRegHandshake,FaRegUser, FaUserAlt} from "react-icons/fa";
import {MdLightbulbOutline} from "react-icons/md";
import SubmitVacancy from "../../pages/application/Employer/SubmitVacancy";
import TalentSolutions from "../../pages/application/Employer/TalentSolutions";
import EmployerHome from "../../pages/application/Employer";
import HRSolutions from "../../pages/application/Employer/HRSolutions";
import Partners from "../../pages/application/Employer/Partners";
import ErrorView from "../../components/ErrorView";
import ClientRegistration from "../../pages/application/Registration/clientregisteration";
import ClientLogin from "../../pages/application/Login/clientlogin";

// assets

const MenuList = [
  {name: "Employers Menu", link: "/employer", icons: <FaHome />},
  {name: "Submit a Vacancy", link: "/employer/vacancy", icons: <FaFileUpload />},
  {name: "HR solutions", link: "/employer/hrsolutions", icons: <FaUserFriends />},
  {
    name: "Talent Solutions",
    link: "/employer/talentsolutions",
    icons: <MdLightbulbOutline />
  },
  {name: "Partners", link: "/employer/partners", icons: <FaRegHandshake />},
  {name: "Login as Client", link: "/employer/login", icons: <FaUserAlt />},
  {name: "Register as Client", link: "/employer/registration", icons: <FaRegUser />}
];

export default class EmployerLayout extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        {/* 01. hero  */}
        <HeroSection
          backgroundImage={BackgroundImage}
          title="Employers"
          withSubMenu
        />
        {/* 02. body */}
        <section className="body__bg">
          <div className="container-maxwidth body__container">
            <SideMenu
              data={MenuList}
              after="Job Seekers Menu"
              afterLink="/jobseeker"
            />
            {/* article */}
            <article className="body__article">
              <Switch>
                <Route exact path="/employer" component={EmployerHome} />
                <Route path="/employer/vacancy" component={SubmitVacancy} />
                <Route path="/employer/hrsolutions" component={HRSolutions} />
                <Route
                  path="/employer/talentsolutions"
                  component={TalentSolutions}
                />
                <Route path="/employer/partners" component={Partners} />
                <Route path="/employer/login" component={ClientLogin} />
                <Route path="/employer/registration" component={ClientRegistration} />
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
