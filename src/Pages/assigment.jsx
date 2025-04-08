import React from 'react';
import Header from '../Component/header';
import Footer from '../Component/footer';
import Sidebar from '../Component/sidebar';
import MainContent from '../Component/home-maincon.jsx'; // Adjust the import path as needed
import { Container, Box } from '@chakra-ui/react';

const assigment = () => {
    return(
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

export default assigment;