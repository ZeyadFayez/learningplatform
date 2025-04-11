import { Box, Text, Stack, Heading } from "@chakra-ui/react";

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
      overflowY="auto" /* Enable vertical scrolling */
      _hover={{ boxShadow: "2xl", transform: "scale(1.02)", transition: "0.3s" }}
    >
      {/* Feedback Sidebar Header */}
      <Heading size="md" color="white" mb={4} textAlign="center" textShadow="1px 1px #344E41">
        Feedback Center
      </Heading>

      <Stack spacing={6}>
        {/* Feedback Statistics Section */}
        <Box
          bg="#A3B18A"
          p={4}
          borderRadius="lg"
          boxShadow="lg"
          _hover={{ bg: "#94A889", transform: "scale(1.02)", transition: "0.3s" }}
        >
          <Text color="white" fontWeight="bold" fontSize="lg">
            Feedback Statistics
          </Text>
          <Text color="white" mt={2}>
            Total Feedback Submitted: <strong>1,245</strong>
          </Text>
          <Text color="white" mt={1}>
            Average Rating: <strong>4.5 / 5</strong>
          </Text>
          <Text color="white" mt={1}>
            Most Common Feedback: <em>"Great platform, but the grading system could be improved."</em>
          </Text>
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
        </Box>

        {/* Top Feedback Highlights Section */}
        <Box
          bg="#344E41"
          p={4}
          borderRadius="lg"
          boxShadow="lg"
          color="white"
          _hover={{ bg: "#2F463B", transform: "scale(1.02)", transition: "0.3s" }}
        >
          <Heading size="md" mb={4} textAlign="center" textShadow="1px 1px #A3B18A">
            Top Feedback Highlights
          </Heading>
          <Stack spacing={4}>
            <Box
              bg="#588157"
              p={3}
              borderRadius="md"
              boxShadow="md"
              _hover={{ bg: "#94A889", transform: "scale(1.02)", transition: "0.3s" }}
            >
              <Text fontWeight="bold">John Doe</Text>
              <Text mt={1} fontSize="sm">
                "The platform is amazing! The interactive assignments really help me learn."
              </Text>
            </Box>
            <Box
              bg="#588157"
              p={3}
              borderRadius="md"
              boxShadow="md"
              _hover={{ bg: "#94A889", transform: "scale(1.02)", transition: "0.3s" }}
            >
              <Text fontWeight="bold">Jane Smith</Text>
              <Text mt={1} fontSize="sm">
                "I love the feedback system. It’s great to see how my suggestions are implemented!"
              </Text>
            </Box>
            <Box
              bg="#588157"
              p={3}
              borderRadius="md"
              boxShadow="md"
              _hover={{ bg: "#94A889", transform: "scale(1.02)", transition: "0.3s" }}
            >
              <Text fontWeight="bold">Alex Johnson</Text>
              <Text mt={1} fontSize="sm">
                "The grading system is transparent and fair. Keep up the good work!"
              </Text>
            </Box>
          </Stack>
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
          <Text color="white" mt={1}>
            Be respectful and provide actionable suggestions.
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default FeedbackSidebar;