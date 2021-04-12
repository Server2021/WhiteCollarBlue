import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./style.scss";
import Submit from "../../../assets/icons/submit.svg";
import Search from "../../../assets/icons/search.svg";
import {FaChevronRight, FaSearch} from "react-icons/fa";
import StyledTitle from "../../../components/StyledTitle/StyledTitle";
import KBEntry from "../../../components/KBEntry/KBEntry";
import JobSeekerBg from "../../../assets/home/home-jobseeker.jpeg";
import EmployerBg from "../../../assets/home/home-employer.jpeg";
import TestimonialSlider from "./components/TestimonialSlider/TestimonialSlider";
import TypingAnimation from "./components/TypingAnimation/TypingAnimation";
import Fade from "react-reveal/Fade";
import FWBBody from "../../../components/FWB/FWBBody";
import {Button} from "@material-ui/core";
import JobSearchBar from "../../../components/JobSearch/JobSearchBar/JobSearchBar";
import App from "../../../App";
import JobsSlider from "./components/JobsSlider";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latestArticles: []
    };
  }

  // componentDidMount() {
  //   window.scrollTo(0, 0);
  //   App.Current.API.KnowledgeBase.GetEntries({}, 0, 3).then(entries =>
  //     this.setState({latestArticles: entries.data})
  //   );

  //   App.Current.SetPageName("Home");
  // }

  componentWillUnmount() {
    App.Current.SetPageName(null);
  }

  render() {
    const articles = this.state.latestArticles;

    return (
      <>
        {/* 01. hero */}
        <section>
          <div className="home__hero">
            {/* typing animation */}
            <div className="home__title">
              <span>We can help with </span>
              <TypingAnimation />
            </div>
          </div>
          <div className="home__search-bar">
            <div className="home__search-bar__container container-maxwidth">
              <div className="home__search-bar__cv">
                <Link to="/jobseeker/submitcv">
                  <Button
                    variant="contained"
                    color="primary"
                    component="span"
                    className="custom-button home__search-bar__cv__button">
                    <img src={Submit} alt="Submit a CV" />
                    Submit&nbsp;a&nbsp;CV
                  </Button>
                </Link>
              </div>
              <div className="home__search-bar__line" />
              <div className="home__search-bar__job">
                <Link to="/jobseeker/findjob">
                  <Button
                    variant="contained"
                    color="primary"
                    component="span"
                    className="custom-button home__search-bar__cv__button">
                    <img src={Search} alt="Find Jobs" />
                    Find Jobs
                  </Button>
                </Link>
              </div>
              {/* <div className="home__search-bar__filter">
                <JobSearchBar location={this.props.location} />
              </div> */}
            </div>
          </div>
        </section>

        {/* 02. Job Seekers / Employer CTA */}
        <section className="home__jobseekers-and-employers">
          {/* 02-01. Job Seekers */}

          <div className="home__jobseekers">
            <img
              className="home__jobseekers__bg"
              src={JobSeekerBg}
              alt="Job Seekers"
            />
            <Fade>
              <div className="home__jobseekers__content">
                <h1>
                  Looking for <b>Work?</b>
                </h1>
                <Link to="/jobseeker">
                  <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    component="span"
                    className="home__cta__button">
                    job seekers <FaChevronRight />
                  </Button>
                </Link>
              </div>
            </Fade>
          </div>
          {/* 02-02. Employers */}
          <div className="home__employers">
            <img className="home__employers__bg" src={EmployerBg} alt="Employers" />
            <Fade>
              <div className="home__employers__content">
                <h1>
                  Looking for <b>Talent?</b>
                </h1>
                <Link to="/employer">
                  <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    component="span"
                    className="home__cta__button">
                    employers <FaChevronRight />
                  </Button>
                </Link>
              </div>
            </Fade>
          </div>
        </section>

        {/* 03. Latest Jobs */}
        <JobsSlider />

        {/* 04. Latest Articles
        <section className="home__latest-articles">
          <div className="home__latest-articles__content container-maxwidth">
            <Fade bottom>
              <div className="home__latest-articles__text">
                <StyledTitle title="Latest Articles" left />
                <p>
                  Please take the time to view our topical articles aimed to answer
                  your questions around subject matter that is trending within
                  business today.
                </p>
                <Link
                  to="/knowledgebase"
                  className="home__latest-articles__view-all--desktop">
                  <span>View more on our</span>
                  <span>
                    Knowledge Base <FaChevronRight />
                  </span>
                </Link>
              </div>
              <div className="home__latest-articles__cards">
                {articles.map((entry, i) => (
                  <KBEntry key={i} entry={entry} />
                ))}
              </div>
              <Link
                to="/knowledgebase"
                className="home__latest-articles__view-all--mobile">
                <span>View more on our</span>
                <span>
                  Knowledge Base <FaChevronRight />
                </span>
              </Link>
            </Fade>
          </div>
        </section> */}

        {/* 05. Friends with Benefits */}
        <section>
          <Fade>
            <FWBBody />
          </Fade>
        </section>
        {/* 06. What Our Clients Say */}
        <section className="home__testimonial">
          <Fade bottom>
            <div className="home__testimonial--content">
              <StyledTitle title="What Our Client Say" light />
              <TestimonialSlider />
            </div>
          </Fade>
        </section>
      </>
    );
  }
}
