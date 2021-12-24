import axiosInstance from 'utils/axios';
import { BOOKS_URL, POPULAR_BOOKS_URL } from 'constants/endpoints';
import { TokenStorage } from 'utils/tokenStorage';
import { IGetBooks } from 'ducks/books/types/books';

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

export const getBook = async (id: number) => {
  const url = `${BOOKS_URL}/${id}`;

  try {
    return await axiosInstance.get(url, TokenStorage.getAuthentication());
  } catch (e: any) {
    return e.response;
  }
};
