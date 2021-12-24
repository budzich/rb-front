import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import TextField from 'components/common/TextField';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useStyles } from './styles';
import { useLogin } from 'ducks/auth/hooks/useLogin';
import { TokenStorage } from 'utils/tokenStorage';
import { AuthActionTypes } from 'utils/auth/auth.types';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from 'utils/auth/auth.context';
import { REGISTER_ROUTE } from 'constants/routes';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Введите почту')
    .email('Неправильный формат'),
  password: Yup.string()
    .required('Введите пароль')
    .min(6, 'Пароль должен содержать не менее 6 символов')
    .max(16, 'Пароль должен содержать не более 16 символов'),
});

const Login = () => {
  const classes = useStyles();
  const { mutateAsync } = useLogin();
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (authContext.state.isLoggedIn) {
      navigate('/');
    }
  }, [authContext, navigate]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async () => {
      await formik.validateForm(formik.values);
      setErrorMessage('');
      const res = await mutateAsync(formik.values);

      if (res?.status === 200) {
        TokenStorage.remember();
        const token = res.data?.token;
        if (token) {
          TokenStorage.storeToken(token);
          authContext.dispatch({
            type: AuthActionTypes.login,
            payload: {
              isLoggedIn: true,
            },
          });
          navigate('/');
        }
      }

      if (res?.status >= 400) {
        const error = res?.data?.message;

        if (error === 'Invalid credentials') {
          setErrorMessage('Неверные данные');
          return;
        }

        setErrorMessage('Что-то пошло не так');
      }
    }
  });

  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>Вход в аккаунт</Typography>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <Box
          className={
            formik.errors.email && formik.touched.email
              ? `error ${classes.inputWrapper}`
              : classes.inputWrapper
          }
          flexDirection="column"
        >
          <TextField
            label="Почта"
            name="email"
            inputProps={{ className: classes.input }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email && (
            <Box component="span" className={classes.formError}>
              {formik.errors.email}
            </Box>
          )}
        </Box>
        <Box
          className={
            formik.errors.password && formik.touched.password
              ? `error ${classes.inputWrapper}`
              : classes.inputWrapper
          }
          flexDirection="column"
        >
          <TextField
            label="Пароль"
            name="password"
            type="password"
            inputProps={{ className: classes.input }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched.password && (
            <Box component="span" className={classes.formError}>
              {formik.errors.password}
            </Box>
          )}
        </Box>
        <Typography className={classes.register}>
          Нет аккаунта?
          <Link to={REGISTER_ROUTE} className={classes.link}>Создать</Link>
        </Typography>
        <Button className={classes.button} type="submit">Войти</Button>
        {errorMessage && (
          <Typography component="span" className={classes.errorMessage}>
            {errorMessage}
          </Typography>
        )}
      </form>
    </Box>
  );
};

export default Login;
