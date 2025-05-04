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
  Icon,
} from "@chakra-ui/react";
import { FaFolder, FaUser, FaQuoteRight, FaCheckCircle } from "react-icons/fa";

const AssignmentMain = () => {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false); // State to toggle feedback form
  const [feedback, setFeedback] = useState(""); // State for feedback text
  const [email, setEmail] = useState(""); // State for email input

  // State to track completion status of assignments
  const [assignments, setAssignments] = useState([
    { id: 1, title: "Assignment 1", description: "Description of Assignment 1. Due date: 2025-04-15.", isDone: false },
    { id: 2, title: "Assignment 2", description: "Description of Assignment 2. Due date: 2025-04-20.", isDone: false },
  ]);

  // Handle marking an assignment as done
  const toggleAssignmentStatus = (id) => {
    setAssignments((prevAssignments) =>
      prevAssignments.map((assignment) =>
        assignment.id === id ? { ...assignment, isDone: !assignment.isDone } : assignment
      )
    );
  };

  const handleSubmit = () => {
    console.log("Feedback Submitted:", { email, feedback });
    setIsFeedbackOpen(false); // Close the feedback form after submission
  };

  return (
    <Container
      maxW="1200px"
      py={8}
      bgGradient="linear(to-r, #DAD7CD, #A3B18A)"
      borderRadius="lg"
      boxShadow="xl"
      animation="fadeIn 1s ease-in-out"
      sx={{
        "@keyframes fadeIn": {
          from: { opacity: 0, transform: "translateY(50px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      }}
    >
      {/* Header Section */}
      <Box bg="#344E41" color="white" p={6} borderRadius="md" mb={6} textAlign="center">
        <Heading size="lg" textShadow="1px 1px #000">
          Assignment Dashboard
        </Heading>
        <Text mt={2} fontSize="lg">
          Manage your assignments and track your progress.
        </Text>
      </Box>

      {/* Tabs Section */}
      <Box>
        <Flex
          borderBottom="1px solid"
          borderColor="gray.200"
          mb={6}
          justify="space-around"
          pb={2}
        >
          <Button
            leftIcon={<FaFolder />}
            variant="solid"
            colorScheme="green"
            fontWeight="bold"
            _hover={{ bg: "#588157", color: "white" }}
          >
            Assignments
          </Button>
          <Button
            leftIcon={<FaUser />}
            variant="solid"
            colorScheme="green"
            fontWeight="bold"
            _hover={{ bg: "#588157", color: "white" }}
          >
            Profile
          </Button>
          <Button
            leftIcon={<FaQuoteRight />}
            variant="solid"
            colorScheme="green"
            fontWeight="bold"
            _hover={{ bg: "#588157", color: "white" }}
          >
            Feedback
          </Button>
        </Flex>

        {/* Assignments Tab */}
        <Box>
          <Flex direction="column" gap={6}>
            {assignments.map((assignment) => (
              <Box
                key={assignment.id}
                bg="white"
                p={6}
                borderRadius="lg"
                boxShadow="lg"
                _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
              >
                <Flex alignItems="center" justifyContent="space-between" gap={4}>
                  <Flex alignItems="center" gap={4}>
                    <Icon
                      as={FaCheckCircle}
                      color={assignment.isDone ? "green.500" : "gray.300"}
                      boxSize={6}
                    />
                    <Heading size="md" color="#344E41">
                      {assignment.title}
                    </Heading>
                  </Flex>
                  <Button
                    colorScheme={assignment.isDone ? "red" : "teal"}
                    size="sm"
                    onClick={() => toggleAssignmentStatus(assignment.id)}
                  >
                    {assignment.isDone ? "Mark as Undone" : "Mark as Done"}
                  </Button>
                </Flex>
                <Text mt={2} color="gray.600">
                  {assignment.description}
                </Text>
                {assignment.isDone && (
                  <Text mt={2} color="green.500" fontWeight="bold">
                    This assignment is completed!
                  </Text>
                )}
              </Box>
            ))}
          </Flex>
        </Box>

        {/* Profile Tab */}
        <Box mt={8}>
          <Flex direction="column" align="center" gap={4}>
            <Heading size="md" color="#344E41">
              Zeyad Fayez
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Email: zeyad219350@bue.edu.eg
            </Text>
            <Button colorScheme="teal" _hover={{ bg: "#588157", color: "white" }}>
              Edit Profile
            </Button>
          </Flex>
        </Box>

        {/* Feedback Tab */}
        <Box mt={8} bg="#344E41" p={6} borderRadius="lg" color="white">
          <Heading size="md">Feedback</Heading>
          <Text mt={2}>
            If you think there was a mistake in the assignment grading, please provide your feedback below.
          </Text>
          <Button
            mt={4}
            colorScheme="teal"
            _hover={{ bg: "#588157", color: "white" }}
            onClick={() => setIsFeedbackOpen(true)}
          >
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
          bg="white"
          p={6}
          borderRadius="lg"
          boxShadow="2xl"
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
