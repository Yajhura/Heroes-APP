import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../Components/UI/Navbar";
import DcScreen from "../Components/dc/dcScreen";
import MarvelScreen from "../Components/marvel/MarvelScreen";
import SearchScreen from "../Components/UI/SearchScreen";
import { HeroeScreen } from "../Components/heroes/HeroeScreen";
import HeroeList from "../Components/heroes/HeroeList";
import ErrorH from "../Components/UI/ErrorH";
const DashBoardRoute = () => {
  return (
    <>
      <Navbar />
       <div className="p-10">
       <Routes>
        <Route path="marvel" element={<MarvelScreen />} />
        <Route path="dc" element={<DcScreen />} />
        <Route path="search" element={<SearchScreen />} />
        <Route path="hero/:heroId" element={<HeroeScreen />} />
        <Route path="error" element={<ErrorH />} />

        <Route path="/" element={<HeroeList />} />
      </Routes>
       </div>
    </>
  );
};

export default DashBoardRoute;
