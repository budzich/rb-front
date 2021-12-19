import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '30px 20px',
    position: 'absolute',
    background: theme.palette.background.secondary,
    borderRadius: 5,
    border: `1px solid ${theme.palette.border.primary}`,
  },
}));
