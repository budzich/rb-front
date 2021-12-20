import React, { useReducer } from 'react';
import AppLayout from 'components/AppLayout';
import { AuthContext } from 'utils/auth/auth.context';
import { TokenStorage } from 'utils/tokenStorage';
import { authReducer } from 'utils/auth/auth.reducer';

const App = () => {
  const [state, dispatch] = useReducer(authReducer, {
    isLoggedIn: TokenStorage.isAuthenticated(),
  });

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <AppLayout />
    </AuthContext.Provider>
  );
};

export default App;
