import React, { createContext, useState, useContext, useEffect } from "react";
import { useToken } from "./useToken";

type AppContext = {
  isLoggedIn: boolean;
};

export const AppContext = createContext<AppContext | undefined>(undefined);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const { token } = useToken();

  useEffect(() => {
    const validateToken = async () => {
      try {
        if (token !== null) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Error validating token:", error);
        setIsLoggedIn(false);
      }
    };

    validateToken();
  }, [token]);

  return (
    <AppContext.Provider value={{ isLoggedIn }}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
