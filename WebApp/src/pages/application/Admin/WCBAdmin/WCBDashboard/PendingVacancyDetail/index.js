import React, {Component} from "react";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import style from "./style.module.scss";
import FormsyTextField from "../../../../../../components/Form/FormsyTextField";
import {InputAdornment, IconButton, TextField} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import SubtitleWithLine from "../../../../../../components/SubtitleWithLine/SubtitleWithLine";
import VacancyApplications from "./VacancyApplications.js";
import CloseVacancyModal from "../../../components/CloseVacancyModal";
import ApproveVacancyModal from "../../../components/ApproveVacancyModal";

export default class PendingVacancyDetail extends Component {
  state = {
    approved: false,
    approveModalOpen: false,
    positionOpened: false,
    confirmModalOpen: false
  };

  handleClose = () => {
    this.setState({confirmModalOpen: false, approveModalOpen: false});
  };

  handleApproved = () => {
    this.setState(prevState => {
      return {approved: !prevState.approved, approveModalOpen: false};
    });
  };

  handleApproveModalOpen = () => {
    this.setState({approveModalOpen: true});
  };

  handleConfirmModalOpen = () => {
    this.setState({confirmModalOpen: true});
  };

  handlePosition = () => {
    this.setState(prevState => {
      return {positionOpened: !prevState.positionOpened, confirmModalOpen: false};
    });
  };

  render() {
    return (
      <>
        <div className="admin-container__wrapper">
          <SubtitleWithLine title="Vacancy Detail" />
          <div className="admin-container--withAside">
            <div className="body__article--padding box-style">
              <h4>Hammer Hands</h4>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
                  porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et
                  faucibus arcu condimentum sed. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat
                  volutpat. Donec placerat nisl magna, et faucibus arcu condimentum
                  sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat
                  nisl magna, et faucibus arcu condimentum sed. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Aliquam at porttitor sem.
                  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu
                  condimentum sed. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec
                  placerat nisl magna, et faucibus arcu condimentum sed.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
                  porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et
                  faucibus arcu condimentum sed. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat
                  volutpat. Donec placerat nisl magna, et faucibus arcu condimentum
                  sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat
                  nisl magna, et faucibus arcu condimentum sed. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Aliquam at porttitor sem.
                  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu
                  condimentum sed. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec
                  placerat nisl magna, et faucibus arcu condimentum sed.
                </p>
              </div>
            </div>
            <div>
              <aside className="admin-actions--right">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className="custom-button"
                  onClick={this.handleApproveModalOpen}>
                  {!this.state.approved ? "Approve this vacancy" : "Approved"}
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  className="custom-button">
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  className="custom-button"
                  onClick={this.handleConfirmModalOpen}>
                  {!this.state.positionOpened ? "Close this vacancy" : "Closed"}
                </Button>
                <Link to="/admin/dashboard">
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    className="custom-button">
                    Go back to list
                  </Button>
                </Link>

                <JobSubmitterDetail
                  name="Wayne Bryant"
                  email="wayne@gmail.com"
                  phone="+64234234234"
                  role="Director"
                />
              </aside>
            </div>
          </div>
        </div>

        <VacancyApplications />

        <ApproveVacancyModal
          open={this.state.approveModalOpen}
          handleClose={this.handleClose}
          approved={this.state.approved}
          handleApprove={this.handleApproved}
        />

        <CloseVacancyModal
          open={this.state.confirmModalOpen}
          handleClose={this.handleClose}
          positionOpened={this.state.positionOpened}
          handlePosition={this.handlePosition}
        />
      </>
    );
  }
}

const JobSubmitterDetail = props => {
  return (
    <div className={style.jobSumitterDetail}>
      <h6>Submitter Detail</h6>
      <div className={style.jobSumitterDetail_box}>
        <div>
          <b>Name</b>
          <p>{props.name}</p>
        </div>
        <div>
          <b>Email</b>
          <p>{props.email}</p>
        </div>
        <div>
          <b>Phone No.</b>
          <p>{props.phone}</p>
        </div>
        <div>
          <b>Role</b>
          <p>{props.role}</p>
        </div>
      </div>
    </div>
  );
};
