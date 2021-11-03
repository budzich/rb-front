import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 1100,
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
    paddingLeft: 16,
  },
}));
