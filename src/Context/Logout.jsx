import React from "react";
import { createContext, useState } from "react";

const LogoutUser = createContext();

export const LogoutUserProvider = ({ children }) => {
  const [logout, setLogout] = useState("");
  return (
    <LogoutUser.Provider value={{ logout, setLogout }}>
      {children}
    </LogoutUser.Provider>
  );
};

export default LogoutUser;