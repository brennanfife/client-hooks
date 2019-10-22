import React from 'react'

import PropTypes from 'prop-types';

//*MUI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const Navbar = ({ signedIn, onSignUpClick }) => {
    return (
        <AppBar color="primary" position="static">
            <Toolbar variant="regular">
                <Box flexGrow={1}>
                    <Typography color="inherit" variant="h6">{process.env.REACT_APP_NAME}</Typography>
                </Box>

                {!signedIn &&
                    <>
                        <Box mr={1}>
                            <Button name="isOpenSignUp" color="secondary" variant="contained" onClick={onSignUpClick}>Sign Up</Button>
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

export default Navbar
