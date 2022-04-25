import React, { createContext, useReducer, useEffect } from "react";
import { autReducer } from "./authReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userState, UserDispatch] = useReducer(autReducer, {}, init);

  useEffect(() => {
    if (!userState) return;
    localStorage.setItem("user", JSON.stringify(userState));
  }, [userState]);

  return (
    <AuthContext.Provider value={{ userState, UserDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
