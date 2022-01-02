import { AuthAction, AuthActionTypes, AuthState } from 'utils/auth/auth.types';

export function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case AuthActionTypes.login:
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
      };
    case AuthActionTypes.updateToken:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    case AuthActionTypes.logout:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    default:
      throw new Error();
  }
}
