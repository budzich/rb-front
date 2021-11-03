import React from 'react';
import { useStyles } from './styles';
import { Box } from '@material-ui/core';
import Search from 'pages/Homepage/Search';

const Homepage = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Search />
    </Box>
  );
};

export default Homepage;
