import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.main,
    fontSize: 32,
    paddingTop: 100,
    width: '100%',
    textAlign: 'center'
  },
}));
