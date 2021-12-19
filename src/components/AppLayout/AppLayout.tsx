import React from 'react';
import { Box } from '@material-ui/core';
import Header from 'components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useStyles } from './styles';
import Homepage from 'pages/Homepage';
import Login from 'pages/Login';
import NotFound from 'pages/NotFound';
import { LOGIN_ROUTE } from 'constants/routes';

const AppLayout = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Router>
        <Header />
        <Box className={classes.body}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path={LOGIN_ROUTE} element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </Router>
    </Box>
  );
};

export default AppLayout;
