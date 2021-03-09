import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import {Table} from "semantic-ui-react";
import {DownloadIcon} from "../../components/DownloadIcon";
import UploadCVModal from "../../components/UploadCVModal";
import ErrorView from "../../../../../components/ErrorView";
import {UserErrorMessage} from "../../../../../Utilities/errorHandling";
import App from "../../../../../App";
import {formatDate} from "../../../../../data/dateformatting";
import LoadingSpinner from "../../../../../components/LoadingSpinner/LoadingSpinner";
import Paginator from "../../../../../components/Paginator";
import PageInfo from "../../../../../Services/api/models/PageInfo";

export default class UserCVs extends Component {
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
        <div className="admin-container">
          <div className="admin-table__wrapper">
            <Table unstackable celled striped selectable className="admin-table">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Action</Table.HeaderCell>
                  <Table.HeaderCell>File Name</Table.HeaderCell>
                  <Table.HeaderCell>Submitted By</Table.HeaderCell>
                  <Table.HeaderCell>Date Submitted</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {this.state.results.data.map(cv => (
                  <Table.Row key={cv.id}>
                    <Table.Cell>
                      <a
                        target="_blank"
                        href={App.Current.API.Administration.GetCVSubmissionUrl(
                          cv.id
                        )}>
                        <DownloadIcon />
                      </a>
                    </Table.Cell>
                    <Table.Cell>{cv.filename}</Table.Cell>
                    <Table.Cell>
                      {cv.uploader ? cv.uploader.name : "Not Signed In"}
                    </Table.Cell>
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
          {/*           <div className="admin-actions--bottom">
            <Button
              variant="outlined"
              color="primary"
              size="large"
              className="custom-button">
              Upload a CV
            </Button>
          </div> */}
        </div>
        <UploadCVModal />
      </>
    );
  }

  componentDidMount() {
    this.loadData();
  }

  getUserID() {
    return this.props.id || null;
  }

  /**
   * Change the Page.
   */
  onPageChange = page => {
    this.setState({page: page}, this.loadData);
  };

  loadData = async () => {
    const userID = this.getUserID();

    App.Current.API.Administration.GetUserCVs(this.state.page, userID)
      .then(cvs => this.setState({cvs: cvs, loading: false}))
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
