import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import {MdClose} from "react-icons/md";
import FileUploadInput from "../../../../components/Form/FileUploadInput/FileUploadInput";
import FormHandler from "../../../../components/Form/FormHandler";

export default class UploadCVModal extends Component {
  render() {
    return (
      <>
        <Dialog
          open={this.props.open}
          onClose={this.props.handleClose}
          className="admin-table"
          maxWidth="false">
          <MdClose onClick={this.props.handleClose} className="modal-close" />
          <FormHandler ref="form" onSubmit={this.onSubmit}>
            <DialogContent>
              <FileUploadInput
                id="cv-upload"
                name="cv-upload"
                buttonName="Select File"
                message="Select your CV"
              />
            </DialogContent>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              size="large"
              className="custom-button">
              Confirm
            </Button>
          </FormHandler>
        </Dialog>
      </>
    );
  }

  onSubmit = () => {
    if (this.props.handleClose) {
      this.props.handleClose();
    }
  };
}
