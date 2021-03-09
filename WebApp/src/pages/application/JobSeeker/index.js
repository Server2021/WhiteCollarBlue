import React, {Component} from "react";

// styles
import Introduction from "../../../components/Introduction/Introduction";
import App from "../../../App";

// components

// assets

export default class JobSeekerHome extends Component {
  componentDidMount() {
    App.Current.SetPageName("Job Seekers");
  }

  componentWillUnmount() {
    App.Current.SetPageName(null);
  }

  render() {
    return (
      <>
        <div className="body__article--padding">
          <Introduction
            title="Welcome to WhiteCollarBlue’s Jobseekers Hub"
            videoSrc={require("../../../assets/job-seekers/video.mp4")}
            posterSrc={require("../../../assets/job-seekers/poster.jpg")}>
            <div>
              <p>
                The team at <b>WhiteCollarBlue</b> are dedicated to finding you your
                next dream career move. There is a lot to think about when changing
                roles – Let us guide you in the importance of developing a career
                blueprint that demonstrates planning, strategy, careful selection and
                execution towards your career goals. This is what your employer is
                looking for in your resume.
              </p>
              <p>
                Our Team of experienced Talent Specialists have the skills and
                experience to get the results that you are looking for, remember A
                career is something that you need to develop not bumble your way
                through – Employers will develop an opinion based on your past
                direction and development detailed in your past career choices.
              </p>
              <p>
                Our communication with you will be open and honest and we will
                maintain contact throughout the process and we will reward your
                loyalty in staying exclusive with WhiteCollarBlue with inclusion in
                our rewards program.
              </p>
              <p>
                WhiteCollarBlue will take time to understand your career goals and
                dreams and will treat you with respect at all times working through
                the challenges in realising those goals.
              </p>

              <div className="description__list">
                <h3>
                  Why use <span>WhiteCollarBlue?</span>
                </h3>
                <ul>
                  <li>We Listen.</li>
                  <li>
                    We have Industry Specialist with the skills and experience to get
                    the result you are looking for.
                  </li>
                  <li>
                    We have twenty five years’ experience combining both the Blue and
                    White collar sectors.
                  </li>
                  <li>We are relationship focused.</li>
                  <li>
                    We maintain contact with all candidates placed on assignment
                    <br /> to monitor your engagement & job satisfaction.
                  </li>
                  <li>
                    We recognise excellence through our employee rewards and
                    recognition program.
                  </li>
                  <li>
                    We give advice on career transition and interview preparation so
                    that
                    <br /> you can present your best self to potential employers.
                  </li>
                  <li>
                    We do nothing without your permission – when we are working
                    together – <br />
                    it is a partnership aligned to your desired outcomes.
                  </li>
                </ul>
              </div>
            </div>
          </Introduction>
        </div>
      </>
    );
  }
}
