import React, { useContext } from "react";
import { AuthContext, AuthContextProvider } from "./auth/autContext";
import Approuter from "./router/Approuter";

const HeroesApp = () => {
  return (
    <AuthContextProvider>
      <Approuter />
    </AuthContextProvider>
  );
};

export default HeroesApp;
