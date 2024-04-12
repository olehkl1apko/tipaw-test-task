import { createContext, FC, useState, ReactNode } from "react";

import { IProfileUser } from "../../presentation/modules";

export interface UserContextType {
  userFromDB: IProfileUser | undefined;
  setUserFromDB: (data: IProfileUser | undefined) => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [userFromDB, setUserFromDB] = useState<IProfileUser | undefined>(
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
