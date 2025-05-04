import React, { useState } from 'react';
import Header from '../Component/header';
import Footer from '../Component/footer';
import CourseSidebar from '../Component/courseside';
import CourseMain from '../Component/coursemain';
import { Box, Flex } from '@chakra-ui/react';

const Course = () => {
    const [activeCourse, setActiveCourse] = useState(null);

    // Simplified course selection handler
    const handleCourseSelect = (course) => {
        setActiveCourse(course);
    };

    // Course data
    const courses = [
        {
            id: 1,
            title: "Introduction to React",
            description: "Learn the fundamentals of React development including components, state, props, and hooks.",
            level: "beginner",
            progress: 60,
            duration: "8 weeks",
            enrolled: 1234,
            rating: 4.8,
            thumbnail: "https://via.placeholder.com/300x200?text=React+Basics",
            learningObjectives: [
                "Understand React fundamentals",
                "Build interactive UIs",
                "Manage state effectively",
                "Work with React Hooks"
            ],
            modules: [
                {
                    title: "Getting Started",
                    duration: "1.5h",
                    lessons: [
                        { title: "Introduction to React", type: "video" },
                        { title: "Setting up your environment", type: "reading" }
                    ]
                }
            ],
            resources: [
                { title: "React Documentation", type: "link" },
                { title: "Exercise Files", type: "pdf" },
                { title: "Code Examples", type: "github" }
            ]
        },
        {
            id: 2,
            title: "Advanced React Patterns",
            description: "Master advanced React patterns and best practices for building scalable applications.",
            level: "advanced",
            progress: 30,
            duration: "10 weeks",
            enrolled: 856,
            rating: 4.9,
            thumbnail: "https://via.placeholder.com/300x200?text=Advanced+React",
            learningObjectives: [
                "Implement advanced React patterns",
                "Optimize React applications",
                "Handle complex state management",
                "Build custom hooks"
            ],
            modules: [
                {
                    title: "Performance Optimization",
                    duration: "2h",
                    lessons: [
                        { title: "React.memo and useMemo", type: "video" },
                        { title: "Performance Profiling", type: "reading" }
                    ]
                }
            ],
            resources: [
                { title: "Advanced Patterns Guide", type: "pdf" },
                { title: "Performance Tips", type: "video" }
            ]
        }
    ];

    return (
        <Box minH="100vh" bg="#DAD7CD">
            <Header />
            <Flex 
                gap={8} 
                p={4}
                flexDir={{ base: 'column', md: 'row' }}
                maxW="1400px"
                mx="auto"
            >
                <CourseSidebar
                    courses={courses}
                    activeCourse={activeCourse}
                    setActiveCourse={setActiveCourse}
                />
                <Box flex="1">
                    <CourseMain course={activeCourse} />
                </Box>
            </Flex>
            <Footer />
        </Box>
    );
};

export default Course;
