import React, { useState } from 'react';
import { useStyles } from './styles';
import { Box, Button, Typography } from '@material-ui/core';
import TextField from 'components/common/TextField';
import { useGetGenres } from 'ducks/genres/hooks/useGetGenres';
import Genre from 'pages/BookCreation/Genre';

const BookCreation = () => {
  const classes = useStyles();
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const { data } = useGetGenres();

  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>Публикация книги</Typography>
      <form>
        <Box className={classes.wrapper}>
          <Box className={classes.imageWrapper}>
            <Typography className={classes.sectionTitle}>Обложка</Typography>
            <Box className={classes.image} />
          </Box>
          <Box className={classes.mainInfo}>
            <TextField
              label="Название"
              name="title"
              className={classes.textfield}
            />
            <Typography className={classes.sectionTitle}>Жанры</Typography>
            <Box className={classes.genres}>
              {data?.data?.map((genre) =>
                <Genre
                  key={genre.id}
                  genre={genre}
                  selectedGenres={selectedGenres}
                  setSelectedGenres={setSelectedGenres}
                />)}
            </Box>
          </Box>
        </Box>
        <TextField
          label="Описание"
          name="description"
          className={classes.textfield}
          rows={6}
          multiline
        />
        <Button className={classes.button}>Опубликовать</Button>
      </form>
    </Box>
  );
};

export default BookCreation;
