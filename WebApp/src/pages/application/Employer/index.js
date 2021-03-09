import React, {Component} from "react";

// styles
import Introduction from "../../../components/Introduction/Introduction";
import App from "../../../App";

export default class EmployerHome extends Component {
  componentDidMount() {
    App.Current.SetPageName("Employers");
  }

  componentWillUnmount() {
    App.Current.SetPageName(null);
  }

  render() {
    return (
      <>
        <div className="body__article--padding">
          <Introduction
            title="Welcome to WhiteCollarBlue"
            videoSrc={require("../../../assets/employers/video.mp4")}
            posterSrc={require("../../../assets/employers/poster.jpg")}>
            <div>
              <p>
                Thank you for stopping by – Our Team Of Professional HR Specialist
                are poised to secure your next Talent Acquisition. We are dedicated
                to building Life-Long Business Relationships. Our Mission, Which the
                team at WhiteCollarBlue have chosen to accept is to secure Talent
                Solutions aligned to your core values.
              </p>

              <p>
                The team at WhiteCollarBlue will support you with a professional and
                innovative business solutions service, tailored to meet your specific
                needs - Our business solutions processes will be thorough and our
                fees transparent. We will reward your loyalty with continuous
                innovation, open and honest communication, respect and above all else
                a personalised approach to your specific needs. WhiteCollarBlue will
                take time to understand your business so we can continue to add value
                as our partnership builds.
              </p>
              <div className="description__list">
                <h3>
                  Why use <span>WhiteCollarBlue?</span>
                </h3>
                <ul>
                  <li>Personal approach to all your staffing needs</li>
                  <li>
                    Innovative, enthusiastic and experienced Industry Specialist
                  </li>
                  <li>Flexible and tailored Talent Solutions</li>
                  <li>
                    Twenty Five years’ experience in both the Blue and White collar
                    sectors
                  </li>
                  <li>Transparency and flexibility in all pricing</li>
                  <li>Agility in our approach</li>
                  <li>Life-Long Relationship focused</li>
                  <li>Continually looking to add value</li>
                  <li>True 24/7 approach to all your Talent needs</li>
                  <li>Global Reach To Support Your Business Scale</li>
                  <li>Transparency and open communication in all dealings</li>
                  <li>Your Vision is our Reality</li>
                </ul>
              </div>
            </div>
          </Introduction>
        </div>
      </>
    );
  }
}
