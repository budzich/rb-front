import React from 'react';
import { useStyles } from './styles';
import { Box } from '@material-ui/core';

const NotFound = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      Not Found
    </Box>
  );
};

export default NotFound;
