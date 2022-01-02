import { useMutation } from 'react-query';
import { searchBooks } from 'ducks/books/api/books';
import { SEARCH_BOOKS_QUERY } from 'constants/queries';

export const useSearchBooks = () => useMutation([SEARCH_BOOKS_QUERY], searchBooks);
