import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import "./style.scss";
import "../../../components/Hero/Hero.scss";
import {FaFileUpload, FaHistory} from "react-icons/fa";
import {MdPerson, MdDomain} from "react-icons/md";
import SideMenu from "../../components/SideMenu/SideMenu";
import EmployerCompayInfo from "../../../pages/application/Admin/EmployerAdmin/EmployerCompayInfo";
import EmployerVacancyHistory from "../../../pages/application/Admin/EmployerAdmin/EmployerVacancyHistory";

import Steps from "../../../pages/application/Employer/SubmitVacancy/index.js";
import ErrorView from "../../../components/ErrorView";
import MyAccount from "../../../pages/application/Admin/components/MyAccount";

const MenuList = [
  {name: "My Account", link: "/admin", icons: <MdPerson />},
  {
    name: "Company Information",
    link: "/admin/company",
    icons: <MdDomain />
  },
  /*   {
    name: "Submit a vacancy",
    link: "/admin/vacancy",
    icons: <FaFileUpload />
  }, */
  {
    name: "Vacancy History",
    link: "/admin/vacancyhistory",
    icons: <FaHistory />
  }
];

export default class EmployerAdminLayout extends Component {
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
                <Route path="/admin/company" component={EmployerCompayInfo} />
                <Route path="/admin/vacancy" component={Steps} />
                <Route
                  path="/admin/vacancyhistory"
                  component={EmployerVacancyHistory}
                />
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
