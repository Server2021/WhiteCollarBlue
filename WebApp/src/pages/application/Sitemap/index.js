import React, {Component} from "react";
import {Link} from "react-browser-router";
import HeroSection from "../../../components/Hero/Hero";
import "../../../components/Hero/Hero.scss";
import BackgroundImage from "../../../assets/bluebg.jpg";
import "./style.scss";
import App from "../../../App";

export default class Sitemap extends Component {
  List = props => {
    return (
      <>
        <div className="sitemap__sublist">
          <h5>{props.title}</h5>
          <ul>
            {props.menus &&
              props.menus.map(item => {
                return (
                  <li>
                    <Link to={item.link}>{item.name}</Link>
                  </li>
                );
              })}
          </ul>
        </div>

        <hr />
      </>
    );
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    App.Current.SetPageName("Site Map");
  }

  componentWillUnmount() {
    App.Current.SetPageName(null);
  }

  render() {
    return (
      <>
        {/* 01. hero */}
        <HeroSection backgroundImage={BackgroundImage} title="Sitemap" />
        {/* 02. body */}
        <section className="body__bg">
          <div className="container-maxwidth body__container">
            {/* article */}
            <article className="body__article body__article--padding sitemap">
              <ul className="sitemap__list">
                <Link to="/">
                  <li>
                    <this.List title="Home" />
                  </li>
                </Link>
                <Link to="/jobseeker/findjob">
                  <li>
                    <this.List
                      title="Find a Job"
                      menus={[
                        {name: "Find a job", link: "/jobseeker/findjob"}
                        // {name: "Job Alert", link: "/jobseeker/alerts"}
                      ]}
                    />
                  </li>
                </Link>
                <Link to="/jobseeker">
                  <li>
                    <this.List
                      title="Job Seeker"
                      menus={[
                        {name: "Submit a CV", link: "/jobseeker/submitcv"},
                        {
                          name: "Friends with Benefits",
                          link: "/jobseeker/friendswithbenefits"
                        }
                        // {name: "Timesheet", link: "/jobseeker/timesheet"}
                      ]}
                    />
                  </li>
                </Link>
                <Link to="/employer">
                  <li>
                    <this.List
                      title="Employer"
                      menus={[
                        //{name: "Submit a Vacancy", link: "/employer/vacancy"},
                        {name: "HR Solutions", link: "/employer/hrsolutions"},
                        {
                          name: "Talent Solutions",
                          link: "/employer/talentsolutions"
                        },
                        {name: "Partners", link: "/employer/partners"}
                      ]}
                    />
                  </li>
                </Link>
                <Link to="/industries">
                  <li>
                    <this.List
                      title="Industries"
                      menus={[
                        {name: "Light Industrial", link: "/industries/industrial"},
                        {
                          name: "Trades & Infrastructure",
                          link: "/industries/trades"
                        },
                        {name: "Financial Services", link: "/industries/financial"},
                        {name: "Sales & Marketing", link: "/industries/sales"},
                        {name: "Information Technology", link: "/industries/it"},
                        {name: "Electrical", link: "/industries/electrical"},
                        {name: "HealthCare", link: "/industries/healthcare"},
                        {name: "Education", link: "/industries/education"},
                        {name: "Business Support", link: "/industries/business"},
                        {
                          name: "Telecommunications",
                          link: "/industries/telecommunications"
                        },
                        {name: "Hospitality", link: "/industries/hospitality"},
                        {name: "Construction", link: "/industries/construction"},
                        {
                          name: "Transport, Logistics & Warehousing",
                          link: "/industries/transport"
                        },
                        {name: "Manufacturing", link: "/industries/manufacturing"},
                        {name: "Pharmaceutical", link: "/industries/pharmaceutical"}
                      ]}
                    />
                  </li>
                </Link>
                {/* <Link to="/knowledgebase">
                  <li>
                    <this.List title="Knowledge Base" />
                  </li>
                </Link> */}
                <Link to="/about">
                  <li>
                    <this.List title="About WCB" />
                  </li>
                </Link>
                <Link to="/contact/sydney">
                  <li>
                    <this.List
                      title="Contact Us"
                      menus={[
                        {name: "Sydney", link: "/contact/sydney"},
                        {name: "Melbourne", link: "/contact/melbourne"},
                        {name: "Canberra", link: "/contact/canberra"},
                        {name: "Brisbane", link: "/contact/brisbane"},
                        {name: "South Australia", link: "/contact/southaustralia"},
                        {name: "Perth", link: "/contact/perth"}
                      ]}
                    />
                  </li>
                </Link>
              </ul>
            </article>
          </div>
        </section>
      </>
    );
  }
}
