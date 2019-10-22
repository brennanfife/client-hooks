import React from 'react'

import PropTypes from 'prop-types';

//*MUI
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const SignUpDialog = ({fullScreen, open, onClose}) => {
    return (
        <Dialog fullScreen={fullScreen} open={open} onClose={onClose}>
            <DialogTitle>
                Sign up for an account
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Create an account to access features that are unavailable to users who haven't signed up.
                </DialogContentText>
            </DialogContent>
        </Dialog>
    )
}

SignUpDialog.propTypes = {
    fullScreen: PropTypes.bool,
    open: PropTypes.bool.isRequired,
    signUp: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default SignUpDialog
