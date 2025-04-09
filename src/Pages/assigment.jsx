import React from 'react';
import Header from '../Component/header';
import Footer from '../Component/footer';
import Sidebar from '../Component/assignment-sidebar';
import AssignmentMain from '../Component/assignment-main'; // Import AssignmentMain
import { Box } from '@chakra-ui/react';

const assigment = () => {
    return (
        <Box minH="100vh" bg="#DAD7CD">
            <Header />
            
            <Box display="flex" flexDirection="row">
                <Sidebar />
                <Box flex="1" p={4}>
                    <AssignmentMain /> {/* Render AssignmentMain */}
                </Box>
            </Box>
            
            <Footer />
        </Box>
    );
};

export default assigment;