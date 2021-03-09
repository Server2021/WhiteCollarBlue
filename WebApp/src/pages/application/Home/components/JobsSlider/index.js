import React from "react";
import Fade from "react-reveal/Fade";
import StyledTitle from "../../../../../components/StyledTitle/StyledTitle";
import {Link} from "react-browser-router";
import {FaChevronRight} from "react-icons/fa";

import {ReactComponent as Industrial} from "../../../../../assets/industries/industrial.svg";
import {ReactComponent as Other} from "../../../../../assets/industries/work-team.svg";
import {ReactComponent as Trades} from "../../../../../assets/industries/trades.svg";
import {ReactComponent as Financial} from "../../../../../assets/industries/financial.svg";
import {ReactComponent as Sales} from "../../../../../assets/industries/sales.svg";
import {ReactComponent as IT} from "../../../../../assets/industries/it.svg";
import {ReactComponent as HR} from "../../../../../assets/industries/hr.svg";
import {ReactComponent as HealthCare} from "../../../../../assets/industries/healthcare.svg";
import {ReactComponent as Education} from "../../../../../assets/industries/education.svg";
import {ReactComponent as Business} from "../../../../../assets/industries/business.svg";
import {ReactComponent as Telecommunications} from "../../../../../assets/industries/telecommunications.svg";
import {ReactComponent as Hospitality} from "../../../../../assets/industries/hospitality.svg";
import {ReactComponent as Construction} from "../../../../../assets/industries/construction.svg";
import {ReactComponent as Transport} from "../../../../../assets/industries/transport.svg";
import {ReactComponent as Manufacturing} from "../../../../../assets/industries/manufacturing.svg";
import {ReactComponent as Pharmaceutical} from "../../../../../assets/industries/pharmaceutical.svg";

import Slider from "react-slick";
import {
  SliderArrowNext,
  SliderArrowPrev
} from "../../../../../components/SliderArrow/SliderArrow";
import App from "../../../../../App";
import LoadingSpinner from "../../../../../components/LoadingSpinner/LoadingSpinner";

const jobSliderSettings = {
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: <SliderArrowPrev to="prev" />,
  nextArrow: <SliderArrowNext to="next" />,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }
  ]
};

export default class JobsSlider extends React.Component {
  state = {
    categories: [],
    loading: true
  };

  render() {
    return (
      <section className="home__latest-jobs">
        <div className="container-maxwidth">
          <Fade bottom>
            <StyledTitle title="Latest Jobs" className="home__latest-jobs__title" />
            <div className="home__latest-jobs__body">
              <Link
                to="/jobseeker/findjob"
                className="home__latest-jobs__view-all only-show-desktop">
                View all jobs <FaChevronRight />
              </Link>
              {this.state.loading && <LoadingSpinner />}
              {!this.state.loading && this.state.categories.length > 0 && (
                <>
                  <div className="only-show-mobile">
                    {this.state.categories
                      .slice(0, 4)
                      .map(cat => this.getCategoryEntry(cat))}
                  </div>

                  <Slider {...jobSliderSettings} className="slick-slider--job">
                    {this.state.categories.map(cat => this.getCategoryEntry(cat))}
                  </Slider>
                </>
              )}
            </div>
          </Fade>
        </div>
      </section>
    );
  }

  componentDidMount() {
    App.Current.API.Jobs.GetCategories()
      .then(categories => {
        const data = {};
        for (let category of categories) {
          const catInfo = this.getCategoryInfo(parseInt(category.bullhornID));

          const existing = data[catInfo.name];
          if (existing) {
            existing["total"] += parseInt(category.total);
          } else {
            catInfo["total"] = parseInt(category.total);
            data[catInfo.name] = catInfo;
          }
        }
        this.setState({categories: Object.values(data), loading: false});
      })
      .catch(e => this.setState({loading: false}));
  }

  getCategoryEntry(category) {
    return (
      <Link to={category.link} key={category.name}>
        <div className="job-card">
          <div className="job-card__image">{category.image}</div>
          <p>{category.name}</p>
          <Link to={`/jobseeker/findjob`}>
            <button>{category.total}&nbsp;jobs</button>
          </Link>
        </div>
      </Link>
    );
  }

  getCategoryInfo(category) {
    switch (category) {
      case 1019208: // Construction
        return {
          name: "Construction",
          link: "/industries/construction",
          image: <Construction />
        };

      case 1025287: // Electrical
        return {
          name: "Electrical",
          link: "/industries/electrical",
          image: <HR />
        };

      case 1017967: // Accounting
        return {
          name: "Financial Services",
          link: "/industries/financial",
          image: <Financial />
        };

      case 1025305: // Labourer
        return {
          name: "Light Industrial",
          link: "/industries/industrial",
          image: <Industrial />
        };

      case 1021890: // Trades & Services
      case 1019549: // Engineering
      case 1025289: // Engineering Trades
      case 1025326: // Road Works
      case 1025267: // Agriculture
        return {
          name: "Trades & Infrastructure",
          link: "/industries/trades",
          image: <Trades />
        };

      case 1021600: // Sales & Marketing
      case 1021530: // Retail & Consumer Products
        return {
          name: "Sales & Marketing",
          link: "/industries/sales",
          image: <Sales />
        };

      case 1020886: // Information & Communication Technology
        return {
          name: "Information Technology",
          link: "/industries/it",
          image: <IT />
        };

      case 1020110: // Healthcare & Medical
        return {
          name: "HealthCare",
          link: "/industries/healthcare",
          image: <HealthCare />,
          jobNumber: 452
        };

      case 1025276: // Childcare
        return {
          name: "Education",
          link: "/industries/education",
          image: <Education />
        };

      case 1025299: // HR & Recruitment
      case 1020681: // Human Resources & Recruitment
      case 1018710: // Administration & Office Support
      case 1025283: // Customer Service & Call Centre
      case 1025279: // Commercial
        return {
          name: "Business Support",
          link: "/industries/business",
          image: <Business />
        };

      case 1025336: // Transport & Logistics
      case 1021156: // Manufacturing Transport & Logistics
      case 1025338: // Warehouse / Distribution
      case 1025339: // Warehousing
      case 1025324: // Removals
        return {
          name: "Transport, Logistics & Warehousing",
          link: "/industries/transport",
          image: <Transport />
        };

      case 1025307: // Manufacturing
      case 1025322: // Production
      case 1021386: // Mining Resources & Energy
        return {
          name: "Manufacturing",
          link: "/industries/manufacturing",
          image: <Manufacturing />
        };

      case -1: // Telecoms
        return {
          name: "Telecommunications",
          link: "/industries/telecommunications",
          image: <Telecommunications />
        };

      case -2: // Hospitality
        return {
          name: "Hospitality",
          link: "/industries/hospitality",
          image: <Hospitality />
        };

      case -3: // Pharmaceutical
        return {
          name: "Pharmaceutical",
          link: "/industries/pharmaceutical",
          image: <Pharmaceutical />
        };

      default:
        return {
          name: "Other",
          link: "/industries",
          image: <Other />
        };
    }
  }
}
