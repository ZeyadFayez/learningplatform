import React, { useState, useEffect, useContext } from "react";
import Header from "../Component/header";
import Footer from "../Component/footer";
import { Box, Flex, Text, Button } from "@chakra-ui/react";

import Homemaincon from "../Component/home-maincon";

// Example Context
const UserContext = React.createContext();

const HomePage = () => {
  



  const [welcomeMessage, setWelcomeMessage] = useState("Welcome to Fritz Learning Platform");

  // Access user data from context
  const user = useContext(UserContext);

  // Effect to update the document title
  useEffect(() => {
    document.title = "Home Page - Fritz Learning Platform";
  }, []);

  // Effect to simulate fetching data
  useEffect(() => {
    const timer = setTimeout(() => {
      setWelcomeMessage("Explore our courses and resources!");
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <Box minH="100vh" bg="#DAD7CD">
      {/* Header */}
      <Header />

      {/* Top Section with Welcome Message */}
      <Box textAlign="center" p={8} bg="#344E41" color="white"  data-state="open"
         _open={{
           animationName: "fade-in, scale-in",
           animationDuration: "2000ms",
         }}
         _closed={{
           animationName: "fade-out, scale-out",
           animationDuration: "2000ms",
         }}>
        <Text fontSize="4xl" fontWeight="bold" mb={2}>
          {welcomeMessage}
        </Text>
        <Text fontSize="lg" maxW="800px" mx="auto">
          {user ? `Hello, ${user.name}!` : "Sign in to personalize your experience."}
        </Text>
      </Box>

      {/* Main Content Section */}
      <Flex mt={4}>
       

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