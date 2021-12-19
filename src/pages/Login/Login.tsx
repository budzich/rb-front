import React from 'react';
import { useStyles } from './styles';
import { Box, Button, Typography } from '@material-ui/core';
import TextField from 'components/common/TextField';

const Login = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>Вход в аккаунт</Typography>
      <form className={classes.form}>
        <TextField
          className={classes.textfield}
          label="Email"
          inputProps={{ className: classes.input }}
        />
        <TextField
          className={classes.textfield}
          label="Password"
          inputProps={{ className: classes.input }}
        />
        <Button className={classes.button}>Войти</Button>
      </form>
    </Box>
  );
};

export default Login;
