import React, { useState } from 'react';
import {
  Box,
  VStack,
  Text,
  Heading,
  Badge,
  Button,
  Input,
  Stack,
  Flex,
} from '@chakra-ui/react';

const CourseSidebar = ({ courses = [], activeCourse, setActiveCourse }) => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = courses.filter(course => 
    (filter === 'all' || course.level === filter) &&
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const motivationalQuotes = [
    "Learning is a journey, not a destination.",
    "Every expert was once a beginner.",
    "Small progress is still progress.",
    "Stay curious, keep learning.",
  ];

  const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

  return (
    <Box
      w="300px"
      bg="#588157"
      p={4}
      borderRadius="lg"
      boxShadow="xl"
      color="white"
      position="sticky"
      top="20px"
      h="calc(100vh - 40px)"
      overflowY="auto"
      transition="all 0.3s"
      _hover={{ boxShadow: "2xl" }}
    >
      <VStack spacing={6} align="stretch">
        {/* Search Section */}
        <Box>
          <Input
            placeholder="Search courses..."
            bg="white"
            color="black"
            onChange={(e) => setSearchQuery(e.target.value)}
            mb={4}
          />
        </Box>

        {/* Course Levels */}
        <Box>
          <Text mb={2} fontWeight="bold">Course Levels:</Text>
          <Stack direction="row" spacing={2}>
            <Button
              size="sm"
              colorScheme={filter === 'all' ? 'green' : 'gray'}
              onClick={() => setFilter('all')}
            >
              All
            </Button>
            <Button
              size="sm"
              colorScheme={filter === 'beginner' ? 'green' : 'gray'}
              onClick={() => setFilter('beginner')}
            >
              Beginner
            </Button>
            <Button
              size="sm"
              colorScheme={filter === 'advanced' ? 'green' : 'gray'}
              onClick={() => setFilter('advanced')}
            >
              Advanced
            </Button>
          </Stack>
        </Box>

        {/* Motivational Quote */}
        <Box
          bg="#344E41"
          p={4}
          borderRadius="lg"
          _hover={{ transform: "translateY(-2px)" }}
          transition="all 0.3s"
        >
          <Text fontStyle="italic" textAlign="center">
            "{randomQuote}"
          </Text>
        </Box>

        {/* Course List */}
        <VStack spacing={4} align="stretch">
          {filteredCourses.map(course => (
            <Box
              key={course.id}
              bg={activeCourse?.id === course.id ? "#344E41" : "#A3B18A"}
              p={4}
              borderRadius="md"
              cursor="pointer"
              onClick={() => setActiveCourse(course)}
              transition="all 0.3s"
              _hover={{ transform: "translateY(-2px)", boxShadow: "md" }}
            >
              <Heading size="sm" mb={2}>{course.title}</Heading>
              <Text fontSize="sm" noOfLines={2} mb={2}>
                {course.description}
              </Text>
              <Flex justify="space-between" align="center">
                <Badge colorScheme={course.level === 'beginner' ? 'green' : 'purple'}>
                  {course.level}
                </Badge>
                <Text fontSize="sm">{course.duration}</Text>
              </Flex>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default CourseSidebar;