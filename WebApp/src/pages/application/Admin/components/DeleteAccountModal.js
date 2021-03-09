import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import UserDeleteIcon from '../../../../assets/icons/user-delete.svg';
import style from './DeleteAccountModal.module.scss';
import { MdClose } from 'react-icons/md';

export const DeleteAccountModal = props => {
    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className={style.dialogStyle}
            >
                <MdClose onClick={props.handleClose} className="modal-close" />
                <DialogTitle id="alert-dialog-title" className={style.dialogTitle}>
                    <img src={UserDeleteIcon} alt="delete account" className={style.dialogTitleImage} />
                    <h3>Delete Account</h3>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" className={style.dialogContentText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.
                    </DialogContentText>
                </DialogContent>
                <DialogActions className={style.dialogActions}>
                    <Button
                        color="primary"
                        variant="contained"
                        size="large"
                        className="custom-button"
                        onClick={props.openSuccessModal}
                    >
                        Delete Your Account
                    </Button>
                    <Button
                        onClick={props.handleClose}
                        color="primary"
                        size="large"
                        className="custom-button"
                    >
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}