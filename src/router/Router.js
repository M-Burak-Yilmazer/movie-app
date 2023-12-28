import React from "react";
import { Route, Routes } from "react-router";

import Home from "../pages/Home";
import PrivateRouter from "./PrivateRouter";
import Register from "../pages/Register";
import Login from "../pages/Login";
import MovieCard from "../components/MovieCard";

import NavbarPart from "../components/NavbarPart";
import SimpleBottomNavigation from "../components/BottomNavbar";
import Movies from "../pages/Movies";
import TvSeries from "../pages/TvSeries";

const Router = () => {
  return (
    <>
      <NavbarPart />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<TvSeries />} />

        {/* <Route path="/movies/:id" element={<MovieCard />} /> */}
        <Route path="/movies/:id" element={<PrivateRouter />}>
          <Route path="" element={<MovieCard />} />
        </Route>
      </Routes>
      <SimpleBottomNavigation />
    </>
  );
};

export default Router;
