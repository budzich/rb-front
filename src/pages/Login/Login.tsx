import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useStyles } from './styles';
import { useLogin } from 'ducks/auth/hooks/useLogin';
import { TokenStorage } from 'utils/tokenStorage';
import { AuthActionTypes } from 'utils/auth/auth.types';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from 'utils/auth/auth.context';
import { REGISTER_ROUTE } from 'constants/routes';
import FormikField from 'components/common/FormikField';

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
        <FormikField formik={formik} label="Почта" name="email" />
        <FormikField
          formik={formik}
          label="Пароль"
          name="password"
          inputProps={{ type: 'password' }}
        />
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
