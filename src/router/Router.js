import React from "react";
import { Route, Routes } from "react-router";

import Home from "../pages/Home";
import PrivateRouter from "./PrivateRouter";
import MovieDetail from "../pages/MovieDetail";
import Register from "../pages/Register";
import Login from "../pages/Login";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:detail" element={<PrivateRouter />}>
          <Route path="" element={<MovieDetail />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
