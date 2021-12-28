import { useMutation } from 'react-query';
import { createBook } from 'ducks/books/api/books';
import { BOOK_CREATION_QUERY } from 'constants/queries';

export const useCreateBook = () => useMutation([BOOK_CREATION_QUERY], createBook);
