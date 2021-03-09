import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import "./style.scss";
import "../../../components/Hero/Hero.scss";
import {
  MdPerson,
  MdDomain,
  MdDashboard,
  MdPhone,
  MdPeople,
  MdAddCircle
} from "react-icons/md";
import SideMenu from "../../components/SideMenu/SideMenu";
import WCBDashboardLayout from "../../../pages/application/Admin/WCBAdmin/WCBDashboard";
import WCBClientLayout from "../../../pages/application/Admin/WCBAdmin/WCBClients/WCBClientLayout";
import WCBClientContactLayout from "../../../pages/application/Admin/WCBAdmin/WCBClientContact/WCBClientContactLayout";
import WCBJobSeekersLayout from "../../../pages/application/Admin/WCBAdmin/WCBJobSeekers/WCBJobSeekersLayout";
import ErrorView from "../../../components/ErrorView";
import MyAccount from "../../../pages/application/Admin/components/MyAccount";
import WCBKnowledgeBase from "../../../pages/application/Admin/WCBAdmin/WCBKnowledgebase";

const MenuList = [
  {name: "My Account", link: "/admin", icons: <MdPerson />},
  {name: "Dashboard", link: "/admin/dashboard", icons: <MdDashboard />},
  {name: "Clients", link: "/admin/clients", icons: <MdDomain />},
  {name: "Client Contact", link: "/admin/clientcontact", icons: <MdPhone />},
  {name: "Job Seekers", link: "/admin/jobseekers", icons: <MdPeople />},
  {
    name: "Add Knowledge Base",
    link: "/admin/addknowledgebase",
    icons: <MdAddCircle />
  }
];

export default class WCBAdminLayout extends Component {
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
                <Route path="/admin/dashboard" component={WCBDashboardLayout} />
                <Route path="/admin/clients" component={WCBClientLayout} />
                <Route
                  path="/admin/clientcontact"
                  component={WCBClientContactLayout}
                />
                <Route path="/admin/jobseekers" component={WCBJobSeekersLayout} />
                <Route path="/admin/addknowledgebase" component={WCBKnowledgeBase} />
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
