// src/App.jsx
import React from "react";
import {Box}  from "@chakra-ui/react";
import Header from "../Component/header";
import Sidebar from "../Component/sidebar";
import MainContent from "../Component/dash-maincon";
import Footer from "../Component/footer";

const Dashboard = () => {
  return (
    <Box minH="100vh" bg="#DAD7CD">
      
      <Header />
         
      
      <Box display="flex" flexDirection="row">
      <Sidebar />
      < MainContent/>
      </Box>

     
      <Footer />
    </Box>
  );
}

export default Dashboard;