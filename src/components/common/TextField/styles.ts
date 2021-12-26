import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  inputWrapper: {
    width: '100%',

    '& .MuiOutlinedInput-adornedEnd': {
      paddingRight: 10,
    },

    '& .MuiOutlinedInput-multiline': {
      padding: 0,
    },

    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.colors.blue,
      },

      '& fieldset': {
        borderColor: theme.palette.border.primary,
      },
    },

    '& .MuiOutlinedInput-root:hover': {
      '& fieldset': {
        borderColor: theme.palette.border.primary,
      },
    },
  },
  label: {
    paddingBottom: '6px',
    color: theme.palette.text.placeholder,
    fontSize: '14px',
    textAlign: 'left',
  },
  input: {
    padding: '12px 10px',
    fontSize: '14px',
    color: theme.palette.text.placeholder,
  },
}));
