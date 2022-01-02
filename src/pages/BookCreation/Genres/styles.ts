import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  genres: {
    display: 'flex',
    flexWrap: 'wrap',
    marginRight: -10,
    marginBottom: -10,
  },
  sectionTitle: {
    paddingBottom: '6px',
    color: theme.palette.text.placeholder,
    fontSize: '14px',
  },
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
}));
