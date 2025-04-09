import { Box, Text, Stack, Heading, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const FeedbackSidebar = () => {
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
      {/* Feedback Sidebar Header */}
      <Heading size="md" color="white" mb={4} textAlign="center" textShadow="1px 1px #344E41">
        Feedback Center
      </Heading>

      <Stack spacing={6}>
        {/* Submit Feedback Section */}
        <Box
          bg="#A3B18A"
          p={4}
          borderRadius="lg"
          boxShadow="lg"
          _hover={{ bg: "#94A889", transform: "scale(1.02)", transition: "0.3s" }}
        >
          <Text color="white" fontWeight="bold" fontSize="lg">
            Submit Feedback
          </Text>
          <Text color="white" mt={2}>
            Share your thoughts about the assignments or the platform.
          </Text>
          <Button
            as={RouterLink}
            to="/submit-feedback"
            colorScheme="teal"
            variant="solid"
            mt={4}
            w="100%"
          >
            Submit Now
          </Button>
        </Box>

        {/* Recent Feedback Section */}
        <Box
          bg="#344E41"
          p={4}
          borderRadius="lg"
          boxShadow="lg"
          _hover={{ bg: "#2F463B", transform: "scale(1.02)", transition: "0.3s" }}
        >
          <Text color="white" fontWeight="bold" fontSize="lg">
            Recent Feedback
          </Text>
          <Text color="white" mt={2}>
            "Great platform, but the grading system could be improved."
          </Text>
          <Text color="white" mt={1}>
            "I love the assignments, but the deadlines are too tight."
          </Text>
          <Button
            as={RouterLink}
            to="/recent-feedback"
            colorScheme="teal"
            variant="outline"
            mt={4}
            w="100%"
          >
            View All
          </Button>
        </Box>

        {/* Feedback Guidelines Section */}
        <Box
          bg="#A3B18A"
          p={4}
          borderRadius="lg"
          boxShadow="lg"
          _hover={{ bg: "#94A889", transform: "scale(1.02)", transition: "0.3s" }}
        >
          <Text color="white" fontWeight="bold" fontSize="lg">
            Feedback Guidelines
          </Text>
          <Text color="white" mt={2}>
            Learn how to provide constructive feedback to improve the platform.
          </Text>
          <Button
            as={RouterLink}
            to="/feedback-guidelines"
            colorScheme="teal"
            variant="solid"
            mt={4}
            w="100%"
          >
            Learn More
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default FeedbackSidebar;