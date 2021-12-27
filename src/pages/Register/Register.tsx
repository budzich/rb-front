import React, { useContext, useEffect, useState } from 'react';
import { useStyles } from './styles';
import { Box, Button, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from 'utils/auth/auth.context';
import { useFormik } from 'formik';
import { TokenStorage } from 'utils/tokenStorage';
import { AuthActionTypes } from 'utils/auth/auth.types';
import * as Yup from 'yup';
import { useRegister } from 'ducks/auth/hooks/useRegister';
import FormikField from 'components/common/FormikField';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Введите почту')
    .email('Неправильный формат'),
  password: Yup.string()
    .required('Введите пароль')
    .min(6, 'Пароль должен содержать не менее 6 символов')
    .max(16, 'Пароль должен содержать не более 16 символов')
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/,
      'Пароль должен включать в себя не менее одной цифры, прописной и заглавной букв и не менее одного специального символа'
    ),
  password_confirmation: Yup.string()
    .required('Подтвердите пароль')
    .oneOf([Yup.ref('password')], 'Пароли не совпадают'),
});

const Register = () => {
  const classes = useStyles();
  const { mutateAsync } = useRegister();
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (authContext.state.isLoggedIn) {
      navigate('/');
    }
  }, [authContext, navigate]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      password_confirmation: '',
    },
    validationSchema,
    onSubmit: async () => {
      await formik.validateForm(formik.values);
      setErrorMessage('');
      const res = await mutateAsync(formik.values);

      if (res?.status === 201) {
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

        if (error === 'This user has already exists') {
          setErrorMessage('Такой пользователь уже существует');
          return;
        }

        setErrorMessage('Что-то пошло не так');
      }
    }
  });

  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>Создание аккаунта</Typography>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <FormikField formik={formik} label="Почта" name="email" />
        <FormikField
          formik={formik}
          label="Пароль"
          name="password"
          inputProps={{ type: 'password' }}
        />
        <FormikField
          formik={formik}
          label="Подтверждение пароля"
          name="password_confirmation"
          inputProps={{ type: 'password' }}
        />
        <Button className={classes.button} type="submit">Создать аккаунт</Button>
        {errorMessage && (
          <Typography component="span" className={classes.errorMessage}>
            {errorMessage}
          </Typography>
        )}
      </form>
    </Box>
  );
};

export default Register;
