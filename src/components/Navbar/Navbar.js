import React from 'react'

import PropTypes from 'prop-types';

//*MUI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    signUpButton: {
        marginRight: 10
    }
});

const Navbar = ({ signedIn, onSignUpClick, onSignInClick }) => {
    const classes = useStyles();
    return (
        <AppBar color="primary" position="static">
            <Toolbar variant="regular">
                <Box flexGrow={1}>
                    <Typography color="inherit" variant="h6">{process.env.REACT_APP_NAME}</Typography>
                </Box>

                {!signedIn &&
                    <>
                        <Box mr={1}>
                            <Button className={classes.signUpButton} color="secondary" variant="contained" onClick={onSignUpClick}>Sign Up</Button>
                            <Button color="secondary" variant="contained" onClick={onSignInClick}>Sign In</Button>
                        </Box>
                    </>
                }
            </Toolbar>
        </AppBar>
    )
}

Navbar.defaultProps = {
    signedIn: false
};

Navbar.propTypes = {
    signedIn: PropTypes.bool.isRequired
};

export default Navbar;
