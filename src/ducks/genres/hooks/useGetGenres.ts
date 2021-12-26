import { useQuery } from 'react-query';
import { getGenres } from 'ducks/genres/api/genres';
import { GENRES_QUERY } from 'constants/queries';

export const useGetGenres = () =>
  useQuery([GENRES_QUERY], getGenres);
