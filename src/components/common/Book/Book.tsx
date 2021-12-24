import React from 'react';
import { useStyles } from './styles';
import { Box, Typography } from '@material-ui/core';
import { IBook } from 'ducks/books/types/books';
import { useNavigate } from 'react-router-dom';
import { BOOK_ROUTE } from 'constants/routes';

interface IProps {
  className?: string;
  book: IBook;
}

const Book = ({ className, book }: IProps) => {
  const classes = useStyles();
  const classname = className ? `${classes.root} ${className}` : classes.root;
  const navigate = useNavigate();

  const handleOpen = () => {
    navigate(`${BOOK_ROUTE}/${book.id}`);
  };

  return (
    <Box className={classname}>
      <img
        src={`${process.env.REACT_APP_BACKEND_HOST}${book.image}`}
        alt="error"
        className={classes.poster}
        onClick={handleOpen}
      />
      <Typography className={classes.title} onClick={handleOpen}>{book.title}</Typography>
      <Typography className={classes.genre}>{book.genres[0].title}</Typography>
    </Box>
  );
};

export default Book;
