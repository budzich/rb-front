import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 50,
    display: 'flex',
  },
  loader: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  poster: {
    aspectRatio: '2 / 3',
    objectFit: 'contain',
    width: 200,
    borderRadius: '5px',
    background: theme.palette.background.secondary,
  },
  details: {
    paddingLeft: 20,
  },
  info: {
    display: 'flex',
  },
  title: {
    fontSize: 44,
    color: theme.palette.text.main,
  },
  author: {
    fontSize: 22,
    color: theme.palette.text.main,
  },
  description: {
    fontSize: 18,
    color: theme.palette.colors.main,
    paddingTop: 20,
  },
  genres: {
    fontSize: 26,
    color: theme.palette.colors.placeholder,
    paddingTop: 20,
  },
  date: {
    paddingLeft: 12,
    fontSize: 16,
    color: theme.palette.colors.darkPlaceholder,
  },
}));
