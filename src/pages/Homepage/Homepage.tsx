import React from 'react';
import { Box, Typography } from '@material-ui/core';
import Search from 'pages/Homepage/Search';
import BooksSlider from 'pages/Homepage/BooksSlider';
import Book from 'components/common/Book';
import { useStyles } from './styles';

const Homepage = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Search />
      <BooksSlider title="Популярное сегодня" data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
      <Box className={classes.divider} />
      <Box className={classes.newWrapper}>
        <Typography className={classes.title}>Новинки</Typography>
        <Box className={classes.new}>
          {[1, 2, 3, 4, 5].map(el => <Book key={el} className={classes.book} />)}
        </Box>
      </Box>
      <Box className={classes.divider} />
      <BooksSlider title="Популярное сегодня" data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
      <Box className={classes.divider} />
      <BooksSlider title="Популярное сегодня" data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
    </Box>
  );
};

export default Homepage;
