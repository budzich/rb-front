import React from 'react';
import { useStyles } from './styles';
import { Box, Button } from '@material-ui/core';
import Logo from 'assets/images/logo.png';
import { useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE } from 'constants/routes';

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate(LOGIN_ROUTE);
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
          <Button className={classes.menuButton} onClick={handleLogIn}>ВОЙТИ</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
