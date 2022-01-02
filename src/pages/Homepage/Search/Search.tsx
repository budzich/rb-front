import React, { ChangeEvent, useCallback, useState } from 'react';
import { TextField, Typography } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { IBook } from 'ducks/books/types/books';
import { useNavigate } from 'react-router-dom';
import { BOOK_ROUTE } from 'constants/routes';
import { useSearchBooks } from 'ducks/books/hooks/useSearchBooks';
import { useStyles } from './styles';
import { debounce } from 'lodash';

const Search = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [options, setOptions] = useState<IBook[]>([]);
  const { mutateAsync } = useSearchBooks();

  // eslint-disable-next-line
  const searchBooks = useCallback(
    debounce((search: string) => {
      mutateAsync({ search })
        .then(res => {
          const books = res?.data || [];
          setOptions(books);
        });
    }, 500),
    [],
  );

  const handleChange = (e: ChangeEvent<{}>) => {
    const newValue = (e?.target as HTMLTextAreaElement)?.value;

    if (newValue) {
      setValue(newValue);
      searchBooks(newValue);
    }
  };

  const handleClick = (e: ChangeEvent<{}>, book: IBook | string) => {
    // @ts-ignore
    navigate(`${BOOK_ROUTE}/${book?.id || 0}`);
  };

  return (
    <Autocomplete
      freeSolo
      disableClearable
      className={classes.root}
      classes={{
        paper: classes.popup,
        listbox: classes.list,
      }}
      inputValue={value}
      onChange={handleClick}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Найти книгу по названию..."
          variant="outlined"
          onChange={handleChange}
          inputProps={{
            ...params.inputProps,
            className: classes.textfield
          }}
        />
      )}
      getOptionLabel={(option: IBook) => option.title}
      renderOption={(option: IBook) => (
        <Typography className={classes.autocompleteField}>
          {option.title}
        </Typography>
      )}
      options={options}
    />
  );
};

export default Search;
