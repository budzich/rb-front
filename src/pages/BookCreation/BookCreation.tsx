import React from 'react';
import { Box, Button, CircularProgress, Typography } from '@material-ui/core';
import Genres from 'pages/BookCreation/Genres';
import DropZone from 'pages/BookCreation/DropZone';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import FormikField from 'components/common/FormikField';
import { FILE_SIZE, SUPPORTED_FORMATS } from 'pages/BookCreation/constants';
import { useCreateBook } from 'ducks/books/hooks/useCreateBook';
import { useNavigate } from 'react-router-dom';
import { BOOK_ROUTE } from 'constants/routes';
import { useStyles } from './styles';

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required('Введите название книги')
    .max(60, 'Название не должно превышать 60 символов')
    .min(3, 'Название должно содержать не менее 3 символов'),
  description: Yup.string()
    .required('Введите описание книги'),
  genres: Yup.array()
    .min(1, 'Укажите не менее одного жанра'),
  poster: Yup.mixed()
    .test('fileName', 'Загрузите обложку книги', value => value.name)
    .test('fileSize', 'Файл не должен превышать 2МБ', value => value.size <= FILE_SIZE)
    .test('fileType', 'Загрузите изображение в формате PNG или JPEG', value => SUPPORTED_FORMATS.includes(value.type)),
});

const BookCreation = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { mutateAsync, isLoading } = useCreateBook();
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      genres: [],
      poster: {
        name: '',
      },
    },
    validationSchema,
    onSubmit: async () => {
      await formik.validateForm(formik.values);
      const formData = new FormData();
      formData.append('title', formik.values.title);
      formData.append('description', formik.values.description);
      formData.append('genres', JSON.stringify(formik.values.genres));
      formData.append('image', formik.values.poster as unknown as Blob);
      const res = await mutateAsync(formData);

      if (res?.status === 201) {
        navigate(`${BOOK_ROUTE}/${res.data.id}`);
      }
    }
  });

  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>Публикация книги</Typography>
      <form onSubmit={formik.handleSubmit}>
        <Box className={classes.wrapper}>
          <DropZone formik={formik} />
          <Box className={classes.mainInfo}>
            <FormikField formik={formik} label="Название" name="title" />
            <Genres formik={formik} />
          </Box>
        </Box>
        <FormikField
          formik={formik}
          label="Описание"
          name="description"
          textfieldProps={{
            minRows: 6,
            maxRows: 12,
            multiline: true,
          }}
        />
        <Button className={classes.button} type="submit">
          {isLoading ? <CircularProgress size={14} /> : 'Опубликовать'}
        </Button>
      </form>
    </Box>
  );
};

export default BookCreation;
