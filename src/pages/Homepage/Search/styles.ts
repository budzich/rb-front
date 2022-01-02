import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    borderRadius: 5,
    background: theme.palette.background.secondary,

    '& .MuiOutlinedInput-root fieldset': {
      border: 0,
    },
  },
  textfield: {
    color: theme.palette.text.placeholder,
    fontSize: 20,
    fontWeight: 400,
    padding: '10px 16px',
  },
  popup: {
    background: theme.palette.background.primary,

    '& .MuiAutocomplete-option': {
      padding: 6,
    },
  },
  list: {
    background: theme.palette.background.secondary,
  },
  autocompleteField: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    width: '100%',
    padding: '0px 16px',
  },
}));
