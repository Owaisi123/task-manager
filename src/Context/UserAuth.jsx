import React from "react";
import { createContext, useEffect, useState } from "react";

const UserAuth = createContext();

export const UserAuthProvider = ({ children }) => {
  const [getUserName, setGetUserName] = useState("");
  const [getUserEmail, setGetUserEmail] = useState("");

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedEmail = localStorage.getItem("email");
    if (savedUser) {
      setGetUserName(savedUser);
    }
    if (savedEmail) {
      setGetUserEmail(savedEmail);
    }
  }, []);

  const setUserNameLoggedIn = (name, email) => {
    setGetUserName(name);
    setGetUserEmail(email);
    localStorage.setItem("user", name);
    localStorage.setItem("email", email);
  };

  const logoutUser = () => {
    setGetUserName("Guest");
    setGetUserEmail("");
    localStorage.removeItem("user");
    localStorage.removeItem("email");
  };

  return (
    <UserAuth.Provider
      value={{
        getUserName,
        setGetUserName,
        getUserEmail,
        setGetUserEmail,
        setUserNameLoggedIn,
        logoutUser,
      }}
    >
      {children}
    </UserAuth.Provider>
  );
};

export default UserAuth;