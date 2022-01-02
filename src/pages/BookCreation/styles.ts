import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: '50px 0',
  },
  title: {
    fontSize: 32,
    color: theme.palette.text.main,
    paddingBottom: 30,
  },
  wrapper: {
    display: 'flex',
    width: '100%',
    paddingBottom: 30,
  },
  mainInfo: {
    paddingLeft: 30,
    width: '100%',
  },
  textfield: {
    paddingBottom: 20,
  },
  button: {
    padding: '10px 30px',
    marginTop: 10,
    background: theme.palette.colors.blue,

    '&:hover': {
      background: theme.palette.colors.darkBlue,
    }
  },
}));
