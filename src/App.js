import React, { useState } from 'react';

import { ThemeProvider } from '@material-ui/core/styles';

//*Contexts
import AuthProvider from './contexts/AuthContext';

//*Components
import Navbar from './components/Navbar';
import Loading from './components/Loading';

//*Pages


//*MUI
import theme from './theme';

function App() {
  const [signedIn] = useState(false);
  const [ready] = useState(true);
  const [dialog, setDialog] = useState({
    isOpenSignUp: false,
    isOpenSignIn: false
  });

  const openDialog =  e => {
    setDialog({...dialog,[e.target.name]: true});
  }

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        {!ready &&
          <Loading />
        }
        {ready &&
          <>
            <Navbar
              signedIn={signedIn}
              
              onSignUpClick={openDialog} //!could just be openDialog
            />
          </>
        }
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App;
