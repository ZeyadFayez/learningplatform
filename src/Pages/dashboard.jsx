      // src/App.jsx
import React, { useState, useEffect, useContext } from "react";
import { Box, Text } from "@chakra-ui/react";
import Header from "../Component/header";
import Sidebar from "../Component/dash-sidebar";
import MainContent from "../Component/dash-maincon";
import Footer from "../Component/footer";

// Example Context
const UserContext = React.createContext();

const Dashboard = () => {
  // State for toggling the sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // State for tracking user activity
  const [activity, setActivity] = useState("No recent activity");

  // Access user data from context
  const user = useContext(UserContext);

  // Effect to update the document title
  useEffect(() => {
    document.title = "Dashboard - Fritz Learning Platform";
  }, []);

  // Effect to simulate fetching user activity
  useEffect(() => {
    const timer = setTimeout(() => {
      setActivity("You recently completed the UI/UX course.");
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <Box minH="100vh" bg="#DAD7CD">
      {/* Header */}
      <Header />

      {/* Main Content Section */}
      <Box display="flex" flexDirection="row">
        {/* Sidebar */}
        {isSidebarOpen && (
          <Box w="300px" p={4} color="white">
            <Sidebar />
          </Box>
        )}

        {/* Main Content */}
        <Box flex="1" p={4}>
          <MainContent
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <Text mt={4} fontWeight="bold">
            {activity}
          </Text>
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Dashboard;