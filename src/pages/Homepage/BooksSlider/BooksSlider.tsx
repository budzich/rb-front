import React from 'react';
import TinySlider from 'tiny-slider-react';
import { Box, Typography } from '@material-ui/core';
import Book from 'components/common/Book';
import { useStyles } from './styles';

const settings = {
  lazyload: true,
  nav: false,
  mouseDrag: true,
  controlsText: ['', ''],
  items: 5,
  gutter: 25,
};

interface IProps {
  title: string;
  data: any;
}

const BooksSlider = ({ title, data }: IProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>{title}</Typography>
      <TinySlider settings={settings}>
        {data.map((el: number) => <Book key={el} />)}
      </TinySlider>
    </Box>
  );
};

export default BooksSlider;
