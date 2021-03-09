import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import {MdClose} from "react-icons/md";
import DialogContent from "@material-ui/core/DialogContent";
import PropTypes from "prop-types";

export default class GenericModal extends React.Component {
  state = {
    isOpen: this.props.isOpen || false,
    title: null,
    message: null
  };

  render() {
    const title = this.state.title || this.props.title;
    const content = this.state.message || this.props.children;

    return (
      <Dialog open={this.state.isOpen} size={this.props.size} onClose={this.close}>
        <MdClose onClick={this.close} className="modal-close" />
        <DialogTitle>{title}</DialogTitle>
        {content && <DialogContent>{content}</DialogContent>}

        <DialogActions>
          {this.props.noLabelName && (
            <Button
              type="button"
              variant="contained"
              color="secondary"
              size="large"
              className="custom-button"
              onClick={this.close}>
              {this.props.noLabelName}
            </Button>
          )}
          {this.props.yesLabelName && (
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              className="custom-button"
              disabled={this.props.canClickYes === false}
              onClick={this.clickedYes}>
              {this.props.yesLabelName}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    );
  }

  clickedYes = e => {
    if (this.props.onClickYes) {
      this.props.onClickYes(e);
    }

    if (!e.defaultPrevented) {
      this.close();
    }
  };

  open = (title, message) => {
    this.setState({isOpen: true, title: title, message: message});
  };

  close = () => {
    this.setState({isOpen: false, title: null, message: null});
  };
}

GenericModal.propTypes = {
  size: PropTypes.string,
  title: PropTypes.string,
  onClickYes: PropTypes.func,
  yesLabelName: PropTypes.string,
  noLabelName: PropTypes.string
};
