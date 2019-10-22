import React, { useState } from 'react';

import { ThemeProvider } from '@material-ui/core/styles';

//*Contexts
// import AuthProvider from './contexts/AuthContext';

//*Components
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import SignUpDialog from './components/Dialog/SignUpDialog';
import SignInDialog from './components/Dialog/SignInDialog';

//*Pages
import Routes from './pages/Routes';

//*MUI
import Hidden from '@material-ui/core/Hidden';
import theme from './theme';

function App() {
  const [signedIn] = useState(true);
  const [ready] = useState(true);
  const [signUpDialog, setSignUpDialog] = useState(false)
  const [signInDialog, setSignInDialog] = useState(false)

  const openSignUpDialog = () => {
    setSignUpDialog(true);
  }

  const closeSignUpDialog = () => {
    setSignUpDialog(false);
  }

  const openSignInDialog = () => {
    setSignInDialog(true);
  }

  const closeSignInDialog = () => {
    setSignInDialog(false);
  }

  return (
      <ThemeProvider theme={theme}>
        {!ready &&
          <Loading />
        }
        {ready &&
          <>
            <Navbar
              signedIn={signedIn}
              onSignUpClick={openSignUpDialog}
              onSignInClick={openSignInDialog}
            />

            <Routes signedIn={signedIn} />



            <Hidden only='xs'>
              <SignUpDialog
                open={signUpDialog}
                onClose={closeSignUpDialog}
              />
            </Hidden>
            <Hidden only={['sm', 'md', 'lg', 'xl']}>
              <SignUpDialog
                fullScreen
                open={signUpDialog}
                onClose={closeSignUpDialog}
              />
            </Hidden>

            <Hidden only="xs">
              <SignInDialog
                open={signInDialog}
                onClose={closeSignInDialog}
              />
            </Hidden>
            <Hidden only={['sm', 'md', 'lg', 'xl']}>
              <SignInDialog
                fullScreen
                open={signInDialog}
                onClose={closeSignInDialog}
              />
            </Hidden>
          </>
        }
      </ThemeProvider>
  )
}

export default App;
