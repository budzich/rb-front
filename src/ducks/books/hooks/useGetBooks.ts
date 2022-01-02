import { useQuery } from 'react-query';
import { getBooks } from 'ducks/books/api/books';
import { BOOKS_QUERY } from 'constants/queries';
import { IGetBooks } from 'ducks/books/types/books';

export const useGetBooks = (data: IGetBooks) =>
  useQuery([BOOKS_QUERY], () => getBooks(data));
