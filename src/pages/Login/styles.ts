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
  register: {
    paddingBottom: 12,
  },
  link: {
    color: theme.palette.colors.blue,
    textDecoration: 'none',
    paddingLeft: 4,
  },
  button: {
    width: '100%',
    marginTop: 10,
    background: theme.palette.colors.blue,

    '&:hover': {
      background: theme.palette.colors.darkBlue,
    }
  },
  errorMessage: {
    fontSize: '12px',
    color: theme.palette.text.error,
    width: '100%',
    paddingTop: 12,
  },
}));
