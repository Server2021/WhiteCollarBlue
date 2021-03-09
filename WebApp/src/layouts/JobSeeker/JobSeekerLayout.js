import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";

// styles
// import "./style.scss";

import BackgroundImage from "../../assets/job-seekers/jobseeker.jpeg"; // Path to BackgroundImage

// components
import HeroSection from "../../components/Hero/Hero";
import "../../components/Hero/Hero.scss";
import SideMenu from "../components/SideMenu/SideMenu";
import {FaHome, FaFileUpload, FaSearch, FaUserFriends,FaRegUser, FaUserAlt} from "react-icons/fa";
import SubmitCV from "../../pages/application/JobSeeker/SubmitCV";
import FWB from "../../pages/application/JobSeeker/FWB";
import JobSeekerHome from "../../pages/application/JobSeeker";
import JobBoard from "../../pages/application/JobSeeker/JobBoard";
import JobDetails from "../../pages/application/JobSeeker/JobBoard/JobDetails";
import ErrorView from "../../components/ErrorView";
import CandidateRegistration from "../../pages/application/Registration/candidateregisteration";
import CandidateLogin from "../../pages/application/Login/candidatelogin";

const MenuList = [
  {name: "Job Seekers Menu", link: "/jobseeker", icons: <FaHome />},
  {name: "Submit a CV", link: "/jobseeker/submitcv", icons: <FaFileUpload />},
  {name: "Find a Job", link: "/jobseeker/findjob", icons: <FaSearch />},
  {
    name: "Friends with benefits",
    link: "/jobseeker/friendswithbenefits",
    icons: <FaUserFriends />
  },
  {name: "Login as Candidate", link: "/jobseeker/login", icons: <FaUserAlt />},
  {name: "Register as Candidate", link: "/jobseeker/registration", icons: <FaRegUser />}
  // { name: "Timesheet", link: "/jobseeker/timesheet", icons: <FaCalendarAlt /> }
];

export default class JobSeekerLayout extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        {/* 01. hero  */}
        <HeroSection
          backgroundImage={BackgroundImage}
          title="Job Seekers"
          withSubMenu
        />
        {/* 02. body */}
        <section className="body__bg">
          <Switch>
            {/* Details Job Seeker Style */}
            <Route
              path="/jobseeker/findjob/*"
              render={() => (
                <div className="container-maxwidth body__container">
                  <Switch>
                    <Route exact path="/jobseeker/findjob/*" component={JobDetails} />
                  </Switch>
                </div>
              )}
            />

            {/* Standard Job Seeker Style */}
            <Route
              path="/jobseeker"
              render={() => (
                <div className="container-maxwidth body__container">
                  <SideMenu
                    data={MenuList}
                    after="Employers Menu"
                    afterLink="/employer"
                  />
                  {/* article */}
                  <article className="body__article">
                    <Switch>
                      <Route exact path="/jobseeker" component={JobSeekerHome} />
                      <Route path="/jobseeker/submitcv" component={SubmitCV} />
                      <Route path="/jobseeker/findjob" component={JobDetails} />
                      <Route path="/jobseeker/friendswithbenefits" component={FWB} />
                      <Route path="/jobseeker/login" component={CandidateLogin} />
                      <Route path="/jobseeker/registration" component={CandidateRegistration} />
                      {/* <Route path="/jobseeker/timesheet" component={Timesheet} /> */}
                      {/* Not Found */}
                      <Route
                        exact
                        path="*"
                        render={props => <ErrorView {...props} errorcode="404" />}
                      />
                    </Switch>
                  </article>
                </div>
              )}
            />
          </Switch>
        </section>
      </>
    );
  }
}
