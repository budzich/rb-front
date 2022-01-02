import React from 'react';
import { Box, Typography } from '@material-ui/core';
import Genre from 'pages/BookCreation/Genres/Genre';
import { useStyles } from './styles';
import { useGetGenres } from 'ducks/genres/hooks/useGetGenres';
import { FormikProps } from 'formik';

interface IProps {
  formik: FormikProps<any>;
}

const Genres = ({ formik }: IProps) => {
  const classes = useStyles();
  const { data } = useGetGenres();

  const handleSetGenres = (genres: number[]) => formik.setFieldValue('genres', genres);

  return (
    <Box
      className={
        formik.errors.genres && formik.touched.genres
          ? `error ${classes.inputWrapper}`
          : classes.inputWrapper
      }
      flexDirection="column"
    >
      <Typography className={classes.sectionTitle}>Жанры</Typography>
      <Box className={classes.genres}>
        {data?.data?.map((genre) =>
          <Genre
            key={genre.id}
            genre={genre}
            selectedGenres={formik.values.genres}
            setSelectedGenres={handleSetGenres}
          />)}
      </Box>
      {formik.errors.genres && formik.touched.genres && (
        <Box component="span" className={classes.formError}>
          {formik.errors.genres}
        </Box>
      )}
    </Box>
  );
};

export default Genres;
