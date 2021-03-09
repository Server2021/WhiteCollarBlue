import React, {Component} from "react";

import SubtitleWithLine from "../../../../../components/SubtitleWithLine/SubtitleWithLine";
import {Table} from "semantic-ui-react";
import ErrorView from "../../../../../components/ErrorView";
import {UserErrorMessage} from "../../../../../Utilities/errorHandling";
import LoadingSpinner from "../../../../../components/LoadingSpinner/LoadingSpinner";
import App from "../../../../../App";
import {formatDate} from "../../../../../data/dateformatting";
import {Link} from "react-browser-router";

export default class JobSeekerApplicationHistory extends Component {
  state = {
    loading: true,
    errored: false,
    error: null,
    applications: []
  };

  render() {
    if (this.state.errored) {
      return <ErrorView message={UserErrorMessage(this.state.error)} />;
    }

    return (
      <>
        <SubtitleWithLine title="Application History" />
        <div className="admin-container">
          <div className="admin-table__wrapper">
            <Table unstackable celled striped selectable className="admin-table">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Job</Table.HeaderCell>
                  <Table.HeaderCell>CV</Table.HeaderCell>
                  <Table.HeaderCell>Date Applied</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {!this.state.loading &&
                  this.state.applications.map(app => (
                    <Table.Row
                      key={app.id}
                      className={
                        app.job &&
                        (!app.job.isOpen || app.status !== "In Progress") &&
                        "status--closed"
                      }>
                      <Table.Cell>
                        <Link to={`/jobseeker/board/${app.job.id}`} target="_blank">
                          {app.job.title}
                        </Link>
                      </Table.Cell>
                      <Table.Cell>
                        <a
                          target="_blank"
                          href={App.Current.API.Administration.GetCVSubmissionUrl(
                            app.cv.id
                          )}>
                          {app.cv.filename}
                        </a>
                      </Table.Cell>
                      <Table.Cell>{formatDate(app.created)}</Table.Cell>
                      <Table.Cell>{app.status}</Table.Cell>
                    </Table.Row>
                  ))}
              </Table.Body>
            </Table>
          </div>
        </div>

        {this.state.loading && <LoadingSpinner />}
      </>
    );
  }

  componentDidMount() {
    App.Current.API.Administration.GetUserApplications()
      .then(applications =>
        this.setState({loading: false, applications: applications})
      )
      .catch(e => this.setState({loading: false, errored: true, error: e}));
  }
}
