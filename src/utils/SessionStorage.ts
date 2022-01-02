import { useContext, useEffect } from 'react';
import { AuthContext } from 'utils/auth/auth.context';
import { AuthActionTypes } from 'utils/auth/auth.types';
import { TokenStorage } from 'utils/tokenStorage';
import {
  GET_SESSION_STORAGE,
  SESSION_STORAGE,
  UPDATED_SESSION_STORAGE,
} from 'constants/sessionStorage';

const SessionStorage = () => {
  const authContext = useContext(AuthContext);

  const sessionStorageTransfer = (event: any) => {
    if (!event.newValue) {
      return;
    }

    if (event.key === GET_SESSION_STORAGE) {
      localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage));
      localStorage.removeItem('sessionStorage');
    }

    if (event.key === SESSION_STORAGE && !sessionStorage.length) {
      const data = JSON.parse(event.newValue);
      if (Object.keys(data).length) {
        for (const key in data) {
          if (data[key]) {
            sessionStorage.setItem(key, data[key]);
          }
        }
      }

      authContext.dispatch({
        type: AuthActionTypes.updateToken,
        payload: TokenStorage.isAuthenticated(),
      });
    }

    if (event.key === UPDATED_SESSION_STORAGE) {
      const data = JSON.parse(event.newValue);
      sessionStorage.clear();
      for (const key in data) {
        if (data[key]) {
          sessionStorage.setItem(key, data[key]);
        }
      }

      authContext.dispatch({
        type: AuthActionTypes.updateToken,
        payload: TokenStorage.isAuthenticated(),
      });
    }
  };

  useEffect(() => {
    window.addEventListener('storage', sessionStorageTransfer, false);

    if (!sessionStorage.length) {
      localStorage.setItem(GET_SESSION_STORAGE, 'update');
      localStorage.removeItem(GET_SESSION_STORAGE);
    }
    // eslint-disable-next-line
  }, []);

  return null;
};

export default SessionStorage;
