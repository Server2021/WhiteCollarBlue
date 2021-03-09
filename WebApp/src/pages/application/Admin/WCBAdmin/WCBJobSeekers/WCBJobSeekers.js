import React, {Component} from "react";
import {Link} from "react-router-dom";
import SubtitleWithLine from "../../../../../components/SubtitleWithLine/SubtitleWithLine";
import {Table} from "semantic-ui-react";
import {formatDate} from "../../../../../data/dateformatting";
import App from "../../../../../App";
import PageInfo from "../../../../../Services/api/models/PageInfo";
import ErrorView from "../../../../../components/ErrorView";
import {UserErrorMessage} from "../../../../../Utilities/errorHandling";
import LoadingSpinner from "../../../../../components/LoadingSpinner/LoadingSpinner";
import Paginator from "../../../../../components/Paginator";

export default class WCBJobSeekers extends Component {
  state = {
    page: 0,
    results: new PageInfo(),
    loading: true,
    errored: false,
    error: null
  };

  render() {
    return (
      <>
        <SubtitleWithLine title="Job Seekers" />
        <div className="admin-container">
          <div className="admin-table__wrapper">
            <Table unstackable celled striped selectable className="admin-table">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Phone Number</Table.HeaderCell>
                  <Table.HeaderCell>Email</Table.HeaderCell>
                  <Table.HeaderCell>Date Registered</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {!this.state.loading &&
                  this.state.results.data.map(user => (
                    <Table.Row key={user.id}>
                      <Table.Cell>
                        <Link to={`/admin/jobseekers/${user.id}`}>{user.name}</Link>
                      </Table.Cell>
                      <Table.Cell>{user.phone || "None"}</Table.Cell>
                      <Table.Cell>{user.email}</Table.Cell>
                      <Table.Cell>{formatDate(user.registerdate)}</Table.Cell>
                    </Table.Row>
                  ))}
              </Table.Body>
            </Table>
            {this.state.loading && <LoadingSpinner />}
            {this.state.errored && (
              <ErrorView message={UserErrorMessage(this.state.error)} />
            )}
            <Paginator
              page={this.state.results.page}
              size={this.state.results.size}
              total={this.state.results.total}
              onPageChange={this.onPageChange}
            />
          </div>
        </div>
      </>
    );
  }

  /**
   * Change the Page.
   */
  onPageChange = page => {
    this.setState({page: page}, this.loadData);
  };

  /**
   * Reload the Jobs.
   */
  loadData = () => {
    App.Current.API.Administration.GetJobSeekers(this.state.page)
      .then(seekers => this.setState({results: seekers, loading: false}))
      .catch(e =>
        this.setState({
          errored: true,
          error: e,
          results: new PageInfo(),
          loading: false
        })
      );
  };

  componentDidMount() {
    this.loadData();
  }
}
