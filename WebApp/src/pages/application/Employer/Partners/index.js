import React, {Component} from "react";
import {FaChevronDown} from "react-icons/fa";
import "./style.scss";
import StyledTitle from "../../../../components/StyledTitle/StyledTitle";

import NPAImage from "../../../../assets/employers/npa.jpg";
import NECAImage from "../../../../assets/employers/neca.png";
import RCSAImage from "../../../../assets/employers/rcsa.jpg";
import App from "../../../../App";

export default class Partners extends Component {
  componentDidMount() {
    App.Current.SetPageName("Partners");
  }

  componentWillUnmount() {
    App.Current.SetPageName(null);
  }

  render() {
    return (
      <>
        <div className="body__article--padding">
          <StyledTitle title="Partners" small />
          <div className="partners">
            <div className="partners__div">
              <img src={NPAImage} alt="NPA Worldwide" />
              <div className="partners__description">
                <h5>NPA Worldwide</h5>
                <p>
                  Our Global Recruitment Network Partners NPA Worldwide provides us
                  with a global reach to support your Talents solution requirements.
                  In Partnering with WhiteCollarBlue we are now in a strong position
                  to truly source the best talent globally for your organisation
                  giving you greater access to more highly qualified and experienced
                  talent pool.
                </p>
              </div>
            </div>
            <div className="partners__div">
              <img src={NECAImage} alt="NPA Worldwide" />
              <div className="partners__description">
                <h5>NECA</h5>
                <p>
                  WhiteCollarBlue’s Specialisation in the Electrical market is
                  further substantiated through our partnership with Neca, The
                  National Electrical and Communications Association. We have been a
                  member of Neca for many years and our joint association has
                  strengthened our position in the Electrical Contracting Industry
                  with WhiteCollarBlue being recognised and Sydney’s premium provider
                  of Electrical Talent to the Industry.
                </p>
              </div>
            </div>
            <div className="partners__div">
              <img src={RCSAImage} alt="NPA Worldwide" />
              <div className="partners__description">
                <h5>R.C.S.A</h5>
                <p>
                  Since its inception in May of 2010 WhiteCollarBlue has been a
                  member of the R.C.S.A (Recruitment, Consulting & Staffing
                  Association). The R.C.S.A is the peak body for the Recruitment &
                  Staffing Industry across Australia and New Zealand. Being a member
                  of the R.C.S.A ensures you are dealing with a professional HR
                  Solutions provider who is driven by the same ethics and values of
                  the association and its partners in delivering excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
