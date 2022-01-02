import React from 'react';
import { Box, CircularProgress, Typography } from '@material-ui/core';
import Search from 'pages/Homepage/Search';
import BooksSlider from 'pages/Homepage/BooksSlider';
import { useStyles } from './styles';
import { usePopularBooks } from 'ducks/books/hooks/usePopularBooks';
import { useGetBooks } from 'ducks/books/hooks/useGetBooks';
import { IBook, LATEST_BOOKS_TYPE } from 'ducks/books/types/books';
import Book from 'components/common/Book';

const Homepage = () => {
  const classes = useStyles();
  const { data: todayBooks, isLoading: isLoadingToday } = usePopularBooks(1);
  const { data: twoWeeksBooks, isLoading: isLoadingWeeks } = usePopularBooks(30);
  const { data: latestBooks, isLoading: isLoadingLatest } = useGetBooks({ sort: LATEST_BOOKS_TYPE });
  const isLoading = isLoadingLatest || isLoadingWeeks || isLoadingToday;

  if (isLoading) {
    return (
      <Box className={classes.loader}>
        <CircularProgress size={50} />
      </Box>
    );
  }

  return (
    <Box className={classes.root}>
      <Search />
      <BooksSlider title="Популярное сегодня" data={todayBooks?.data || []} />
      <Box className={classes.divider} />
      <Box className={classes.newWrapper}>
        <Typography className={classes.title}>Новинки</Typography>
        {latestBooks?.data?.length ? (
          <Box className={classes.new}>
            {(latestBooks?.data || []).slice(0, 5).map((book: IBook) =>
              <Book key={book.id} book={book} className={classes.book} />)}
          </Box>
        ) : (
          <Typography className={classes.empty}>Ничего не найдено</Typography>
        )}
      </Box>
      <Box className={classes.divider} />
      <BooksSlider title="Бестселлеры" data={twoWeeksBooks?.data || []} />
    </Box>
  );
};

export default Homepage;
