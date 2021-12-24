import axiosInstance from 'utils/axios';
import { LOGIN_URL, REGISTER_URL } from 'constants/endpoints';
import { ILoginData } from 'ducks/auth/types/auth';

export const login = async (data: ILoginData) => {
  try {
    return await axiosInstance.post(LOGIN_URL, data);
  } catch (e: any) {
    return e.response;
  }
};

export const register = async (data: ILoginData) => {
  try {
    return await axiosInstance.post(REGISTER_URL, data);
  } catch (e: any) {
    return e.response;
  }
};
