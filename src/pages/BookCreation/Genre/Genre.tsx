import React from 'react';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
import { IGenre } from 'ducks/genres/types/genres';

interface IProps {
  genre: IGenre;
  selectedGenres: number[];
  setSelectedGenres: (e: number[]) => void;
}

const Genre = ({ genre, selectedGenres, setSelectedGenres }: IProps) => {
  const classes = useStyles();
  const { id, title } = genre;
  const isSelected = selectedGenres.some((el) => el === id);
  const classname = isSelected ? `${classes.root} ${classes.active}` : classes.root;

  const handleClick = () => {
    if (isSelected) {
      setSelectedGenres((selectedGenres.filter(el => el !== id)));
      return;
    }

    setSelectedGenres([...selectedGenres, id]);
  };

  return (
    <Typography className={classname} onClick={handleClick}>{title}</Typography>
  );
};

export default Genre;
