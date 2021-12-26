import React from 'react';
import { Box } from '@material-ui/core';
import Header from 'components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useStyles } from './styles';
import Homepage from 'pages/Homepage';
import Login from 'pages/Login';
import NotFound from 'pages/NotFound';
import { BOOK_CREATION_ROUTE, BOOK_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from 'constants/routes';
import BookPage from 'pages/Book';
import Register from 'pages/Register';
import BookCreation from 'pages/BookCreation';

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
            <Route path={REGISTER_ROUTE} element={<Register />} />
            <Route path={BOOK_CREATION_ROUTE} element={<BookCreation />} />
            <Route path={`${BOOK_ROUTE}/:id`} element={<BookPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </Router>
    </Box>
  );
};

export default AppLayout;
