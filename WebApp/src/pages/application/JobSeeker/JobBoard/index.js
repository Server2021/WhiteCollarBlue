import React, {Component} from "react";

// styles
import "./style.scss";

// components
import {JobCard} from "../../../../components/JobSearch/JobCard/JobCard";
import JobAlert from "./component/JobAlert";
import {Button} from "@material-ui/core";
import JobSearchBar, {
  GetJobSearchFilters
} from "../../../../components/JobSearch/JobSearchBar/JobSearchBar";
import App from "../../../../App";
import Paginator from "../../../../components/Paginator";
import PageInfo from "../../../../Services/api/models/PageInfo";
import LoadingSpinner from "../../../../components/LoadingSpinner/LoadingSpinner";
import ErrorView from "../../../../components/ErrorView";
import {UserErrorMessage} from "../../../../Utilities/errorHandling";
import {Link} from "react-browser-router";
import NotFound from "../../../../assets/job-seekers/not-found.svg";
import Reporter from "../../../../Services/reporter";

// assets

export default class JobBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      results: new PageInfo(),
      loading: true,
      errored: false,
      error: null,
      categories: [],
      skills: []
    };

    this.filters = {};
  }

  render() {
    const hasFilters = Object.keys(this.filters).length > 0;

    return (
      <>
        <div>
          <div className="jobboard__jobsearch">
            <JobSearchBar location={this.props.location} />
          </div>
          <div className="body__article--padding">
            {/* job list */}
            <div className="joblist">
              {this.state.results.total > 0 && (
                <div className="joblist__result">
                  <span>
                    <b>{this.state.results.total}</b>&nbsp;jobs found
                  </span>
                </div>
              )}
              <JobAlert location={this.props.location} />
              <div>
                {!this.state.loading && (
                  <>
                    {this.state.results.data.map(job => (
                      <JobCard key={job.id} job={job} />
                    ))}

                    {/* No Jobs Found */}
                    {this.state.results.total === 0 && (
                      <div>
                        {hasFilters && (
                          <div className="joblist__result--none">
                            <img src={NotFound} alt="No Jobs Found" />
                            <h4>No jobs match the criteria you have provided</h4>
                            <Link to="/jobseeker/board">
                              <Button
                                type="button"
                                color="primary"
                                variant="contained"
                                className="custom-button jobsearch__clearFilters">
                                Clear Filters
                              </Button>
                            </Link>
                          </div>
                        )}
                        {!hasFilters && (
                          <div className="joblist__result--none">
                            <img src={NotFound} alt="No Jobs Found" />
                            <h4>No jobs found, come back later</h4>
                          </div>
                        )}
                      </div>
                    )}
                  </>
                )}
                {this.state.loading && <LoadingSpinner />}
                {this.state.errored && (
                  <ErrorView message={UserErrorMessage(this.state.error)} />
                )}
              </div>
              <Paginator
                style={{marginTop: "60px"}}
                page={this.state.results.page}
                size={this.state.results.size}
                total={this.state.results.total}
                onPageChange={this.onPageChange}
              />
            </div>
          </div>
        </div>
      </>
    );
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.loadData();
    App.Current.SetPageName("Job Board");

    const params = new URLSearchParams(window.location.search);
    const unsubscribe = params.get("unsubscribe");
    if (unsubscribe) {
      const parts = unsubscribe.split(":");
      if (parts[0] === "jobalert") {
        App.Current.API.Jobs.DeleteJobAlert(parts[1])
          .then(() => {
            App.Current.AlertSuccess("Your Job Alert has been deleted.");
          })
          .catch(e => {
            Reporter.ReportError(e);
            App.Current.Alert(UserErrorMessage(e));
          });
      }
    }
  }

  componentWillUnmount() {
    App.Current.SetPageName(null);
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.location !== prevProps.location &&
      this.props.location.pathname.toLowerCase() === "/jobseeker/board"
    ) {
      this.loadData();
    }
  }

  clearFilters = e => {
    if (e) {
      e.preventDefault();
    }

    window.location.search = "";
  };

  /**
   * Reload the Jobs.
   */
  loadData = () => {
    this.filters = GetJobSearchFilters();
    App.Current.API.Jobs.GetJobs(this.filters, this.state.page, 10)
      .then(jobs =>
        this.setState({
          results: jobs,
          loading: false
        })
      )
      .catch(e =>
        this.setState({
          errored: true,
          error: e,
          results: new PageInfo(),
          loading: false
        })
      );
  };

  /**
   * Change the Page.
   */
  onPageChange = page => {
    this.setState({page: page}, this.loadData);
  };
}
