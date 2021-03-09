import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Logo from "../../assets/logo-icon.png";
import style from "./SuccessModal.module.scss";
import App from "../../App";

export default class SuccessModal extends React.Component {
  state = {
    isOpen: this.props.isOpen || false,
    title: "Success!",
    message: null,
    redirect: null
  };

  render() {
    if (!this.state.isOpen) {
      return null;
    }

    return (
      <div>
        <Dialog
          open={this.state.isOpen}
          onClose={this.close}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          className={style.dialogStyle}>
          <div className={style.dialogTitle}>
            <img
              src={Logo}
              alt={this.state.title}
              className={style.dialogTitleImage}
            />
            <h3>{this.state.title}</h3>
          </div>
          <DialogContent>
            <DialogContentText
              id="alert-dialog-description"
              className={style.dialogContentText}>
              {this.state.message}
            </DialogContentText>
          </DialogContent>
          <DialogActions className={style.dialogActions}>
            <Button
              onClick={() => {
                if (this.props.acknowledged) {
                  this.props.acknowledged();
                }
                this.close();

                if (this.state.redirect) {
                  App.Current.Navigate(this.state.redirect);
                }
              }}
              color="primary"
              variant="contained"
              size="large"
              className="custom-button">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  open = (message = null, title = "Success!", redirect = null) => {
    this.setState({
      isOpen: true,
      title: title,
      message: message,
      redirect: redirect
    });
  };

  close = () => {
    this.setState({isOpen: false, title: null, message: null, redirect: null});
  };
}
