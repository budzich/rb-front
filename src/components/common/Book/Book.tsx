import React from 'react';
import { useStyles } from './styles';
import { Box, Typography } from '@material-ui/core';
import poster from 'assets/images/Poster.jpg';

interface IProps {
  className?: string;
}

const Book = ({ className }: IProps) => {
  const classes = useStyles();
  const classname = className ? `${classes.root} ${className}` : classes.root;

  return (
    <Box className={classname}>
      <img src={poster} alt="error" className={classes.poster} />
      <Typography className={classes.title}>Алхимик 9. Отец</Typography>
      <Typography className={classes.genre}>Фэнтези</Typography>
    </Box>
  );
};

export default Book;
