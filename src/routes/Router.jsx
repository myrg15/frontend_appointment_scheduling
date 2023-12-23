import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/auth/Login";
import Profile from "../pages/auth/Profile";
import Register from "../pages/auth/Register";
//import Dashboard from "../pages/Home/Dashboard";
import NavBar from "../components/navbar/NavBar";
import CreateTreatments from "../pages/CreateTreatments";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/create-treatment" element={<CreateTreatments />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
