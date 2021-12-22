import React from 'react';
import { useStyles } from './styles';
import { Box, Typography } from '@material-ui/core';
import { IBook } from 'ducks/books/types/books';

interface IProps {
  className?: string;
  book: IBook;
}

const Book = ({ className, book }: IProps) => {
  const classes = useStyles();
  const classname = className ? `${classes.root} ${className}` : classes.root;

  return (
    <Box className={classname}>
      <img src={`${process.env.REACT_APP_BACKEND_HOST}${book.image}`} alt="error" className={classes.poster} />
      <Typography className={classes.title}>{book.title}</Typography>
      <Typography className={classes.genre}>{book.genres[0].title}</Typography>
    </Box>
  );
};

export default Book;
