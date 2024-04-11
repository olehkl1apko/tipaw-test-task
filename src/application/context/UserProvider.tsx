import { createContext, FC, useState, ReactNode } from "react";
import { ProfileData } from "../../presentation/pages/HomePage/types";

export interface UserContextType {
  userFromDB: ProfileData | undefined;
  setUserFromDB: (data: ProfileData | undefined) => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [userFromDB, setUserFromDB] = useState<ProfileData | undefined>(
    undefined
  );

  const contextValue: UserContextType = {
    userFromDB,
    setUserFromDB,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
