export type AuthState = {
  isLoggedIn: boolean;
};

export enum AuthActionTypes {
  'login',
  'logout',
  'storeCodes',
  'emailTokenError',
  'storeRegistration',
  'updateToken',
}

export type AuthAction =
  | { type: AuthActionTypes.login; payload: { isLoggedIn: boolean } }
  | { type: AuthActionTypes.updateToken; payload: boolean }
  | { type: AuthActionTypes.logout; payload: boolean }
