import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: 180,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  },
  poster: {
    width: '100%',
    border: `1px solid ${theme.palette.colors.shadow}`,
    borderRadius: 5,
    cursor: 'pointer',
  },
  title: {
    fontSize: 14,
    paddingBottom: 4,
    paddingTop: 6,
    cursor: 'pointer',
    color: theme.palette.text.secondary,
  },
  genre: {
    color: theme.palette.text.darkPlaceholder,
    fontSize: 12,
  },
}));
