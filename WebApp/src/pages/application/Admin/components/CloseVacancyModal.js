import React, { Component } from "react";
import style from "./CloseVacancyModal.module.scss";
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { MdClose } from "react-icons/md";

export default class CloseVacancyModal extends Component {
    render() {
        return (
            <Dialog
                open={this.props.open}
                onClose={this.props.handleClose}
                className={style.dialogStyle}
            >
                <MdClose onClick={this.props.handleClose} className="modal-close" />
                <DialogTitle id="alert-dialog-title" className={style.dialogTitle}>
                    <h3>{!this.props.positionOpened ? "Close" : "Open"} this vacancy</h3>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" className={style.dialogContentText}>
                        Are you sure you want to {!this.props.positionOpened ? "close" : "open"} this vacancy?
                    </DialogContentText>
                </DialogContent>
                <DialogActions className={style.dialogActions}>
                    <Button color="primary" variant="contained" size="large" className="custom-button" onClick={this.props.handlePosition}>Yes</Button>
                    <Button color="primary" size="large" className="custom-button" onClick={this.props.handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        );
    }
}