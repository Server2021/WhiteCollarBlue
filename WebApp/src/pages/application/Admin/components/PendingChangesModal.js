import React, { Component } from "react";
import style from "./PendingChangesModal.module.scss";
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { MdClose } from "react-icons/md";
import AccountTable from "./AccountTable";

export default class PendingChangesModal extends Component {
    render() {
        return (
            <Dialog
                open={this.props.open}
                onClose={this.props.handleClose}
                className={style.dialogStyle}
                maxWidth="lg"
            >
                <MdClose onClick={this.props.handleClose} className="modal-close" />
                <DialogTitle id="alert-dialog-title" className={style.dialogTitle}>
                    <h3>Change Overview</h3>
                </DialogTitle>
                <DialogContent className={style.dialogContent}>
                    <div>
                        <h5>Before</h5>
                        <AccountTable data={this.props.tableDataBefore} />
                    </div>
                    <div>
                        <h5>After</h5>
                        <AccountTable data={this.props.tableDataAfter} />
                    </div>
                </DialogContent>
                <DialogActions className={style.dialogActions}>
                    <Button color="primary" variant="contained" size="large" className="custom-button" onClick={this.props.handleClose}>Approve</Button>
                    <Button color="primary" size="large" className="custom-button" onClick={this.props.handleClose}>Disapprove</Button>
                </DialogActions>
            </Dialog>
        );
    }
}