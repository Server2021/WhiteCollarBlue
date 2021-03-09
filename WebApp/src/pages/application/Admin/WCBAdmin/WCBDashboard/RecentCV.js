import React, {Component} from "react";
import {InputAdornment, IconButton, TextField} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import SubtitleWithLine from "../../../../../components/SubtitleWithLine/SubtitleWithLine";
import {Table} from "semantic-ui-react";
import {DownloadIcon} from "../../components/DownloadIcon";
import LoadingSpinner from "../../../../../components/LoadingSpinner/LoadingSpinner";
import {formatDate} from "../../../../../data/dateformatting";
import App from "../../../../../App";
import ErrorView from "../../../../../components/ErrorView";
import {UserErrorMessage} from "../../../../../Utilities/errorHandling";
import {Link} from "react-browser-router";
import Paginator from "../../../../../components/Paginator";
import PageInfo from "../../../../../Services/api/models/PageInfo";

export default class RecentCV extends Component {
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
        <SubtitleWithLine title="Recently Submitted CV" />
        <div className="admin-container">
          <div className="admin-table__wrapper">
            {/*             <TextField
              id="search"
              name="search"
              variant="filled"
              hiddenLabel
              placeholder="Search"
              disabled
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton aria-label="search" color="primary">
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            /> */}

            <Table unstackable celled striped selectable className="admin-table">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Action</Table.HeaderCell>
                  <Table.HeaderCell>Job ID</Table.HeaderCell>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>File Name</Table.HeaderCell>
                  <Table.HeaderCell>Phone No.</Table.HeaderCell>
                  <Table.HeaderCell>Date Submitted</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {!this.state.loading &&
                  this.state.results.data.map(cv => (
                    <Table.Row
                      key={cv.id}
                      className={
                        cv.job &&
                        (!cv.job.isOpen || cv.status !== "In Progress") &&
                        "status--closed"
                      }>
                      <Table.Cell>
                        <a
                          target="_blank"
                          href={App.Current.API.Administration.GetCVSubmissionUrl(
                            cv.cv.id
                          )}>
                          <DownloadIcon />
                        </a>
                      </Table.Cell>
                      <Table.Cell>
                        {cv.job && (
                          <Link to={`/jobseeker/board/${cv.job.id}`}>
                            {cv.job.bullhornID}
                          </Link>
                        )}
                      </Table.Cell>
                      <Table.Cell>{cv.name}</Table.Cell>
                      <Table.Cell>{cv.cv.filename}</Table.Cell>
                      <Table.Cell>{cv.phone}</Table.Cell>
                      <Table.Cell>{formatDate(cv.created)}</Table.Cell>
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

  componentDidMount() {
    this.loadData();
  }

  /**
   * Change the Page.
   */
  onPageChange = page => {
    this.setState({page: page}, this.loadData);
  };

  loadData = async () => {
    App.Current.API.Administration.GetRecentCVs(this.state.page)
      .then(cvs => this.setState({results: cvs, loading: false, errored: false}))
      .catch(e =>
        this.setState({
          errored: true,
          error: e,
          results: new PageInfo(),
          loading: false
        })
      );
  };
}
