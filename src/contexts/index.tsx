'use client';
import Cookies from 'js-cookie';
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
  ReactNode
} from 'react';

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface GlobalContextProviderProps {
  children : ReactNode;
}

type GlobalContextType = {
  authUser: boolean;
  user: boolean;
  setUser: Dispatch<SetStateAction<boolean>>;
  admin: boolean;
};



export const GlobalContextProvider = ({children}: GlobalContextProviderProps) => {
  const [authUser, setAuthUser] = useState(false);
  const [user, setUser] = useState(false);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    // Example of setting authUser based on cookie (adjust as needed)
    const token = Cookies.get('token');
    if (token) {
      setAuthUser(true);
    } else {
      setAuthUser(false);
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        authUser,
        user,
        setUser,
        admin,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = ():GlobalContextType => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useGlobalContext must be used within a GlobalContextProvider');
  }
  return context;
}