import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const data = getLocalStorage();
    const { employees = [], admin = null } = data || {};
    setUserData({ employees, admin });
    
  }, []);

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
