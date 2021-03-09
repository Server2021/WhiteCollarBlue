import React, {Component} from "react";
import {FaChevronDown} from "react-icons/fa";
import "./style.scss";
import StyledTitle from "../../../../components/StyledTitle/StyledTitle";
import App from "../../../../App";

const Card = props => {
  return (
    <div className="talent__card">
      <div onClick={props.click} className="talent__card__title">
        <h4>{props.title}</h4>
        <FaChevronDown className={props.show && "icon-vertical-flipped"} />
      </div>
      {props.show && <div className="talent__card__content">{props.children}</div>}
    </div>
  );
};

export default class TalentSolutions extends Component {
  constructor() {
    super();
    this.state = {
      show: [false, false, false, false, false, false]
    };
  }

  showHandler(num) {
    this.setState(prevState => {
      const newItems = [...prevState.show];
      newItems[num] = !newItems[num];
      return {show: newItems};
    });
  }

  componentDidMount() {
    App.Current.SetPageName("Talent Solutions");
  }

  componentWillUnmount() {
    App.Current.SetPageName(null);
  }

  render() {
    return (
      <>
        <div className="body__article--padding">
          <StyledTitle title="Talent Solutions" small />
          <div className="talent__description">
            <p>
              The team at WhiteCollarBlue realise that not every Business or Industry
              face the same challenges around Talent Sourcing. WhiteCollarBlue have
              developed a suite of services aimed at providing the answers to all
              your potential recruitment needs. If it is not listed below – talk to
              us and we will develop the right Talent Solution to meet your needs.
            </p>
          </div>
          <Card
            title="Increased Workload"
            click={() => this.showHandler(0)}
            show={this.state.show[0]}>
            <p>
              White Collar & Blue Collar experienced casual staff are available on an
              hourly hire basis from as little as four hours through to a permanent
              casual all year-round arrangement. Ideal for coverage of sick leave,
              maternity leave, annual leave or simply just to cover peaks in
              workflow. Whether it's a last-minute emergency or a planned staffing
              requirement WhiteCollarBlue has casual staff ready to help you.
              <br />
              <br />
              Utilising Casuals Full Time onsite is a great way to identify possible
              Talent that you may want to consider for permanent positions you have
              vacant within your organisation. Our Temporary with view to Permanent
              service is a popular option for most companies that are looking to
              recruit permanent staff but want to minimise the Risks, Costs and
              Exposure which too often comes from a wrong hiring decision.
              WhiteCollarBlue will recruit a casual employee who meets the personal
              and position profile criteria for the permanent vacancy you have
              available, advising the candidate of the potential for the position to
              go permanent dependant on their suitability. We will payroll the casual
              for an agreed trial period (after which no fee will be applicable if
              you decide to make an offer) allowing you to assess their suitability
              before the possible offer of permanent employment.
            </p>
          </Card>
          <Card
            title="Projects"
            click={() => this.showHandler(1)}
            show={this.state.show[1]}>
            <p>
              Utilising Fixed Term contract staff for project work is very similar to
              the flexibility of casual staff, you still have the same flexibility
              but the difference in the mindset of the casual project staff knowing
              they have a commitment from you for as fixed term unlike the
              uncertainty of a casual assignment will mean you will get greater
              engagement for longer allowing consistency of productivity and
              minimisation of the effects and costs of casual staff turnover through
              the uncertainty of work duration by the project staff as they are more
              likely to be more engaged through greater certainty around project
              timelines. <br />
              <br />
              Generally with Projects you know well in advance of the likely start
              thereby giving us the required time to source a strong well skilled
              team for the project that otherwise would not be available on short
              notice when requesting talent for immediate casual requirements - The
              more time you give us to recruit for projects, the stronger the
              workforce we can build for you.
            </p>
          </Card>
          <Card
            title="Bulk Recruitment"
            click={() => this.showHandler(2)}
            show={this.state.show[2]}>
            <p>
              WhiteCollarBlue has the capability and experience to provide bulk
              recruitment services across Australia with its global footprint through
              its newly established membership with NPA Worldwide.
              <br />
              <br />
              Our Talent specialist are poised to deliver high-volume recruitment
              campaigns for businesses regularly involved with cyclic or
              project-based work, we have experience in delivering bulk or modulated
              recruitment outcomes across various industry sectors such as utilities,
              telecommunications, finance and insurance.
            </p>
          </Card>
          <Card
            title="Permanent Recruitment"
            click={() => this.showHandler(3)}
            show={this.state.show[3]}>
            <p>
              This full recruitment service offers an end to end extensive process
              tailored to source, screen and place the right talent for your business
              that is not only skills aligned but is a strong cultural fit. Our
              experienced permanent talent specialist will listen to your needs, gain
              a strong understanding of your business with its past and present HR
              challenges before designing a tailored talent sourcing option to meet
              your needs.
              <br />
              <br />
              Our consultants are experienced to help you with positions at all
              levels across all industries.
              <br />
              <br />
              WhiteCollarBlue will tailor a solution to suit your needs. You can hand
              over entire recruitment process to WhiteCollarBlue, or just one or two
              aspects. You can consult WhiteCollarBlue about salary packaging and
              general market comparisons or advice on contract inclusions.
              <br />
              <br />
              We are an extension of your HR and are poised to help in all aspects of
              your permanent talent sourcing.
            </p>
          </Card>
          <Card
            title="Executive Search"
            click={() => this.showHandler(4)}
            show={this.state.show[4]}>
            <p>
              WhiteCollarBlue's Executive Search is underpinned by experienced Talent
              Specialist's that are extremely resourceful, who boast numerous
              sourcing strategies across a global footprint in its partnership with
              NPA Worldwide.
              <br />
              <br />
              This provides access to you of a network of over 500 specialists
              covering every major city in the world.
              <br />
              <br />
              Our Executive Talent Specialist provide search, selection and talent
              management for organisations needing to recruit senior roles including
              Analysts, Accountants, Directors, Project Managers, Finance Managers,
              Executive Directors, Vice Presidents, CFOs, Divisional and Functional
              Heads of Business, Managing Directors, C-Suite and more.
              <br />
              <br />
              We are recognised for our speed and flexibility as well as our high
              success rates in sourcing suitably qualified candidates at senior
              management, executive and leadership levels.
            </p>
          </Card>
          <Card
            title="Retained Services"
            click={() => this.showHandler(5)}
            show={this.state.show[5]}>
            <div>
              <p>
                Not all business can support an internal HR function... however, it
                is important you understand your responsibilities in relation to
                people management and the legislative framework that applies.
                WhiteCollarBlue has designed retained HR services to meet your
                requirements, where you have your very own external HR specialist on
                call to provide HR advice and guidance.
              </p>

              <p>
                <b>Some of our retained HR services include:</b>
              </p>

              <ul>
                <li>HR telephone and email help-desk support</li>

                <li>Regular Site visits as agreed with you</li>

                <li>Review of your current HR Framework</li>

                <li>Maintenance of HR policies and procedures</li>
              </ul>

              <br />
              <p>
                Sometimes you need more focused help with HR issues and challenges in
                addition to the day-to-day management of HR. WhiteCollarBlue can
                provide you with a range of HR Services including Membership models,
                Outsourcing, Consulting and Coaching support.
                <br />
                <br />
                WhiteCollarBlue works closely with you to build a sustainable
                relationship and deliver a service that suits your needs and the
                culture of your organisation.
                <br />
                <br />
                We combine a practical operational approach with a strategic
                perspective, providing targeted and cost-effective expert service on
                the full range of HR Services through our retained services model as
                you need it and when you need it most.
              </p>
            </div>
          </Card>
        </div>
      </>
    );
  }
}
