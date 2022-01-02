import axiosInstance from 'utils/axios';
import { BOOK_URL, BOOKS_URL, POPULAR_BOOKS_URL, SEARCH_BOOKS_URL } from 'constants/endpoints';
import { TokenStorage } from 'utils/tokenStorage';
import { IGetBooks, ISearchBooks } from 'ducks/books/types/books';

export const popularBooks = async (days: number) => {
  const url = `${POPULAR_BOOKS_URL}?period=${days}`;

  try {
    return await axiosInstance.get(url, TokenStorage.getAuthentication());
  } catch (e: any) {
    return e.response;
  }
};

export const getBooks = async ({ page, sort }: IGetBooks) => {
  const url = `${BOOKS_URL}?page=${page || ''}&sort=${sort || ''}`;

  try {
    return await axiosInstance.get(url, TokenStorage.getAuthentication());
  } catch (e: any) {
    return e.response;
  }
};

export const searchBooks = async ({ search }: ISearchBooks) => {
  const url = `${SEARCH_BOOKS_URL}?search=${search || ''}`;

  try {
    return await axiosInstance.get(url, TokenStorage.getAuthentication());
  } catch (e: any) {
    return e.response;
  }
};

export const getBook = async (id: number) => {
  const url = `${BOOK_URL}/${id}`;

  try {
    return await axiosInstance.get(url, TokenStorage.getAuthentication());
  } catch (e: any) {
    return e.response;
  }
};

export const createBook = async (data: FormData) => {
  try {
    return await axiosInstance.post(BOOKS_URL, data, TokenStorage.getAuthentication());
  } catch (e: any) {
    return e.response;
  }
};


