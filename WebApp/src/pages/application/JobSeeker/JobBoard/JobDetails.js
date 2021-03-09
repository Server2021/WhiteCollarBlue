import React, {Component} from "react";
import Button from "@material-ui/core/Button";
// styles
import style from "./JobDetails.module.scss";

// components
import {IoIosArrowForward} from "react-icons/io";
import {ScrollToTop, SplitNonEmpty, Metadata} from "../../../../Utilities";
import App from "../../../../App";
import ApplyNowModal from "./component/ApplyNowModal";
import {isNullOrUndefined} from "util";
import {formatDate} from "../../../../data/dateformatting";

export default class JobDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      job: null,
      found: true,
      applyNowOpen: false
    };
  }

  render() {
    const job = this.state.job;

    return (
      <>
        <iframe className="submitcv_iframe"  src="https://whitecollarblue.vincere.io/careers/" width="950px" height="2650px"></iframe>
      </>
    );
  }

  applySuccess() {
    App.Current.AlertSuccess("We'll contact you soon.");
  }

  getJobContent() {
    const job = this.state.job;

    return (
      <>
        {" "}
        <article>
          <div className={`body__article--padding ${style.jobDetails}`}>
            <h4>{job.title}</h4>
            {job.description && (
              <div dangerouslySetInnerHTML={{__html: job.description}} />
            )}
          </div>
          <div className={style.jobDetails_apply}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className="custom-button"
              onClick={this.handleApplyNowOpen}>
              Apply Now
            </Button>
          </div>
        </article>
        <aside>
          <div className={style.actions}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className="custom-button"
              onClick={this.handleApplyNowOpen}>
              Apply Now
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              className="custom-button"
              style={{background: "white"}}
              onClick={() => App.Current.Navigate("/jobseeker/board")}>
              Back to job list
            </Button>
          </div>
          <JobOverview job={job} />
        </aside>
      </>
    );
  }

  componentDidMount() {
    ScrollToTop();
    this.getJobInfo();
  }

  componentDidUpdate() {
    ScrollToTop();
    const currentId = this.getJobId();
    if (currentId != this.state.id) {
      if (this.state.id) {
        this.setState({
          id: currentId
        });
      }

      // Prevent Loop.
      if (this.state.found) {
        this.getJobInfo();
      }
    }
  }

  getJobId() {
    let id = null;

    // Look at the Address.
    const addressParts = SplitNonEmpty(window.location.pathname, "/");
    // Address has ID.
    if (addressParts.length == 3) {
      id = addressParts[2];
    }

    return id;
  }

  /**
   * Gets the Job Information.
   */
  getJobInfo() {
    const id = this.getJobId();

    // Populate model with Step data if an ID exists.
    if (id) {
      App.Current.API.Jobs.GetJob(id)
        .then(job => {
          // Set Page Metadata
          try {
            App.Current.SetPageName(job.title);
            Metadata("og:type", "article");
            //Metadata("description", job.summary);
            //Metadata("og:description", job.summary);
            Metadata(
              "og:url",
              `https://whitecollarblue.com.au/jobseeker/board/${job.id}`
            );
          } catch (e) {
            console.log(e);
          }

          // Set State.
          this.setState({job: job, id: id});
        })
        .catch(e => this.setState({found: false}));
    }
  }

  handleApplyNowOpen = () => {
    this.setState({applyNowOpen: true});
  };

  handleClose = () => {
    this.setState({applyNowOpen: false});
  };

  onApplyNowModalFormSubmit = () => {
    this.setState({applyNowOpen: false});
  };

  componentWillUnmount() {
    App.Current.SetPageName(null);
  }
}

const JobOverview = props => {
  const job = props.job;
  const address = job.address;
  const categories = job.categories
    .filter(c => !isNullOrUndefined(c))
    .map(c => c.name)
    .join(", ");
  const skills = job.skills
    .filter(s => !isNullOrUndefined(s))
    .map(s => s.name)
    .join(", ");

  return (
    <div className={style.overview}>
      {(categories || skills) && (
        <div>
          <span>
            {categories && <b>{categories}</b>}
            {skills && (
              <>
                &nbsp;
                <IoIosArrowForward />
                &nbsp;{skills}
              </>
            )}
          </span>
        </div>
      )}

      {address && (
        <div>
          <span>
            {address.country && (
              <>
                <b>{address.country}</b>
                &nbsp;
                <IoIosArrowForward />
                &nbsp;
              </>
            )}
            {address.region && (
              <>
                <b>{address.region}</b>
                &nbsp;
                <IoIosArrowForward />
                &nbsp;
              </>
            )}
            {address.locality && (
              <>
                {address.locality}
                &nbsp;
              </>
            )}
          </span>
        </div>
      )}

      {job.type && (
        <div>
          <span>
            <b>{job.type}</b>
          </span>
        </div>
      )}

      <hr />
      <div className={style.overview__moreDetail}>
        {job.bullhornID && (
          <div>
            <b>Job ID</b>
            <span>{job.bullhornID}</span>
          </div>
        )}
        {job.duration && (
          <div>
            <b>Duration</b>
            <span>{job.durationWeeks} Weeks</span>
          </div>
        )}
        {job.openings && (
          <div>
            <b>Positions Available</b>
            <span>{job.openings}</span>
          </div>
        )}
        {job.startDate && (
          <div>
            <b>Start Date</b>
            <span>{formatDate(job.startDate)}</span>
          </div>
        )}
      </div>

      <hr />

      <div className={style.overview__moreDetail}>
        <div>
          <b>Date Added</b>
          <span>{formatDate(job.created)}</span>
        </div>
      </div>
    </div>
  );
};
