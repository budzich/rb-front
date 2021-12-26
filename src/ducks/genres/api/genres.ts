import axiosInstance from 'utils/axios';
import { GENRES_URL } from 'constants/endpoints';
import { IGenresResponse } from 'ducks/genres/types/genres';

export const getGenres = async (): Promise<IGenresResponse> => {
  try {
    return await axiosInstance.get(GENRES_URL);
  } catch (e: any) {
    return e.response;
  }
};
