import React, { useState } from "react";
import {
  Container,
  Flex,
  Box,
  Text,
  Heading,
  Button,
  Textarea,
  VStack,
} from "@chakra-ui/react";

const FeedbackMain = () => {
  const [feedback, setFeedback] = useState("");

  const handleSubmitFeedback = () => {
    console.log("Feedback Submitted:", feedback);
    setFeedback("");
  };

  return (
    <Container maxW="1200px" py={8}>
      <Box bg="#344E41" color="white" p={4} borderRadius="md" mb={6}>
        <Heading size="lg" textAlign="center">
          Feedback Center
        </Heading>
        <Text textAlign="center" mt={2}>
          Share your thoughts and help us improve!
        </Text>
      </Box>

      <Flex direction="column" gap={6}>
        <Box bg="#DAD7CD" p={4} borderRadius="md" boxShadow="lg">
          <Heading size="md" mb={4} color="#344E41">
            Submit Feedback
          </Heading>
          <Textarea
            placeholder="Write your feedback here..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows={6}
            mb={4}
            bg="white"
          />
          <Button colorScheme="teal" onClick={handleSubmitFeedback} w="100%">
            Submit Feedback
          </Button>
        </Box>
      </Flex>
    </Container>
  );
};

export default FeedbackMain;
