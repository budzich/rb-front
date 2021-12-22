import React from 'react';
import TinySlider from 'tiny-slider-react';
import { Box, Typography } from '@material-ui/core';
import Book from 'components/common/Book';
import { useStyles } from './styles';
import { IPopularBook } from 'ducks/books/types/books';

const settings = {
  lazyload: true,
  nav: false,
  mouseDrag: true,
  controlsText: ['', ''],
  items: 6,
  gutter: 25,
};

interface IProps {
  title: string;
  data: IPopularBook[];
}

const BooksSlider = ({ title, data }: IProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>{title}</Typography>
      <TinySlider settings={settings}>
        {data.map(({ book }) => <Book key={book.id} book={book} />)}
      </TinySlider>
    </Box>
  );
};

export default BooksSlider;
