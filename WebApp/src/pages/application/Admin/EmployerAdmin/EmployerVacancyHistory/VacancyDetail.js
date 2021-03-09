import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import SubtitleWithLine from "../../../../../components/SubtitleWithLine/SubtitleWithLine";
import CloseVacancyModal from "../../components/CloseVacancyModal";

export default class VacancyDetail extends Component {

  state = {
    positionOpened: false,
    confirmModalOpen: false
  }

  handleClose = () => {
    this.setState({ confirmModalOpen: false });
  };


  handleConfirmModalOpen = () => {
    this.setState({ confirmModalOpen: true });
  };

  handlePosition = () => {
    this.setState(prevState => {
      return { positionOpened: !prevState.positionOpened, confirmModalOpen: false }
    })
  }

  render() {
    return (
      <>
        <div>
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
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  className="custom-button"
                  onClick={this.handleConfirmModalOpen}
                >
                  {!this.state.positionOpened ? "Close this vacancy" : "Closed"}
                </Button>
                <Link to="/admin/employer/vacancyhistory">
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    className="custom-button">
                    Go back to list
                  </Button>
                </Link>

              </aside>
            </div>
          </div>

          <CloseVacancyModal
            open={this.state.confirmModalOpen}
            handleClose={this.handleClose}
            positionOpened={this.state.positionOpened}
            handlePosition={this.handlePosition}
          />

        </div>
      </>
    );
  }
}