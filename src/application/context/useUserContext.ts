import { useContext } from "react";

import { UserContext, UserContextType } from "./UserProvider";

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within an UserProvider");
  }
  return context;
};
