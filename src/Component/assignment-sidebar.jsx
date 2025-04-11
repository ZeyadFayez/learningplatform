import { Box, Text, Stack, Heading, Badge, Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Sidebar = () => {
  const [showGrades, setShowGrades] = useState(false); // State to toggle visibility
  const motivationalQuotes = [
    "Believe you can and you're halfway there.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The only way to do great work is to love what you do.",
    "Don't watch the clock; do what it does. Keep going.",
    "The future depends on what you do today."
  ];
  const funFacts = [
    "Did you know? Honey never spoils!",
    "The Eiffel Tower can be 15 cm taller during the summer.",
    "Octopuses have three hearts.",
    "Bananas are berries, but strawberries aren't.",
    "A day on Venus is longer than a year on Venus."
  ];

  // Randomly select a quote and a fun fact
  const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
  const randomFunFact = funFacts[Math.floor(Math.random() * funFacts.length)];

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
      overflowY="auto" // Enable scrolling
      animation="fadeIn 1s ease-in-out" // Apply fade-in animation
      _hover={{ boxShadow: "2xl", transform: "scale(1.02)", transition: "0.3s" }}
      sx={{
        "@keyframes fadeIn": {
          from: { opacity: 0, transform: "translateX(-50px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
      }}
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

        {/* Motivational Quote Section */}
        <Box
          bg="#344E41"
          p={4}
          borderRadius="lg"
          boxShadow="lg"
          _hover={{ bg: "#2F463B", transform: "scale(1.02)", transition: "0.3s" }}
        >
          <Text color="white" fontWeight="bold" fontSize="lg" textAlign="center">
            Motivational Quote
          </Text>
          <Text color="white" mt={2} fontStyle="italic" textAlign="center">
            "{randomQuote}"
          </Text>
        </Box>

        {/* Fun Fact Section */}
        <Box
          bg="#A3B18A"
          p={4}
          borderRadius="lg"
          boxShadow="lg"
          _hover={{ bg: "#94A889", transform: "scale(1.02)", transition: "0.3s" }}
        >
          <Text color="white" fontWeight="bold" fontSize="lg" textAlign="center">
            Fun Fact
          </Text>
          <Text color="white" mt={2} textAlign="center">
            {randomFunFact}
          </Text>
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