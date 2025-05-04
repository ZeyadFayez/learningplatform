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
  Badge,
  SimpleGrid,
  Link,
  VStack,
  IconButton,
} from "@chakra-ui/react";
import { 
  FaFolder, 
  FaUpload, 
  FaTrash, 
  FaCheckCircle, 
  FaLightbulb,
  FaRegThumbsUp,
  FaComments,
  FaDownload, 
  FaBook, 
  FaVideo, 
  FaFile,
  FaFilePdf 
} from "react-icons/fa";

const AssignmentMain = ({ assignments, setAssignments }) => {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [activeTab, setActiveTab] = useState("assignments");

  // Add new state for course materials
  const [courseMaterials, setCourseMaterials] = useState([
    {
      id: 1,
      assignmentId: 1,
      type: "pdf",
      name: "Lecture Notes Week 1",
      url: "/api/materials/lecture-1.pdf",
      icon: FaFilePdf,
      size: "2.4 MB"
    },
    {
      id: 2,
      assignmentId: 1,
      type: "video",
      name: "Video Tutorial",
      url: "/api/materials/tutorial-1.mp4",
      icon: FaVideo,
      size: "45 MB"
    },
    {
      id: 3,
      assignmentId: 2,
      type: "pdf",
      name: "Reading Material",
      url: "/api/materials/reading-2.pdf",
      icon: FaFilePdf,
      size: "1.8 MB"
    }
  ]);

  // File upload handler
  const handleFileUpload = (assignmentId) => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.pdf,.doc,.docx';
    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        if (file.size > 10 * 1024 * 1024) {
          alert("File size should be less than 10MB");
          return;
        }
        setSelectedFile(file);
        setAssignments(prevAssignments =>
          prevAssignments.map(assignment => {
            if (assignment.id === assignmentId) {
              return {
                ...assignment,
                uploadedFile: file.name,
                uploadDate: new Date().toLocaleDateString(),
                fileSize: (file.size / 1024 / 1024).toFixed(2) + " MB"
              };
            }
            return assignment;
          })
        );
      }
    };
    fileInput.click();
  };

  // Handle removing uploaded file
  const handleRemoveFile = (assignmentId) => {
    setAssignments(prevAssignments =>
      prevAssignments.map(assignment => {
        if (assignment.id === assignmentId) {
          return {
            ...assignment,
            uploadedFile: null,
            uploadDate: null,
            fileSize: null
          };
        }
        return assignment;
      })
    );
  };

  // Calculate progress for an assignment
  const calculateProgress = (assignmentId) => {
    const assignment = assignments.find(a => a.id === assignmentId);
    if (!assignment) return 0;
    const completedMaterials = assignment.materials.filter(m => m.isComplete).length;
    return Math.round((completedMaterials / assignment.materials.length) * 100);
  };

  // Material status handler
  const toggleMaterialStatus = (assignmentId, materialId) => {
    setAssignments(prevAssignments =>
      prevAssignments.map(assignment => {
        if (assignment.id === assignmentId) {
          const updatedMaterials = assignment.materials.map(material => {
            if (material.id === materialId) {
              return { ...material, isComplete: !material.isComplete };
            }
            return material;
          });
          return {
            ...assignment,
            materials: updatedMaterials,
            isDone: updatedMaterials.every(m => m.isComplete)
          };
        }
        return assignment;
      })
    );
  };

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

  // Function to handle material download
  const handleDownload = async (material) => {
    try {
      // This would be replaced with your actual API call
      const response = await fetch(material.url);
      if (!response.ok) throw new Error('Download failed');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = material.name;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download the material. Please try again.');
    }
  };

  return (
    <Container maxW="1200px" py={8}>
      {/* Header Section */}
      <Box bg="#344E41" color="white" p={6} borderRadius="md" mb={6} textAlign="center">
        <Heading size="lg" textShadow="1px 1px #000">
          Assignment Dashboard
        </Heading>
        <Text mt={2} fontSize="lg">
          Manage your assignments and track your progress
        </Text>
      </Box>

      {/* Simplified Navigation */}
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
            leftIcon={<FaComments />}
            variant="solid"
            colorScheme="green"
            fontWeight="bold"
            _hover={{ bg: "#588157", color: "white" }}
            onClick={() => setIsFeedbackOpen(true)}
          >
            Feedback
          </Button>
        </Flex>

        {/* Updated Assignments Tab */}
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
          {assignments.map((assignment) => (
            <Box
              key={assignment.id}
              bg="white"
              p={6}
              borderRadius="xl"
              boxShadow="lg"
              _hover={{ transform: "translateY(-5px)", transition: "0.3s" }}
              position="relative"
              overflow="hidden"
            >
              {/* Assignment Header */}
              <Flex alignItems="center" gap={4}>
                <Icon
                  as={FaCheckCircle}
                  color={assignment.isDone ? "green.500" : "gray.300"}
                  boxSize={6}
                />
                <Box flex="1">
                  <Heading size="md" color="#344E41">
                    {assignment.title}
                  </Heading>
                  <Text color="gray.600" fontSize="sm">
                    Due: {assignment.description.split("Due date:")[1]}
                  </Text>
                </Box>
                <Badge
                  colorScheme={assignment.isDone ? "green" : "yellow"}
                  p={2}
                  borderRadius="md"
                >
                  {assignment.isDone ? "Completed" : "In Progress"}
                </Badge>
              </Flex>

              {/* Course Materials Section */}
              <Box mt={4}>
                <Text fontWeight="bold" color="gray.700" mb={2}>
                  <Icon as={FaBook} color="blue.500" mr={2} />
                  Course Materials:
                </Text>
                <VStack align="stretch" spacing={2}>
                  {courseMaterials
                    .filter(material => material.assignmentId === assignment.id)
                    .map(material => (
                      <Flex
                        key={material.id}
                        p={2}
                        bg="gray.50"
                        borderRadius="md"
                        justify="space-between"
                        align="center"
                        _hover={{ bg: 'gray.100' }}
                      >
                        <Flex align="center" gap={2}>
                          <Icon as={material.icon} color="gray.600" />
                          <VStack align="start" spacing={0}>
                            <Text fontSize="sm" fontWeight="medium">
                              {material.name}
                            </Text>
                            <Text fontSize="xs" color="gray.500">
                              {material.size}
                            </Text>
                          </VStack>
                        </Flex>
                        <IconButton
                          icon={<FaDownload />}
                          size="sm"
                          colorScheme="blue"
                          variant="ghost"
                          onClick={() => handleDownload(material)}
                          aria-label="Download material"
                        />
                      </Flex>
                    ))}
                </VStack>
              </Box>

              {/* Materials Section */}
              <Box mt={4}>
                <Text fontWeight="bold" color="gray.700" mb={2}>
                  <Icon as={FaLightbulb} color="yellow.500" mr={2} />
                  Learning Materials:
                </Text>
                <SimpleGrid columns={2} spacing={2}>
                  {assignment.materials.map((material) => (
                    <Button
                      key={material.id}
                      size="sm"
                      variant="outline"
                      colorScheme={material.isComplete ? "green" : "gray"}
                      onClick={() => toggleMaterialStatus(assignment.id, material.id)}
                      leftIcon={<Icon as={material.isComplete ? FaRegThumbsUp : FaFolder} />}
                    >
                      {material.name}
                    </Button>
                  ))}
                </SimpleGrid>
              </Box>

              {/* Upload Section */}
              <Box mt={4} p={4} bg="gray.50" borderRadius="md">
                <Flex direction="column" gap={2}>
                  <Flex justify="space-between" align="center">
                    <Button
                      leftIcon={<FaUpload />}
                      colorScheme="blue"
                      onClick={() => handleFileUpload(assignment.id)}
                      isDisabled={assignment.uploadedFile}
                      size="sm"
                    >
                      Upload Assignment
                    </Button>
                    {assignment.uploadedFile && (
                      <Button
                        size="sm"
                        colorScheme="red"
                        variant="ghost"
                        onClick={() => handleRemoveFile(assignment.id)}
                        leftIcon={<FaTrash />}
                      >
                        Remove
                      </Button>
                    )}
                  </Flex>
                  {assignment.uploadedFile && (
                    <Text color="green.500" fontSize="sm">
                      ✓ {assignment.uploadedFile} ({assignment.fileSize})
                      <br />
                      Uploaded: {assignment.uploadDate}
                    </Text>
                  )}
                  <Text fontSize="xs" color="gray.500">
                    Accepted: .pdf, .doc, .docx (Max 10MB)
                  </Text>
                </Flex>
              </Box>
            </Box>
          ))}
        </SimpleGrid>

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
