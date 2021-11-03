import React from 'react';
import { useStyles } from './styles';
import { TextField } from '@material-ui/core';

const Search = () => {
  const classes = useStyles();

  return (
    <TextField
      className={classes.root}
      placeholder='Найти книгу по названию...'
      variant="outlined"
      inputProps={{
        className: classes.textfield,
      }}
    />
  );
};

export default Search;
