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
  imageWrapper: {},
  sectionTitle: {
    paddingBottom: '6px',
    color: theme.palette.text.placeholder,
    fontSize: '14px',
  },
  image: {
    aspectRatio: '2 / 3',
    objectFit: 'contain',
    width: 200,
    borderRadius: '5px',
    background: theme.palette.background.secondary,
  },
  mainInfo: {
    paddingLeft: 30,
    width: '100%',
  },
  genres: {
    display: 'flex',
    flexWrap: 'wrap',
    marginRight: -10,
    marginBottom: -10,
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
