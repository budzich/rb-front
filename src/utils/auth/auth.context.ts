import React, { Dispatch } from 'react';
import { AuthState, AuthAction } from 'utils/auth/auth.types';

export interface IAuthContext {
  state: AuthState;
  dispatch: Dispatch<AuthAction>;
}

const authInitContext: IAuthContext = {
  state: {} as AuthState,
  dispatch: () => null,
};

export const AuthContext = React.createContext(authInitContext);
