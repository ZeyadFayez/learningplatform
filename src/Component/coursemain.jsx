import React, { useState } from 'react';
import {
  Box,
  Grid,
  Heading,
  Text,
  Button,
  Image,
  Flex,
  Icon,
  SimpleGrid,
  Progress,
  Badge,
  VStack,
  Circle,
} from '@chakra-ui/react';
import {
  FaStar,
  FaLock,
  FaCheckCircle,
  FaClock,
  FaUsers,
  FaChevronRight,
  FaBook,
  FaVideo,
  FaCircle,
} from 'react-icons/fa';

const CourseMain = ({ course }) => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for enrolled courses
  const enrolledCourses = [
    {
      id: 1,
      title: "React Fundamentals",
      progress: 65,
      lastAccessed: "2 days ago",
      nextLesson: "React Hooks Deep Dive",
      thumbnail: "/path/to/react-thumbnail.jpg",
    }
  ];

  // Mock data for available courses
  const availableCourses = [
    {
      id: 1,
      title: "JavaScript Fundamentals",
      description: "Learn the basics of JavaScript programming",
      level: "beginner",
      duration: "6 weeks",
      price: "$49.99"
    },
    {
      id: 2,
      title: "Python for Data Science",
      description: "Master Python for data analysis and visualization",
      level: "intermediate",
      duration: "8 weeks",
      price: "$59.99"
    },
    {
      id: 3,
      title: "Advanced React Development",
      description: "Build complex applications with React",
      level: "advanced",
      duration: "10 weeks",
      price: "$79.99"
    }
  ];

  const handleEnroll = (courseId) => {
    console.log(`Enrolled in course ${courseId}`);
  };

  // If no course is selected, show available courses
  if (!course) {
    return (
      <Box p={8}>
        <Heading mb={6} color="#344E41">Available Courses</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {availableCourses.map(course => (
            <Box
              key={course.id}
              bg="white"
              p={6}
              borderRadius="lg"
              boxShadow="md"
              _hover={{ transform: "translateY(-4px)", boxShadow: "lg" }}
              transition="all 0.3s"
            >
              <Heading size="md" mb={2}>{course.title}</Heading>
              <Text color="gray.600" mb={4}>{course.description}</Text>
              <Flex justify="space-between" align="center" mb={4}>
                <Badge colorScheme={
                  course.level === 'beginner' ? 'green' :
                  course.level === 'intermediate' ? 'blue' : 'purple'
                }>
                  {course.level}
                </Badge>
                <Text color="gray.600">{course.duration}</Text>
              </Flex>
              <Button colorScheme="green" size="sm" width="full">
                Learn More
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    );
  }

  // If course is selected, show course details
  return (
    <Box p={8} bg="white" borderRadius="xl" boxShadow="lg" m={4}>
      <Heading mb={6}>{course.title}</Heading>
      <Text mb={4}>{course.description}</Text>
      
      <Progress
        value={course.progress}
        colorScheme="green"
        mb={4}
        borderRadius="full"
      />
      
      <Flex justify="space-between" align="center" mb={4}>
        <Text fontSize="sm" color="gray.600">
          Progress: {course.progress}%
        </Text>
        <Badge colorScheme="green">In Progress</Badge>
      </Flex>

      <Box mt={8}>
        <Heading size="md" mb={4}>Learning Objectives</Heading>
        {course.learningObjectives?.map((objective, index) => (
          <Flex key={index} align="center" mb={2}>
            <Icon as={FaCheckCircle} color="green.500" mr={2} />
            <Text>{objective}</Text>
          </Flex>
        ))}
      </Box>

      {/* Course Timeline */}
      <Box mt={8}>
        <Heading size="md" mb={6}>Course Modules</Heading>
        <VStack spacing={0} align="stretch">
          {course.modules?.map((module, index) => (
            <Box key={index} position="relative" pl={10} pb={8}>
              {/* Vertical Line */}
              {index !== course.modules.length - 1 && (
                <Box
                  position="absolute"
                  left="20px"
                  top="30px"
                  bottom="-10px"
                  width="2px"
                  bg="green.200"
                />
              )}
              
              {/* Timeline Node */}
              <Circle
                size="40px"
                bg="green.100"
                position="absolute"
                left="1px"
                top="0"
                border="2px solid"
                borderColor="green.500"
              >
                <Icon
                  as={module.type === 'video' ? FaVideo : FaBook}
                  color="green.500"
                />
              </Circle>

              {/* Content */}
              <Box ml={4}>
                <Heading size="sm" mb={2}>
                  {module.title}
                </Heading>
                <Text fontSize="sm" color="gray.600" mb={2}>
                  Duration: {module.duration}
                </Text>
                
                {/* Lessons */}
                <VStack align="stretch" spacing={2}>
                  {module.lessons?.map((lesson, lessonIndex) => (
                    <Flex
                      key={lessonIndex}
                      bg="gray.50"
                      p={3}
                      borderRadius="md"
                      align="center"
                    >
                      <Icon
                        as={lesson.type === 'video' ? FaVideo : FaBook}
                        color="green.500"
                        mr={2}
                      />
                      <Text fontSize="sm">{lesson.title}</Text>
                      <Badge ml="auto" colorScheme={lesson.type === 'video' ? 'blue' : 'purple'}>
                        {lesson.type}
                      </Badge>
                    </Flex>
                  ))}
                </VStack>
              </Box>
            </Box>
          ))}
        </VStack>
      </Box>

      {/* Resources Section */}
      <Box mt={8}>
        <Heading size="md" mb={4}>Course Resources</Heading>
        <VStack align="stretch" spacing={2}>
          {course.resources?.map((resource, index) => (
            <Flex
              key={index}
              align="center"
              bg="gray.50"
              p={3}
              borderRadius="md"
            >
              <Icon as={FaBook} color="green.500" mr={2} />
              <Text>{resource.title}</Text>
              <Badge ml="auto" colorScheme="purple">
                {resource.type}
              </Badge>
            </Flex>
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default CourseMain;