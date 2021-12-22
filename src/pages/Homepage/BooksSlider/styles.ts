import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: () => ({
    paddingTop: 50,
    position: 'relative',
    width: '100%',

    '& .tns-controls button': {
      background: 'none',
      border: 0,
      zIndex: 3,
      width: 0,
      height: 0,
      padding: 9,
      top: 247,
      fontSize: 0,
      lineHeight: 0,
      borderLeft: `1px solid ${theme.palette.colors.control}`,
      borderTop: `1px solid ${theme.palette.colors.control}`,
      position: 'absolute',
      transform: 'translate(0, -50%) rotate(-45deg)',
      outline: 0,

      [theme.breakpoints.up('lg')]: {
        width: 0,
        height: 0,
        padding: 15,
        borderLeft: `6px solid ${theme.palette.colors.control}`,
        borderTop: `6px solid ${theme.palette.colors.control}`,
      },
    },

    '& button[data-controls=prev]': {
      left: '-6px',

      [theme.breakpoints.up('lg')]: {
        left: '-40px',
      },
    },

    '& button[data-controls=next]': {
      right: '-6px',
      transform: 'translate(0, -50%) rotate(135deg)',

      [theme.breakpoints.up('lg')]: {
        right: '-40px',
      },
    },
  }),
  title: {
    fontSize: 32,
    paddingBottom: 20,
    color: theme.palette.text.main
  },
}));
