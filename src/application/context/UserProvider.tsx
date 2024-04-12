import { createContext, FC, useState, ReactNode } from "react";

import { ProfileUser } from "../../presentation/modules";

export interface UserContextType {
  userFromDB: ProfileUser | undefined;
  setUserFromDB: (data: ProfileUser | undefined) => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [userFromDB, setUserFromDB] = useState<ProfileUser | undefined>(
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
