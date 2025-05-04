import React, { useState } from 'react';
import Header from '../Component/header';
import Footer from '../Component/footer';
import Sidebar from '../Component/assignment-sidebar';
import AssignmentMain from '../Component/assignment-main';
import { Box } from '@chakra-ui/react';

const Assignment = () => {
    const [assignments, setAssignments] = useState([
        {
            id: 1,
            title: "Assignment 1",
            description: "Description of Assignment 1. Due date: 2025-04-15.",
            isDone: false,
            uploadedFile: null,
            uploadDate: null,
            materials: [
                { id: 1, name: "Lecture Notes", isComplete: false },
                { id: 2, name: "Practice Problems", isComplete: false },
                { id: 3, name: "Video Tutorial", isComplete: false }
            ]
        },
        {
            id: 2,
            title: "Assignment 2",
            description: "Description of Assignment 2. Due date: 2025-04-20.",
            isDone: false,
            uploadedFile: null,
            uploadDate: null,
            materials: [
                { id: 1, name: "Reading Material", isComplete: false },
                { id: 2, name: "Quiz", isComplete: false },
                { id: 3, name: "Project Files", isComplete: false }
            ]
        }
    ]);

    const calculateProgress = (assignmentId) => {
        const assignment = assignments.find(a => a.id === assignmentId);
        if (!assignment) return 0;
        const completedMaterials = assignment.materials.filter(m => m.isComplete).length;
        return Math.round((completedMaterials / assignment.materials.length) * 100);
    };

    return (
        <Box minH="100vh" bg="#DAD7CD">
            <Header />
            <Box display="flex" flexDirection="row">
                <Sidebar 
                    assignments={assignments}
                    calculateProgress={calculateProgress}
                />
                <Box flex="1" p={4}>
                    <AssignmentMain 
                        assignments={assignments}
                        setAssignments={setAssignments}
                    />
                </Box>
            </Box>
            <Footer />
        </Box>
    );
};

export default Assignment;