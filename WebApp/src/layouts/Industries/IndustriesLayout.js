import React, {Component} from "react";
import {Link, Switch, Route} from "react-router-dom";

// styles
import "../../pages/application/Industries/Components/style.scss";
import "../../components/Hero/Hero.scss";

// components
import HeroSection from "../../components/Hero/Hero";
import "../../components/Hero/Hero.scss";
import {SideMenuMobile} from "../components/SideMenu/SideMenuMobile";

// assets
import BackgroundImage from "../../assets/industries/industries.jpeg"; // Path to BackgroundImage

import {ReactComponent as Industrial} from "../../assets/industries/industrial.svg";
import {ReactComponent as Trades} from "../../assets/industries/trades.svg";
import {ReactComponent as Financial} from "../../assets/industries/financial.svg";
import {ReactComponent as Sales} from "../../assets/industries/sales.svg";
import {ReactComponent as IT} from "../../assets/industries/it.svg";
import {ReactComponent as Electrical} from "../../assets/industries/electrical.svg";
import {ReactComponent as HealthCare} from "../../assets/industries/healthcare.svg";
import {ReactComponent as Education} from "../../assets/industries/education.svg";
import {ReactComponent as Business} from "../../assets/industries/business.svg";
import {ReactComponent as Telecommunications} from "../../assets/industries/telecommunications.svg";
import {ReactComponent as Hospitality} from "../../assets/industries/hospitality.svg";
import {ReactComponent as Construction} from "../../assets/industries/construction.svg";
import {ReactComponent as Transport} from "../../assets/industries/transport.svg";
import {ReactComponent as Manufacturing} from "../../assets/industries/manufacturing.svg";
import {ReactComponent as Pharmaceutical} from "../../assets/industries/pharmaceutical.svg";

// Pages
import IndustriesPage from "../../pages/application/Industries/index";
import {HealthcarePage} from "../../pages/application/Industries/Healthcare";
import {IndustrialPage} from "../../pages/application/Industries/Industrial";
import {SalesPage} from "../../pages/application/Industries/Sales";
import {TradesPage} from "../../pages/application/Industries/Trades";
import {FinancialPage} from "../../pages/application/Industries/Financial";
import {ITPage} from "../../pages/application/Industries/IT";
import {ElectricalPage} from "../../pages/application/Industries/Electrical";
import {EducationPage} from "../../pages/application/Industries/Education";
import {TelecommunicationsPage} from "../../pages/application/Industries/Telecommunications";
import {HospitalityPage} from "../../pages/application/Industries/Hospitality";
import {ConstructionPage} from "../../pages/application/Industries/Construction";
import {TransportPage} from "../../pages/application/Industries/Transport";
import {ManufacturingPage} from "../../pages/application/Industries/Manufacturing";
import {PharmaceuticalPage} from "../../pages/application/Industries/Pharmaceutical";
import {BusinessSupportPage} from "../../pages/application/Industries/BusinessSupport";
import ErrorView from "../../components/ErrorView";

const MenuList = [
  {name: "Light Industrial", link: "/industries/industrial", image: <Industrial />},
  {name: "Trades & Infrastructure", link: "/industries/trades", image: <Trades />},
  {name: "Financial Services", link: "/industries/financial", image: <Financial />},
  {name: "Sales & Marketing", link: "/industries/sales", image: <Sales />},
  {name: "Information Technology", link: "/industries/it", image: <IT />},
  {name: "Electrical", link: "/industries/electrical", image: <Electrical />},
  {name: "HealthCare", link: "/industries/healthcare", image: <HealthCare />},
  {name: "Education", link: "/industries/education", image: <Education />},
  {name: "Business Support", link: "/industries/business", image: <Business />},
  {
    name: "Telecommuni-cations",
    link: "/industries/telecommunications",
    image: <Telecommunications />,
  },
  {name: "Hospitality", link: "/industries/hospitality", image: <Hospitality />},
  {name: "Construction", link: "/industries/construction", image: <Construction />},
  {
    name: "Transport, Logistics & Warehousing",
    link: "/industries/transport",
    image: <Transport />,
  },
  {
    name: "Manufacturing",
    link: "/industries/manufacturing",
    image: <Manufacturing />,
  },
  {
    name: "Pharmaceutical",
    link: "/industries/pharmaceutical",
    image: <Pharmaceutical />,
  },
];

export default class IndustriesLayout extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        {/* 01. hero */}
        <HeroSection
          backgroundImage={BackgroundImage}
          title="Industries"
          withSubMenu
        />

        {/* 02. body */}
        <section>
          <div className="only-show-mobile">
            <SideMenuMobile data={MenuList} />
          </div>
          {/* job category */}
          <div className="only-show-desktop">
            <div className="container-maxwidth">
              <div className="industries-menu__wrapper">
                {MenuList.map((item) => (
                  <Link key={item.name} to={item.link} className="industries-menu">
                    <div>
                      <div className="industries-menu__icon">{item.image}</div>
                      <div className="industries-menu__name">
                        <h6>{item.name}</h6>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* article */}

          <article className="industries-article">
            <Switch>
              <Route exact path="/industries" component={IndustriesPage} />
              <Route path="/industries/industrial" component={IndustrialPage} />
              <Route path="/industries/trades" component={TradesPage} />
              <Route path="/industries/financial" component={FinancialPage} />
              <Route path="/industries/sales" component={SalesPage} />
              <Route path="/industries/it" component={ITPage} />
              <Route path="/industries/electrical" component={ElectricalPage} />
              <Route path="/industries/healthcare" component={HealthcarePage} />
              <Route path="/industries/education" component={EducationPage} />
              <Route path="/industries/business" component={BusinessSupportPage} />
              <Route
                path="/industries/telecommunications"
                component={TelecommunicationsPage}
              />
              <Route path="/industries/hospitality" component={HospitalityPage} />
              <Route path="/industries/construction" component={ConstructionPage} />
              <Route path="/industries/transport" component={TransportPage} />
              <Route
                path="/industries/manufacturing"
                component={ManufacturingPage}
              />
              <Route
                path="/industries/pharmaceutical"
                component={PharmaceuticalPage}
              />
              {/* Not Found */}
              <Route
                exact
                path="*"
                render={(props) => <ErrorView {...props} errorcode="404" />}
              />
            </Switch>
          </article>
        </section>
      </>
    );
  }
}
