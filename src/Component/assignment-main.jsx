import React from "react";
import {
  Container,
  Flex,
  Box,
  Text,
  Heading,
  Button,
} from "@chakra-ui/react";
import { FaFolder, FaUser, FaQuoteRight } from "react-icons/fa"; // Updated icons

const AssignmentMain = () => {
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
            leftIcon={<FaFolder />} // Updated icon
            variant="ghost"
            colorScheme="green"
            fontWeight="bold"
          >
            Assignments
          </Button>
          <Button
            leftIcon={<FaUser />} // Updated icon
            variant="ghost"
            colorScheme="green"
            fontWeight="bold"
          >
            Profile
          </Button>
          <Button
            leftIcon={<FaQuoteRight />} // Updated icon
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
              <Button mt={4} colorScheme="teal">
                View Details
              </Button>
            </Box>

            <Box bg="#588157" p={4} borderRadius="md" boxShadow="md">
              <Heading size="md" color="white">
                Assignment 2
              </Heading>
              <Text mt={2} color="white">
                Description of Assignment 2. Due date: 2025-04-20.
              </Text>
              <Button mt={4} colorScheme="teal">
                View Details
              </Button>
            </Box>
          </Flex>
        </Box>

        {/* Profile Tab */}
        <Box mt={8}>
          <Flex direction="column" align="center" gap={4}>
           
            <Heading size="md">John Doe</Heading>
            <Text>Email: johndoe@example.com</Text>
            <Button colorScheme="teal">Edit Profile</Button>
          </Flex>
        </Box>

        {/* Feedback Tab */}
        <Box mt={8} bg="#344E41" p={4} borderRadius="md" color="white">
          <Heading size="md">Feedback</Heading>
          <Text mt={2}>
            We value your feedback. Please let us know how we can improve your
            experience.
          </Text>
          <Button mt={4} colorScheme="teal">
            Submit Feedback
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AssignmentMain;