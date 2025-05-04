import { Box, Text, Stack, Heading, Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ assignments, calculateProgress }) => {
  const [showGrades, setShowGrades] = useState(false); // State to toggle visibility
  const [selectedAnswer, setSelectedAnswer] = useState(""); // State for trivia answer
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // State for the current question index

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

  // Expanded array of trivia questions
  const triviaQuestions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin"],
      correctAnswer: "Paris",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Jupiter", "Mars"],
      correctAnswer: "Jupiter",
    },
    {
      question: "Who wrote 'Hamlet'?",
      options: ["Shakespeare", "Hemingway", "Tolkien"],
      correctAnswer: "Shakespeare",
    },
    {
      question: "What is the square root of 64?",
      options: ["6", "8", "10"],
      correctAnswer: "8",
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      options: ["Oxygen", "Gold", "Osmium"],
      correctAnswer: "Oxygen",
    },
    {
      question: "What is the fastest land animal?",
      options: ["Cheetah", "Lion", "Horse"],
      correctAnswer: "Cheetah",
    },
    {
      question: "What is the boiling point of water in Celsius?",
      options: ["90°C", "100°C", "110°C"],
      correctAnswer: "100°C",
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "Japan", "South Korea"],
      correctAnswer: "Japan",
    },
    {
      question: "What is the smallest prime number?",
      options: ["1", "2", "3"],
      correctAnswer: "2",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso"],
      correctAnswer: "Leonardo da Vinci",
    },
  ];

  // Get the current question
  const currentQuestion = triviaQuestions[currentQuestionIndex];

  // Handle answer selection
  const handleAnswer = (option) => {
    setSelectedAnswer(option);
    if (option === currentQuestion.correctAnswer) {
      // Move to the next question after a short delay
      setTimeout(() => {
        setSelectedAnswer(""); // Reset the selected answer
        setCurrentQuestionIndex((prevIndex) =>
          prevIndex + 1 < triviaQuestions.length ? prevIndex + 1 : 0 // Loop back to the first question
        );
      }, 1000); // 1-second delay to show feedback
    }
  };

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
          {assignments.map((assignment) => (
            <Box key={assignment.id} mt={2}>
              <Flex justify="space-between" align="center">
                <Text color="white">
                  {assignment.title}: {calculateProgress(assignment.id)}%
                </Text>
                {assignment.uploadedFile && (
                  <Text color="green.300" fontSize="sm">
                    ✓ Submitted
                  </Text>
                )}
              </Flex>
              <Box
                bg="gray.300"
                borderRadius="md"
                mt={2}
                h="8px"
                w="100%"
                position="relative"
              >
                <Box
                  bg={assignment.isDone ? "green.500" : "teal.500"}
                  h="100%"
                  w={`${calculateProgress(assignment.id)}%`}
                  borderRadius="md"
                  position="absolute"
                  transition="width 0.3s ease-in-out"
                />
              </Box>
            </Box>
          ))}
        </Box>

        {/* Trivia Section */}
        <Box
          bg="#A3B18A"
          p={4}
          borderRadius="lg"
          boxShadow="lg"
          _hover={{ transform: "scale(1.02)", transition: "0.3s" }}
        >
          <Text color="white" fontWeight="bold" fontSize="lg">
            Trivia Question
          </Text>
          {currentQuestion && (
            <>
              <Text color="white" mt={2}>
                {currentQuestion.question}
              </Text>
              <Stack direction="column" spacing={2} mt={2}>
                {currentQuestion.options.map((option) => (
                  <Button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    bg={selectedAnswer === option ? "teal.500" : "gray.300"}
                    color="white"
                    _hover={{ bg: "teal.400" }}
                  >
                    {option}
                  </Button>
                ))}
              </Stack>
              {selectedAnswer && (
                <Text mt={2} color={selectedAnswer === currentQuestion.correctAnswer ? "green.400" : "red.400"}>
                  {selectedAnswer === currentQuestion.correctAnswer
                    ? "Correct! Moving to the next question..."
                    : `Incorrect! The correct answer is ${currentQuestion.correctAnswer}.`}
                </Text>
              )}
            </>
          )}
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