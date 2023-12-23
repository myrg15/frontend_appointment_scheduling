import { Box } from "@mui/material";
import React from "react";
import { Navigate } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";

const Dashboard = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <Box>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eligendi
    </Box>
  );
};

export default Dashboard;
