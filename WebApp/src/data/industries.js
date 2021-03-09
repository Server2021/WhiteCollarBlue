import React from "react";

import {ReactComponent as Industrial} from "../assets/industries/industrial.svg";
import {ReactComponent as Trades} from "../assets/industries/trades.svg";
import {ReactComponent as Financial} from "../assets/industries/financial.svg";
import {ReactComponent as Sales} from "../assets/industries/sales.svg";
import {ReactComponent as IT} from "../assets/industries/it.svg";
import {ReactComponent as HR} from "../assets/industries/hr.svg";
import {ReactComponent as HealthCare} from "../assets/industries/healthcare.svg";
import {ReactComponent as Education} from "../assets/industries/education.svg";
import {ReactComponent as Business} from "../assets/industries/business.svg";
import {ReactComponent as Telecommunications} from "../assets/industries/telecommunications.svg";
import {ReactComponent as Hospitality} from "../assets/industries/hospitality.svg";
import {ReactComponent as Construction} from "../assets/industries/construction.svg";
import {ReactComponent as Transport} from "../assets/industries/transport.svg";
import {ReactComponent as Manufacturing} from "../assets/industries/manufacturing.svg";
import {ReactComponent as Pharmaceutical} from "../assets/industries/pharmaceutical.svg";

export const IndustryList = [
  {name: "Light Industrial", link: "/industries/industrial", image: <Industrial />},
  {name: "Trades & Infrastructure", link: "/industries/trades", image: <Trades />},
  {name: "Financial Services", link: "/industries/financial", image: <Financial />},
  {name: "Sales & Marketing", link: "/industries/sales", image: <Sales />},
  {name: "Information Technology", link: "/industries/it", image: <IT />},
  {name: "Electrical", link: "/industries/electrical", image: <HR />},
  {name: "HealthCare", link: "/industries/healthcare", image: <HealthCare />},
  {name: "Education", link: "/industries/education", image: <Education />},
  {name: "Business Support", link: "/industries/business", image: <Business />},
  {
    name: "Telecommunications",
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
