import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  formError: {
    paddingTop: 4,
    fontSize: '12px',
    color: theme.palette.text.error,
  },
  inputWrapper: {
    width: '100%',
    marginBottom: 10,
    minHeight: 83,
    position: 'relative',
    '&.error input, &.error fieldset, &.error .MuiOutlinedInput-root.Mui-focused fieldset, &.error .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline':
      {
        borderColor: theme.palette.text.error,
      },
  },
  input: {
    color: theme.palette.text.placeholder,
    padding: '10px',
    fontSize: 14,
  },
}));
