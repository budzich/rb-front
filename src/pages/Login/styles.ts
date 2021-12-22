import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 50,
  },
  form: {
    background: theme.palette.background.secondary,
    borderRadius: 5,
    border: `1px solid ${theme.palette.border.primary}`,
    padding: '30px 20px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    maxWidth: 300,
  },
  title: {
    fontSize: 24,
    color: theme.palette.text.main,
    paddingBottom: 30,
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
  input: {
    color: theme.palette.text.placeholder,
    padding: '10px',
    fontSize: 14,
  },
  button: {
    width: '100%',
    marginTop: 10,
    background: theme.palette.colors.blue,

    '&:hover': {
      background: theme.palette.colors.darkBlue,
    }
  },
}));
