import { createContext, useState, useContext, ReactNode } from 'react';

type LoginContextType = {
  loggedIn: any;
  setLoggedIn: (value: string) => void;
};

const LoginContext = createContext<LoginContextType | undefined>(undefined);

export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [loggedIn, setLoggedIn] = useState(JSON.parse(sessionStorage.getItem('loggedIn') || 'false'));

  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
};


export const useLogin = () => {
  const context = useContext(LoginContext);
  if (context === undefined) {
    throw new Error('useLogin must be used within a LoginProvider');
  }
  return context;
};
