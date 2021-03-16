import React, {Component} from "react";
import PropTypes from "prop-types";
import "./style.scss";
import "../../../components/Hero/Hero.scss";
import StyledTitle from "../../../components/StyledTitle/StyledTitle";
import ProfilePanel from "./components/ProfilePanel";
import Video from "../../../assets/about/video.mp4";
import Poster from "../../../assets/about/poster.jpg";
import Purpose from "../../../assets/about/purpose.svg";
import Mission from "../../../assets/about/mission.svg";
import Vision from "../../../assets/about/vision.svg";
import Value from "../../../assets/about/ourvalue.svg";
import License01 from "../../../assets/about/license01.jpg";
import License02 from "../../../assets/about/license02.jpg";
import License03 from "../../../assets/about/license03.jpg";
import App from "../../../App";

const HRSenseProfiles = [
  {
    image: require("../../../assets/about/Grant.jpg"),
    name: "Grant Styles",
    role: "Director",
    linkedin: "https://www.linkedin.com/in/grantstyles/",
  },
  {
     image: require("../../../assets/about/Poppy1.jpg"),
     name: "Poppy Galouzis",
     role: "Operations Manager",
     linkedin: "https://www.linkedin.com/in/poppy-galouzis-871b26205",
  },
  {
     image: require("../../../assets/about/michaelimg.jpg"),
     name: "Michael Robert",
     role: "HR Specialist & Contract Recruitment",
     linkedin: "https://www.linkedin.com/in/michael-robert-449406183",
   },
   {
    image: require("../../../assets/about/Joey.jpg"),
    name: "Joseph Bechara",
    role: "Contract Recruitment Specialist",
  //  linkedin: "https://www.linkedin.com/in/tyler-nicholas-4a901a125/",
  },
  {
     image: require("../../../assets/about/Mackinlay.jpg"),
     name: "Anelle Mackinlay",
     role: "HR Specialist",
     linkedin: "https://www.linkedin.com/in/anellemackinlay/",
   },
   {
    image: require("../../../assets/about/Chantal.jpg"),
    name: "Chantal Ganesh",
    role: "HR Specialist",
    linkedin: "http://linkedin.com/in/chantal-ganesh-526389b",
  },
  {
    image: require("../../../assets/about/Tanya.jpg"),
    name: "Tanya Ledger",
    role: "HR Specialist & Contract Recruitment",
    linkedin: "http://linkedin.com/in/tanya-ledger",
  },
  {
    image: require("../../../assets/about/stacie_img.jpg"),
    name: "Stacie Kirkham",
    role: "Permanent Recruitment Specialist",
    linkedin: "https://www.linkedin.com/feed/",
  }
];

const TeamMembers = (props) => {
  const Data = props.data;
  const TeamMembersList = Data.map((item, index) => (
    <ProfilePanel
      key={index}
      imageUri={item.image}
      name={item.name}
      role={item.role}
      linkedin={item.linkedin}
    />
  ));
  return <div className="profile-container">{TeamMembersList}</div>;
};
TeamMembers.propTypes = {
  data: PropTypes.array,
};

export default class AboutUs extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    App.Current.SetPageName("About");
  }

  componentWillUnmount() {
    App.Current.SetPageName(null);
  }

  render() {
    return (
      <>
        {/* 01. hero and Introduction */}
        <section>
          <div className="hero__bg about__bg">
            <div className="container-maxwidth">
              <div className="hero__container hero__bg--left-align">
                <div className="hero__title">
                  <StyledTitle title="About WhiteCollarBlue" light left />
                </div>
              </div>
            </div>
          </div>
          <div className="container-maxwidth">
            <div className="about__introduction">
              <div className="about__video">
                <video preload="none" controls poster={Poster}>
                  <source src={Video} type="video/mp4" />
                </video>
              </div>
              <div className="about__intro-text">
                <p>
                  WhiteCollarBlue boasts a global footprint partnering with the NPA
                  Network of professional recruiters. We have recruitment partners in
                  major cities all over the world and have a strong presence in every
                  state of Australia.
                </p>
                <p>
                  We are a nationally recognised HR Solutions provider of choice
                  delivering outsourced HR initiatives across all industries.
                  Services not only include HR support and consultation but also a
                  full range of recruitment services covering both the White and Blue
                  Collar sectors.
                </p>
                <p>
                  Every interaction with both Clients and Job Seekers is built from a
                  strong desire to build relationships for life which is why our team
                  take the time to understand your business and/or Career Goals
                  before tailoring a solution that will deliver the results you are
                  looking for.
                </p>
                <p>
                  For The Team at WhiteCollarBlue service is first and foremost and
                  we will strive to become a major influence in the growth and
                  success of your Career or Business.
                </p>
                <p>
                  We are ambitious for our people and we are passionate about
                  creating value For our clients. We are able to offer practical
                  advice backed by industry Knowledge. WhiteCollarBlue epitomise the
                  combined themes of shared values, agility, flexibility, innovation
                  and most of all a “Customers For Life” mentality.
                </p>
                <b>Grant Styles</b>
              </div>
            </div>
          </div>
        </section>
        {/* 02. About US */}
        <section className="about__aboutus">
          <div className="about__aboutus-container container-maxwidth">
            {/* purpose */}
            <div className="about__description">
              <div className="about__description__container">
                <img src={Purpose} alt="Purpose" />
                <div className="about__description__title">
                  <h4>Purpose</h4>
                  <svg>
                    <line x2="60" />
                  </svg>
                </div>
                <div className="about__description__text">
                  <p>Connecting People With Possibility</p>
                </div>
              </div>
            </div>
            {/* Misson */}
            <div className="about__description">
              <div className="about__description__container">
                <img src={Mission} alt="Mission" />
                <div className="about__description__title">
                  <h4>Mission</h4>
                  <svg>
                    <line x2="60" />
                  </svg>
                </div>
                <div className="about__description__text">
                  <p>To Earn Respect From Our Customers By Delivering Real Outcomes Through Collaboration.</p>
                </div>
              </div>
            </div>
            {/* Vision */}
            <div className="about__description grid-item-c">
              <div className="about__description__container">
                <img src={Vision} alt="Vision" />
                <div className="about__description__title">
                  <h4>Vision</h4>
                  <svg>
                    <line x2="60" />
                  </svg>
                </div>
                <div className="about__description__text">
                  <p>To Be Australia’s First Choice In HR Solutions.</p>
                </div>
              </div>
            </div>
            {/* Our Value */}
            <div className="about__description grid-item-d">
              <div className="about__description__container">
                <div className="flex-vertical-center">
                  <img src={Value} alt="Value" />
                  <div className="about__description__title">
                    <h4>Our Values </h4>
                    <svg>
                      <line x2="60" />
                    </svg>
                  </div>
                </div>

                <div className="about__description__text">
                  <ul>
                    <li>
                      <span>✓</span>We Value Our Contribution & Live to Our Values
                    </li>
                    <li>
                      <span>✓</span>We Do What We Say We Will Do
                    </li>
                    <li>
                      <span>✓</span>We Will Deliver Results and Over Deliver on Value
                    </li>
                    <li>
                      <span>✓</span>We Practice Open and Honest Communication
                    </li>
                    <li>
                      <span>✓</span>We are Results and Outcome Focussed
                    </li>
                    <li>
                      <span>✓</span>We Constantly Strive for Innnovation &
                      Differentiation
                    </li>
                    <li>
                      <span>✓</span>We Foster Life Long Business
                      Relationships/Friendships
                    </li>
                    <li>
                      <span>✓</span>We are Constantly Grateful
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 03. License */}
        <section className="about__license">
          <div>
            <img src={License01} alt="Labour Hire In Queensland" />
            <img src={License02} alt="Labour Hire In Queensland" />
            <img src={License03} alt="Labour Hire In Queensland" />
          </div>
          <p>
            PROUDLY LICENSED FOR LABOUR HIRE IN QUEENSLAND <b>LHL-03957-Y1M4W</b>
          </p>
        </section>
        {/* 04. Meet The Team */}
        <section className="about__team">
          <StyledTitle title="Meet the Team" />
          <TeamMembers data={HRSenseProfiles} />
        </section>
      </>
    );
  }
}
