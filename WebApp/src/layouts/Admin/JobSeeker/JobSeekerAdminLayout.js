import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import "./style.scss";
import "../../../components/Hero/Hero.scss";
import {FaFileUpload, FaCheck} from "react-icons/fa";
import {MdPerson} from "react-icons/md";
import SideMenu from "../../components/SideMenu/SideMenu";
import JobSeekerCV from "../../../pages/application/Admin/JobSeekerAdmin/JobSeekerCV";
import JobSeekerApplicationHistory from "../../../pages/application/Admin/JobSeekerAdmin/JobSeekerApplicationHistory";
import ErrorView from "../../../components/ErrorView";
import MyAccount from "../../../pages/application/Admin/components/MyAccount";

const MenuList = [
  {name: "My Account", link: "/admin", icons: <MdPerson />},
  {name: "My CVs", link: "/admin/cv", icons: <FaFileUpload />},
  {
    name: "Application History",
    link: "/admin/application",
    icons: <FaCheck />
  }
  // { name: "Timesheet", link: "/admin/timesheet", icons: <FaCalendarAlt /> }
];

export default class JobSeekerAdminLayout extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        {/* 02. body */}
        <section className="body__bg">
          <div className="container-maxwidth body__container">
            <SideMenu className="body__aside" data={MenuList} />
            {/* article */}
            <article className="body__article body__article--padding">
              <Switch>
                <Route exact path="/admin" component={MyAccount} />
                <Route path="/admin/cv" component={JobSeekerCV} />
                <Route
                  path="/admin/application"
                  component={JobSeekerApplicationHistory}
                />
                <Route path="/admin/timesheet" />

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
