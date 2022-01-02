import { useMutation } from 'react-query';
import { login } from 'ducks/auth/api/auth';
import { LOGIN_QUERY } from 'constants/queries';

export const useLogin = () => useMutation([LOGIN_QUERY], login);
