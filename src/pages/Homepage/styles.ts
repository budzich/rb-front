import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '50px 0 100px',
  },
  divider: {
    width: 600,
    margin: '50px auto',
    background: theme.palette.colors.border,
    height: 1,
  },
  newWrapper: {
    width: '100%',
  },
  new: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  book: {
    width: 200,
  },
  title: {
    fontSize: 32,
    paddingBottom: 20,
    color: theme.palette.text.main
  },
}));
