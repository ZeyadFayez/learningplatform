import React from 'react';
import Header from '../Component/header';
import Footer from '../Component/footer';
import Sidebar from '../Component/feedback-side';
import Feedback from '../Component/feedback-main'; // Import Feedback component
import { Box } from '@chakra-ui/react';

const FeedbackPage = () => {
    return (
        <Box minH="100vh" bg="#DAD7CD">
            <Header />
            
            <Box display="flex" flexDirection="row">
                <Sidebar />
                <Box flex="1" p={4}>
                    <Feedback /> {/* Render Feedback component */}
                </Box>
            </Box>
            
            <Footer />
        </Box>
    );
}
export default FeedbackPage;