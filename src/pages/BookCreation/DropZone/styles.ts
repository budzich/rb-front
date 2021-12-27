import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  imageWrapper: {},
  sectionTitle: {
    paddingBottom: '6px',
    color: theme.palette.text.placeholder,
    fontSize: '14px',
  },
  image: {
    aspectRatio: '2 / 3',
    width: 200,
    borderRadius: 5,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    background: theme.palette.background.secondary,
  },
  uploadedImage: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
    objectFit: 'contain',
  },
  dropzone: {
    color: theme.palette.text.placeholder,
    width: '100%',
    padding: 20,
    textAlign: 'center'
  },
  formError: {
    paddingTop: 4,
    fontSize: '12px',
    color: theme.palette.text.error,
  },
}));
