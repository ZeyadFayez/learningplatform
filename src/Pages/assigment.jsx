import React from 'react';
import Header from '../Component/header';
import Footer from '../Component/footer';
import Sidebar from '../Component/assignment-sidebar';
import { Box } from '@chakra-ui/react';
import AssignmentMain from '../Component/assignment-main'; // Adjust the import path as needed

const assigment = () => {
    return(
        <Box minH="100vh" bg="#DAD7CD">
      
        <Header />
           
        
        <Box display="flex" flexDirection="row">
        <Sidebar />
         <AssignmentMain />
        
        </Box>
  
       
        <Footer />
      </Box>
    );

}

export default assigment;