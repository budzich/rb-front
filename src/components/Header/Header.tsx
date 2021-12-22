import React, { useContext } from 'react';
import { useStyles } from './styles';
import { Box, Button } from '@material-ui/core';
import Logo from 'assets/images/logo.png';
import { useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE } from 'constants/routes';
import { AuthContext } from 'utils/auth/auth.context';
import { TokenStorage } from 'utils/tokenStorage';
import { AuthActionTypes } from 'utils/auth/auth.types';

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const handleLogIn = () => {
    navigate(LOGIN_ROUTE);
  };

  const handleLogOut = () => {
    TokenStorage.clear();
    authContext.dispatch({
      type: AuthActionTypes.login,
      payload: {
        isLoggedIn: false,
      },
    });
    navigate('/');
  };

  const handleHomepage = () => {
    navigate('/');
  };


  return (
    <Box className={classes.wrapper}>
      <Box className={classes.root}>
        <Box className={classes.leftMenu}>
          <img alt="err" src={Logo} className={classes.logo} onClick={handleHomepage} />
          <Button className={classes.menuButton}>ВЫБРАТЬ КНИГУ</Button>
        </Box>
        <Box className={classes.rightMenu}>
          {authContext.state.isLoggedIn
            ? <Button className={classes.menuButton} onClick={handleLogOut}>ВЫЙТИ</Button>
            : <Button className={classes.menuButton} onClick={handleLogIn}>ВОЙТИ</Button>
          }
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
