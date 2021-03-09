import React, { Component } from "react";
import style from "./ApproveVacancyModal.module.scss";
import Bullhorn from "../../../../assets/admin/bullhorn0.png"
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from "@material-ui/core";
import { MdClose } from "react-icons/md";

export default class ApproveVacancyModal extends Component {
    render() {
        return (
            <Dialog
                open={this.props.open}
                onClose={this.props.handleClose}
                className={style.dialogStyle}
            >
                <MdClose onClick={this.props.handleClose} className="modal-close" />
                
                {!this.props.approved ?

                    <>
                        <DialogTitle id="alert-dialog-title" className={style.dialogTitle}>
                            <img src={Bullhorn} alt="Bullhorn-logo" />
                            <h3>Enter Job ID</h3>
                        </DialogTitle>
                        <DialogContent>

                            <DialogContentText id="alert-dialog-description" className={style.dialogContentText}>
                                To Approve this vacancy, enter a Job ID for Bullhorn. <br /> The ID should be at least 4 characters long.
                            </DialogContentText>
                            <form>
                                <TextField
                                    id="jobID"
                                    label="Job ID"
                                    type="number"
                                    fullWidth
                                    variant="filled"
                                    required
                                />
                            </form>

                        </DialogContent>
                    </>

                    :

                    <>
                        <DialogTitle id="alert-dialog-title" className={style.dialogTitle}>
                            <h3>Undo Approval</h3>
                        </DialogTitle>
                        <DialogContentText id="alert-dialog-description" className={style.dialogContentText}>
                            Do you want to undo the approval?
                        </DialogContentText>
                    </>

                }

                <DialogActions className={style.dialogActions}>
                    <Button color="primary" variant="contained" size="large" className="custom-button" onClick={this.props.handleApprove}>
                        {!this.props.approved ? "Confirm" : "Yes"}
                    </Button>
                    <Button color="primary" size="large" className="custom-button" onClick={this.props.handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        );
    }
}