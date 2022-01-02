import React from 'react';
import TinySlider from 'tiny-slider-react';
import { Box, Typography } from '@material-ui/core';
import Book from 'components/common/Book';
import { IPopularBook } from 'ducks/books/types/books';
import { useStyles } from './styles';

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
      {data?.length ? (
        <TinySlider settings={settings}>
          {data.map(({ book }) => <Book key={book.id} book={book} />)}
        </TinySlider>
      ) : (
        <Typography className={classes.empty}>Ничего не найдено</Typography>
      )}
    </Box>
  );
};

export default BooksSlider;
