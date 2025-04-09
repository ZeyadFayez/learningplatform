import { Box, Text, Stack, Heading, Badge, Button } from "@chakra-ui/react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Sidebar = () => {
  const [showGrades, setShowGrades] = useState(false); // State to toggle visibility

  return (
    <Box
      bg="#588157"
      p={4}
      marginTop={5}
      marginBottom={32}
      marginLeft={3}
      h="90vh"
      w="400px"
      position="sticky"
      top="0"
      borderRadius="lg"
      boxShadow="xl"
      _hover={{ boxShadow: "2xl", transform: "scale(1.02)", transition: "0.3s" }}
    >
      {/* Quick Actions Section */}
      <Heading size="md" color="white" mb={4} textAlign="center" textShadow="1px 1px #344E41">
        Quick Actions
      </Heading>
      <Stack spacing={6}>
        {/* Upcoming Assignments */}
        <Box
          bg="#A3B18A"
          p={4}
          borderRadius="lg"
          boxShadow="lg"
          _hover={{ bg: "#94A889", transform: "scale(1.02)", transition: "0.3s" }}
        >
          <Text color="white" fontWeight="bold" fontSize="lg">
            Upcoming Assignments
          </Text>
          <Text color="white" mt={2}>
            Assignment 1: Due 2025-04-15
          </Text>
          <Text color="white" mt={1}>
            Assignment 2: Due 2025-04-20
          </Text>
        </Box>

        {/* Assignment Progress */}
        <Box
          bg="#344E41"
          p={4}
          borderRadius="lg"
          boxShadow="lg"
          _hover={{ bg: "#2F463B", transform: "scale(1.02)", transition: "0.3s" }}
        >
          <Text color="white" fontWeight="bold" fontSize="lg">
            Assignment Progress
          </Text>
          <Text color="white" mt={2}>
            Assignment 1: 70% Complete
          </Text>
          <Badge colorScheme="teal" mt={1}>
            On Track
          </Badge>
          <Text color="white" mt={3}>
            Assignment 2: 40% Complete
          </Text>
          <Badge colorScheme="orange" mt={1}>
            Needs Attention
          </Badge>
        </Box>

        {/* Upcoming Grades (Hidden by Default) */}
        <Box
          bg="#A3B18A"
          p={4}
          borderRadius="lg"
          boxShadow="lg"
          _hover={{ bg: "#94A889", transform: "scale(1.02)", transition: "0.3s" }}
        >
          <Button
            onClick={() => setShowGrades(!showGrades)}
            colorScheme="teal"
            variant="solid"
            w="100%"
            mb={2}
          >
            {showGrades ? "Hide Upcoming Grades" : "Show Upcoming Grades"}
          </Button>
          {showGrades && (
            <Box mt={2}>
              <Text color="white" fontWeight="bold" fontSize="lg">
                Upcoming Grades
              </Text>
              <Text color="white" mt={2}>
                Assignment 1: Expected Grade - A
              </Text>
              <Text color="white" mt={1}>
                Assignment 2: Expected Grade - B+
              </Text>
            </Box>
          )}
        </Box>
      </Stack>
    </Box>
  );
};

export default Sidebar;