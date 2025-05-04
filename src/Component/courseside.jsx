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
  Progress,
} from '@chakra-ui/react';

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Course sidebar error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box
          w="300px"
          bg="#588157"
          p={4}
          borderRadius="lg"
          boxShadow="xl"
          color="white"
        >
          <Heading size="md" mb={4}>Something went wrong</Heading>
          <Text>We're having trouble loading your courses.</Text>
          <Button 
            mt={4} 
            colorScheme="green" 
            onClick={() => this.setState({ hasError: false })}
          >
            Try again
          </Button>
        </Box>
      );
    }
    return this.props.children;
  }
}

const CourseSidebar = ({ courses = [], activeCourse, setActiveCourse }) => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showProgress, setShowProgress] = useState(true);

  // Simplified filtering logic
  const filteredCourses = courses.filter(course => {
    const matchesFilter = filter === 'all' || (course.level && course.level === filter);
    const matchesSearch = !searchQuery || 
      (course.title && course.title.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  // Simplified tips array
  const tips = [
    "Regular breaks help retention",
    "Practice immediately",
    "Share knowledge",
    "Set goals",
  ];

  const tipIndex = Math.floor(Math.random() * tips.length);

  return (
    <ErrorBoundary>
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
      >
        <VStack spacing={6} align="stretch">
          {/* Header */}
          <Flex justify="space-between" align="center">
            <Heading size="md">My Courses</Heading>
            <Badge colorScheme="green">{courses.length || 0}</Badge>
          </Flex>

          {/* Search with null check */}
          <Box>
            <Input
              placeholder="Find course..."
              bg="white"
              color="black"
              onChange={(e) => setSearchQuery(e?.target?.value || '')}
              _placeholder={{ color: 'gray.500' }}
            />
          </Box>

          {/* Course Filters */}
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

          {/* Course List with null checks */}
          <VStack spacing={4} align="stretch">
            {Array.isArray(filteredCourses) && filteredCourses.map(course => (
              <Box
                key={course.id || Math.random()}
                bg={activeCourse?.id === course.id ? "#344E41" : "#A3B18A"}
                p={4}
                borderRadius="md"
                cursor="pointer"
                onClick={() => setActiveCourse(course)}
                _hover={{ transform: "translateY(-2px)" }}
              >
                <Heading size="sm" mb={2}>{course.title || 'Untitled Course'}</Heading>
                {course.description && (
                  <Text fontSize="sm" noOfLines={2} mb={3}>
                    {course.description}
                  </Text>
                )}
                <Flex direction="column" gap={2}>
                  {course.level && (
                    <Badge alignSelf="flex-start" colorScheme={course.level === 'beginner' ? 'green' : 'purple'}>
                      {course.level}
                    </Badge>
                  )}
                  {showProgress && course.progress !== undefined && (
                    <Box w="100%">
                      <Progress
                        value={course.progress}
                        size="sm"
                        colorScheme="green"
                        borderRadius="full"
                        bg="white"
                      />
                      <Text fontSize="xs" mt={1} textAlign="right">
                        {course.progress}%
                      </Text>
                    </Box>
                  )}
                </Flex>
              </Box>
            ))}
          </VStack>

          {/* Tip Box */}
          <Box bg="#344E41" p={4} borderRadius="lg">
            <Text fontWeight="bold">Tip:</Text>
            <Text>{tips[tipIndex]}</Text>
          </Box>

          {/* Progress Toggle */}
          <Button
            colorScheme="green"
            variant="outline"
            onClick={() => setShowProgress(!showProgress)}
            size="sm"
          >
            {showProgress ? 'Hide Progress' : 'Show Progress'}
          </Button>
        </VStack>
      </Box>
    </ErrorBoundary>
  );
};

// Make sure to export the component correctly
export default CourseSidebar;
