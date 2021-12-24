import React from 'react';
import { useStyles } from './styles';
import { Box, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { useGetBook } from 'ducks/books/hooks/useGetBook';
import { IBook } from 'ducks/books/types/books';
import { format } from 'date-fns';

type ParamsType = {
  id: string;
}

const BookPage = () => {
  const classes = useStyles();
  const { id } = useParams<ParamsType>();
  const searchId = id ? +id : 0;
  const { data } = useGetBook(searchId);
  const book: IBook = data?.data;
  // console.log(data?.data);

  // todo Implement loaders & errors
  if (!book) {
    return <Typography>loading/error</Typography>;
  }

  const date = format(new Date(book.createdAt), 'Pp');
  const genres = book.genres
    .slice(0, 5)
    .map(el => el.title)
    .join(', ');

  return (
    <Box className={classes.root}>
      <img
        src={`${process.env.REACT_APP_BACKEND_HOST}${book.image}`}
        alt="error"
        className={classes.poster}
      />
      <Box className={classes.details}>
        <Typography className={classes.title}>{book.title}</Typography>
        <Typography className={classes.author}>
          {book.user?.email}
          <Typography component="span" className={classes.date}>({date})</Typography>
        </Typography>
        <Typography className={classes.genres}>{genres}</Typography>
        <Typography className={classes.description}>{book.description}</Typography>
      </Box>
    </Box>
  );
};

export default BookPage;
