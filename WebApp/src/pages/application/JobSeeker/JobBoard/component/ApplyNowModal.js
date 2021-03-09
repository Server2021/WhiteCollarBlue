import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import {MdClose} from "react-icons/md";

import style from "./ApplyNowModal.module.scss";
import CVSubmission from "../../../../../components/CVSubmission";

export default class ApplyNowModal extends Component {
  render() {
    const job = this.props.job;
    if (!job) {
      return null;
    }

    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.props.handleClose}
          aria-labelledby="form-dialog-title">
          <MdClose onClick={this.props.handleClose} className="modal-close" />
          <DialogTitle>
            <div className={style.title}>
              <h6>Apply for</h6>
              <h3>{job.title}</h3>
            </div>
          </DialogTitle>

          <DialogContent>
            <CVSubmission
              ref="form"
              hideButton={true}
              onSubmitData={this.onSubmitData}
              onSubmitted={this.props.handleClose}
            />
          </DialogContent>

          <DialogActions className={style.submit}>
            <Button
              onClick={() => this.refs.form.submit()}
              variant="contained"
              color="primary"
              size="large"
              className="custom-button">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  onSubmitData = data => {
    data["jobEntryId"] = this.props.job.id;
  };
}
