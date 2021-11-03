import React from 'react';
import { Box } from '@material-ui/core';
import Header from 'components/Header';
import { useStyles } from './styles';
import Homepage from 'pages/Homepage';

const AppLayout = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Header />
      <Homepage />
    </Box>
  );
};

export default AppLayout;
