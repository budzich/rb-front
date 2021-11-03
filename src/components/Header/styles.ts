import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    borderBottom: `1px solid ${theme.palette.border.primary}`,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  root: {
    height: 60,
    width: '100%',
    maxWidth: 1100,
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuButton: {
    fontSize: 20,

    '&:hover': {
      background: theme.palette.buttons.hover,
    }
  },
  logo: {
    cursor: 'pointer',
    height: 52,
    marginRight: 50,
  },
  leftMenu: {
    display: 'flex',
    alignItems: 'center',
  },
  rightMenu: {
    display: 'flex',
    alignItems: 'center',
  },
}));
