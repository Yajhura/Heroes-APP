import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen from "../Components/UI/LoginScreen";

import DashBoardRoute from "./DashBoardRoute";
import { PrivateRoute } from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const Approuter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginScreen />
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <DashBoardRoute />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Approuter;
