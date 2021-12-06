import React from 'react';
import { useStyles } from './styles';
import { Box, Button } from '@material-ui/core';
import Logo from 'assets/images/logo.png';

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.root}>
        <Box className={classes.leftMenu}>
          <img alt="err" src={Logo} className={classes.logo} />
          <Button className={classes.menuButton}>ВЫБРАТЬ КНИГУ</Button>
        </Box>
        <Box className={classes.rightMenu}>
          <Button className={classes.menuButton}>ВОЙТИ</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
