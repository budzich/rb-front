import { useQuery } from 'react-query';
import { popularBooks } from 'ducks/books/api/books';
import { POPULAR_BOOKS_QUERY } from 'constants/queries';

export const usePopularBooks = (days: number) =>
  useQuery([POPULAR_BOOKS_QUERY, days], () => popularBooks(days));
