import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define o tipo para o valor do contexto
type LoginContextType = {
  loggedIn: any;
  setLoggedIn: (value: string) => void;
};

// Cria um Contexto de Login
const LoginContext = createContext<LoginContextType | undefined>(undefined);

// Cria um Provider de Login
export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [loggedIn, setLoggedIn] = useState(JSON.parse(sessionStorage.getItem('loggedIn') || 'false'));

  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
};

// Cria um Hook personalizado para usar o Login
export const useLogin = () => {
  const context = useContext(LoginContext);
  if (context === undefined) {
    throw new Error('useLogin must be used within a LoginProvider');
  }
  return context;
};
