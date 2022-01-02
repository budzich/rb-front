import { useQuery } from 'react-query';
import { getBook } from 'ducks/books/api/books';
import { BOOK_QUERY } from 'constants/queries';

export const useGetBook = (id: number) =>
  useQuery([BOOK_QUERY], () => getBook(id), {
    enabled: false,
  });
