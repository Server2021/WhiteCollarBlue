import React, {Component} from "react";
import HeroSection from "../../../components/Hero/Hero";
import "../../../components/Hero/Hero.scss";
import BackgroundImage from "../../../assets/bluebg.jpg";
import "./style.scss";
import App from "../../../App";

export default class TermsOfUse extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    App.Current.SetPageName("Terms of Use");
  }

  componentWillUnmount() {
    App.Current.SetPageName(null);
  }

  render() {
    return (
      <>
        {/* 01. hero */}
        <HeroSection backgroundImage={BackgroundImage} title="Terms of Use" />
        {/* 02. body */}
        <section className="body__bg">
          <div className="container-maxwidth body__container">
            {/* article */}
            <article className="body__article body__article--padding privacy-policy terms-of-use">
              <ol>
                <li>
                  <h5>Terms of Use</h5>
                  WhiteCollarBlue is a leading recruitment services firm in
                  Australia. Our people are committed to providing innovative
                  solutions For our clients across a broad range of services and
                  locations for us to continue provide such solutions, we collect and
                  use personal information.
                </li>

                <br />
                <br />

                <li>
                  <h5>Collection Of Personal Information</h5>
                  So that we can provide you with a high level of service, we may ask
                  for personal details such as your name, contacts details and the
                  types of solutions that may interest you. We want to be able to
                  contact you with information regarding a service or product on
                  offer.
                  <br />
                  <br />
                  WhiteCollarBlue will endeavour to collect the information from you
                  personally. If this is not possible and someone collects the
                  information on our behalf, we will ensure that they are aware of
                  this policy.
                  <br />
                  <br />
                  WhiteCollarBlue collects information for employment, recruitment,
                  labour hire and related purposes (the “Purpose”). This includes the
                  general purpose of finding you suitable employment opportunities
                  through our clients, our various businesses and the clients and
                  businesses of our related entities. We collect, store and use your
                  information in accordance with our Privacy Policy which can be
                  viewed on ‘Our Policies’ page at
                  https://www.whitecollarblue.com.au/privacy-policy. Our Privacy
                  Policy confirms that your information will be stored in a secure
                  database and may be shared with WhiteCollarBlue related entities
                  for the Purpose.
                  <br />
                  <br />
                  Your identity and personal details may be provided to clients and
                  prospective employers once a suitable position has been identified
                  or a client or potential employer wishes to contact you. These
                  clients and employers may be clients or customers or
                  WhiteCollarBlue or any of its related entities. You may request to
                  gain access, have amended, this information at any time by calling
                  WhiteCollarBlue office on 1300 559 662 or otherwise following the
                  procedures set out in our Privacy Policy. WhiteCollarBlue is a
                  registered Employment Agent and/or complies with all applicable
                  obligations under the Private Employment Agents (Code of Conduct)
                  Regulation 2005 (Qld, Industrial Relations Act 2016 (Qld),
                  Vocational Education, Training and Employment Act 2000 (Qld),
                  Workers’ Compensation and Rehabilitation Act 2003(Qld), Workplace
                  Health and Safety Act 1995 (Qld), all corresponding State and
                  Territory Acts, the Privacy Act 1988 (Cth), Fair Work (Registered
                  Organisations) Act 2009 (Cth), the Fair Work Act 2009 (Cth), the
                  Consumer and Competition Act 2010 (Cth) and the Freedom of
                  Information Act 1982 (Cth).
                  <br />
                  <br />
                  By accepting these terms & conditions you consent to your details
                  being collected, stored and used for the purpose as described
                  above.
                </li>

                <br />
                <br />

                <li>
                  <h5>Use and Disclosure of Personal Information</h5>
                  WhiteCollarBlue may use or disclose personal information about you
                  to provide you with a service or product on offer. If we disclose
                  personal information to another party, we will ensure that the
                  person is aware of this policy. If any personal information has
                  been lost or subjected to unauthorised access, use, modification,
                  disclosure or other misuse (Data Breach), WhiteCollarBlue will take
                  all necessary steps to immediately contain & rectify the Data
                  Breach and prevent the Data Breach from future reoccurrence. Where
                  the Data Breach is deemed eligible and likely to result in serious
                  harm, WhiteCollarBlue will take reasonable steps to notify you and
                  provide you with relevant information in relation to the Data
                  Breach.
                  <br />
                  <br />
                  If you do not wish to receive any information from WhiteCollarBlue
                  please contact us on 1300 559 662 or email
                  reception@whitecollarblue.com.au
                  <br />
                  <br />
                  <ol type="i">
                    <li>
                      <h6>Reference Check Consent</h6>
                      By accepting these terms & conditions you consent to
                      WhiteCollarBlue and its related entities staff members
                      contacting your referees, prior to your details being forwarded
                      to a client regarding temporary, contract or permanent
                      employment. Whether provided during your interview, resume
                      upload or added online. If you do not wish for your references
                      to be checked in relation to work, please remove references
                      from your profile.
                    </li>
                    <li>
                      <h6>Photographic Consent</h6>
                      By accepting these terms & conditions you consent for
                      WhiteCollarBlue and its related entities to store a photograph
                      or digital image (“Images”) of you and to copyright, use,
                      publish and/or share with its related entities such Images.
                      This includes using the Images in candidate market reports for
                      clients, corporate videos, brochures, social media, ID Badges,
                      verifying rights to work documentation and WhiteCollarBlue or
                      its related entities’ web-site.
                    </li>
                    <li>
                      <h6>SMS & Email Consent</h6>
                      By accepting these terms & conditions you consent for
                      WhiteCollarBlue and its related entities to send you SMS/Email
                      about employment opportunities from WhiteCollarBlue and related
                      entities if you have these notification preferences turned on.
                    </li>
                    <li>
                      <h6>Authority to Check Qualifications</h6>
                      By accepting these terms & conditions you consent for
                      WhiteCollarBlue and its related entities to confirm details of
                      previously provided qualifications with relevant institutions
                      and/or professional bodies as required. If you do not want your
                      qualifications to be check by WhiteCollarBlue and its related
                      entities, please remove them from your profile.
                    </li>
                    <li>
                      <h6>Authority to Obtain Details of Right to Work Status</h6>
                      By accepting these terms & conditions you consent for
                      WhiteCollarBlue and its related entities undertaking a Visa
                      Entitlement Verification Online (VEVO) search with the
                      Department of Immigration and Border Protection (“Department”).
                      You also consent for the Department to release your right to
                      work status to WhiteCollarBlue or our related entities. By
                      providing this authority, you understand that the information
                      obtained from the Department will be used by WhiteCollarBlue or
                      its related entities for the purpose of establishing your legal
                      entitlement to work in Australia, and for no other purpose.
                      <br />
                      <br />
                      WhiteCollarBlue as an employment agent and its employees have a
                      working knowledge of State and Commonwealth legislation
                      affecting the placement and employment of work seekers.
                      WhiteCollarBlue will not charge fees to work seekers in
                      contravention of the Industrial Relations Act 1999, section
                      408D. WhiteCollarBlue will make all placements as required
                      under the relevant legislation. WhiteCollarBlue will not engage
                      in misleading or deceptive conduct (such as advertising a
                      position as being available when the agency knows no such
                      position exists or knowingly giving misleading information to a
                      job seeker about the nature of a position). If a job seeker
                      believes that an employment placement service has acted
                      inappropriately, the job seeker may contact the Office of Fair
                      Trading for information on possible action that may be taken.
                      The Office of Fair Trading is contactable on 13 32 20.
                      <br />
                      <br />
                      By accepting these terms & conditions I declare that the
                      details provided by me to WhiteCollarBlue from time to time,
                      including the information provided on this employment website,
                      are true and correct. I understand that before being employed
                      for any temporary assignment or permanent role, additional
                      checks and information may be required, and I will be advised
                      of this at the time of briefing
                      <br />
                      <br />
                      To opt out of any of these consent items or to deactivate your
                      account please contact WhiteCollarBlue - 1300 559 662.
                    </li>
                  </ol>
                </li>

                <br />
                <br />

                <li>
                  <h5>Disclaimer</h5>
                  The information contained in this site is for general guidance on
                  matters of interest only. The application and impact of laws can
                  vary widely based on the specific facts involved. Given the
                  changing nature of laws, rules and regulations, and the inherent
                  hazards of electronic communication, there may be delays, omissions
                  or inaccuracies in information contained in this site. Accordingly,
                  the site should not be used as a substitute for consultation with
                  relevant and competent advisers. Before making any decision or
                  taking any action, you should consult a WhiteCollarBlue
                  professional.
                  <br />
                  <br />
                  While we have made every attempt to ensure that the information
                  contained in this site has been obtained from reliable sources,
                  WhiteCollarBlue is not responsible for any errors or omissions, or
                  for the results obtained from the use of this information.
                  <br />
                  <br />
                  All information in this site is provided "as is", with no guarantee
                  of completeness, accuracy, timeliness or of the results obtained
                  from the use of this information, and without warranty of any kind,
                  express or implied, including, but not limited to warranties of
                  performance, merchantability and fitness for a particular purpose.
                  In no event will WhiteCollarBlue and its related partnerships or
                  corporations, or the partners, agents or employees thereof be
                  liable to you or anyone else for any decision made or action taken
                  in reliance on the information in this site or for any
                  consequential, special or similar damages, even if advised of the
                  possibility of such damages.
                  <br />
                  <br />
                  Certain links in this site connect to other Web sites maintained by
                  third parties over whom WhiteCollarBlue has no control.
                  WhiteCollarBlue makes no representations as to the accuracy or any
                  other aspect of information contained in other Web sites.
                </li>
              </ol>
            </article>
          </div>
        </section>
      </>
    );
  }
}
