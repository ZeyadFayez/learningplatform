import React, { useState } from "react";
import {
  Container,
  Flex,
  Box,
  Text,
  Heading,
  Button,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { FaFolder, FaUser, FaQuoteRight } from "react-icons/fa";

const AssignmentMain = () => {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false); // State to toggle feedback form
  const [feedback, setFeedback] = useState(""); // State for feedback text
  const [email, setEmail] = useState(""); // State for email input

  const handleSubmit = () => {
    console.log("Feedback Submitted:", { email, feedback });
    setIsFeedbackOpen(false); // Close the feedback form after submission
  };

  return (
    <Container maxW="1200px" py={8}>
      {/* Header Section */}
      <Box bg="#344E41" color="white" p={4} borderRadius="md" mb={6}>
        <Heading size="lg" textAlign="center">
          Assignment Dashboard
        </Heading>
        <Text textAlign="center" mt={2}>
          Manage your assignments and track your progress.
        </Text>
      </Box>

      {/* Tabs Section */}
      <Box>
        <Flex
          borderBottom="1px solid"
          borderColor="gray.200"
          mb={4}
          justify="space-around"
        >
          <Button
            leftIcon={<FaFolder />}
            variant="ghost"
            colorScheme="green"
            fontWeight="bold"
          >
            Assignments
          </Button>
          <Button
            leftIcon={<FaUser />}
            variant="ghost"
            colorScheme="green"
            fontWeight="bold"
          >
            Profile
          </Button>
          <Button
            leftIcon={<FaQuoteRight />}
            variant="ghost"
            colorScheme="green"
            fontWeight="bold"
          >
            Feedback
          </Button>
        </Flex>

        {/* Assignments Tab */}
        <Box>
          <Flex direction="column" gap={6}>
            <Box bg="#A3B18A" p={4} borderRadius="md" boxShadow="md">
              <Heading size="md" color="white">
                Assignment 1
              </Heading>
              <Text mt={2} color="white">
                Description of Assignment 1. Due date: 2025-04-15.
              </Text>
            </Box>

            <Box bg="#588157" p={4} borderRadius="md" boxShadow="md">
              <Heading size="md" color="white">
                Assignment 2
              </Heading>
              <Text mt={2} color="white">
                Description of Assignment 2. Due date: 2025-04-20.
              </Text>
            </Box>
          </Flex>
        </Box>

        {/* Profile Tab */}
        <Box mt={8}>
          <Flex direction="column" align="center" gap={4}>
            <Heading size="md">Zeyad Fayez</Heading>
            <Text>Email: zeyad219350@bue.edu.eg</Text>
            <Button colorScheme="teal">Edit Profile</Button>
          </Flex>
        </Box>

        {/* Feedback Tab */}
        <Box mt={8} bg="#344E41" p={4} borderRadius="md" color="white">
          <Heading size="md">Feedback</Heading>
          <Text mt={2}>
            If you think there was a mistake in the assignment grading, please provide your feedback below.
          </Text>
          <Button mt={4} colorScheme="teal" onClick={() => setIsFeedbackOpen(true)}>
            Submit Feedback
          </Button>
        </Box>
      </Box>

      {/* Feedback Form Popup */}
      {isFeedbackOpen && (
        <Box
          position="fixed"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          bg="#DAD7CD"
          p={6}
          borderRadius="md"
          boxShadow="lg"
          zIndex="1000"
          width="400px"
        >
          <Heading size="md" mb={4}>
            Submit Feedback
          </Heading>
          <Text mb={2}>Email Address</Text>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            mb={4}
          />
          <Text mb={2}>Feedback</Text>
          <Textarea
            placeholder="Write your feedback here..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows={5}
            mb={4}
          />
          <Flex justifyContent="space-between">
            <Button colorScheme="teal" onClick={handleSubmit}>
              Submit
            </Button>
            <Button variant="ghost" onClick={() => setIsFeedbackOpen(false)}>
              Cancel
            </Button>
          </Flex>
        </Box>
      )}

      {/* Overlay */}
      {isFeedbackOpen && (
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="rgba(0, 0, 0, 0.5)"
          zIndex="999"
          onClick={() => setIsFeedbackOpen(false)}
        />
      )}
    </Container>
  );
};

export default AssignmentMain;
