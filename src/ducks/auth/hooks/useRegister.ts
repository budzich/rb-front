import { useMutation } from 'react-query';
import { register } from 'ducks/auth/api/auth';
import { REGISTER_QUERY } from 'constants/queries';

export const useRegister = () => useMutation([REGISTER_QUERY], register);
