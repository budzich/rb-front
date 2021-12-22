import React from 'react';
import { Box, Typography } from '@material-ui/core';
import Search from 'pages/Homepage/Search';
import BooksSlider from 'pages/Homepage/BooksSlider';
import { useStyles } from './styles';
import { usePopularBooks } from 'ducks/books/hooks/usePopularBooks';
import { useGetBooks } from 'ducks/books/hooks/useGetBooks';
import { IBook, LATEST_BOOKS_TYPE } from 'ducks/books/types/books';
import Book from 'components/common/Book';

const Homepage = () => {
  const classes = useStyles();
  const { data: todayBooks } = usePopularBooks(1);
  const { data: twoWeeksBooks } = usePopularBooks(30);
  const { data: latestBooks } = useGetBooks({ sort: LATEST_BOOKS_TYPE });

  // todo Implement loaders & errors
  return (
    <Box className={classes.root}>
      <Search />
      <BooksSlider title="Популярное сегодня" data={todayBooks?.data || []} />
      <Box className={classes.divider} />
      <Box className={classes.newWrapper}>
        <Typography className={classes.title}>Новинки</Typography>
        <Box className={classes.new}>
          {(latestBooks?.data || []).slice(0, 5).map((book: IBook) =>
            <Book key={book.id} book={book} className={classes.book} />)}
        </Box>
      </Box>
      <Box className={classes.divider} />
      <BooksSlider title="Бестселлеры" data={twoWeeksBooks?.data || []} />
    </Box>
  );
};

export default Homepage;
