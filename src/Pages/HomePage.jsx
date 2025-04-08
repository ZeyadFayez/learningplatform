import Header from "../Component/header";
import Footer from "../Component/footer";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import Sidebar from "../Component/sidebar";
import Homemaincon from "../Component/home-maincon";
import React from "react";


const HomePage = () => {
  return (
    <Box minH="100vh" bg="#DAD7CD">
      {/* Header */}
      <Header />

      {/* Top Section with Image, Site Name, and Description */}
      <Box textAlign="center" p={8} bg="#344E41" color="white">
      
        <Text fontSize="4xl" fontWeight="bold" mb={2}>
          Welcome to Fritz Learning Platform
        </Text>
        <Text fontSize="lg" maxW="800px" mx="auto">
          Explore a variety of courses and resources to enhance your skills and knowledge. Scroll down to see the available courses and navigate through the sidebar.
        </Text>
      </Box>

      {/* Scrollable Content Section */}
      <Flex overflowY="auto" mt={4}>
        {/* Sidebar */}
        
          
      

        {/* Homemaincon */}
        <Box flex="1" p={4}>
          <Homemaincon />
        </Box>
      </Flex>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default HomePage;