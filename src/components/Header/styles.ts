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
  user: {
    display: 'flex',
    alignItems: 'center',
  },
  plus: {
    fontSize: 26,
    boxSizing: 'border-box',
    cursor: 'pointer',
    borderRadius: 100,
    minWidth: 40,
    minHeight: 40,
    width: 40,
    height: 40,
    marginRight: 10,
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
