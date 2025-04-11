import React, { useState, useEffect, useContext } from "react";
import Header from "../Component/header";
import Footer from "../Component/footer";
import { Box, Flex, Text } from "@chakra-ui/react";

import Homemaincon from "../Component/home-maincon";

const UserContext = React.createContext();

const HomePage = () => {
  const [welcomeMessage, setWelcomeMessage] = useState("Welcome to Fritz Learning Platform");

  const user = useContext(UserContext);

  // Array of messages to cycle through
  const messages = [
    "Welcome to Fritz Learning Platform",
    "Explore our courses and resources!",
    "Learn at your own pace!",
    "Join our community today!",
  ];

  useEffect(() => {
    document.title = "Home Page - Fritz Learning Platform";
  }, []);

  // Effect to change the message every 5 seconds
  useEffect(() => {
    let index = 0; // Start with the first message
    const interval = setInterval(() => {
      index = (index + 1) % messages.length; // Cycle through the messages
      setWelcomeMessage(messages[index]);
    }, 5000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [messages]);

  return (
    <Box minH="100vh" bg="#DAD7CD">
      {/* Header */}
      <Header />

      {/* Top Section with Welcome Message */}
      <Box textAlign="center" p={8} bg="#344E41" color="white" data-state="open"
    _open={{
      animationName: "fade-in, scale-in",
      animationDuration: "2000ms",
    }}
    _closed={{
      animationName: "fade-out, scale-out",
      animationDuration: "2000ms",
    }} >
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