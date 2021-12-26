import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 14,
    padding: '4px 8px',
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 5,
    color: theme.palette.text.placeholder,
    border: `1px solid ${theme.palette.border.primary}`,
    cursor: 'pointer',
  },
  active: {
    color: theme.palette.colors.blue,
  },
}));
