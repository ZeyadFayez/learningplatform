// src/components/Sidebar.jsx
import { Box, Text, Accordion, Span, Stack, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom"; 

const Sidebar = () => {
  const [value, setValue] = useState([" "]); 

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
      borderRadius="md"
      boxShadow="lg"
      overflowY="auto"
      data-state="open"
         _open={{
           animationName: "fade-in, scale-in",
           animationDuration: "2000ms",
         }}
         _closed={{
           animationName: "fade-out, scale-out",
           animationDuration: "2000ms",
         }}
    >
      <Stack gap="40px" color="#DAD7CD" mt={30}>
      
        <Text fontWeight="medium" fontSize={30}>
          other courses {value.join(", ")}
        </Text>

        
        <Accordion.Root value={value} onValueChange={(e) => setValue(e.value)} >
          {items.map((item, index) => (
            <Accordion.Item key={index} value={item.value} >
              <Accordion.ItemTrigger>
                <Span flex="1">{item.title}</Span>
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>
              <Accordion.ItemContent >
                <Accordion.ItemBody >
                  
                  <RouterLink to={item.link} style={{ color: "#DAD7CD", textDecoration: "none" }}>
                    {item.text}
                  </RouterLink>
                </Accordion.ItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
        
        
        <Box mt={100} p={4} bg="#3A5A40" borderRadius="md" boxShadow="lg">
          <Text fontWeight="bold" fontSize={30} mb={4} color="#DAD7CD">
            Enrolled Courses
          </Text>
          <SimpleGrid columns={1} spacing={4}>
            {enrolledCourses.map((course, index) => (
              <Box
                key={index}
                bg="#344E41"
                p={4}
                borderRadius="md"
                boxShadow="md"
                color="#DAD7CD"
                _hover={{ bg: "#3A5A40", cursor: "pointer" }}
              >
                <RouterLink to={course.link} style={{ color: "#DAD7CD", textDecoration: "none" }}>
                  <Text fontWeight="medium" fontSize={25}>
                    {course.title}
                  </Text>
                  <Text fontSize={14}>{course.description}</Text>
                </RouterLink>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Stack>
    </Box>
  );
};


const items = [
  { value: "data structures", title: "data structures", text: "Learn Data Structures with Python", link: "/" },
  { value: "opp", title: "opp", text: "Learn OOP with Java", link: "/oop-java" },
  { value: "ui/ux", title: "ui/ux with figma", text: "Learn UI/UX with Figma", link: "/ui-ux" },
];


const enrolledCourses = [
  { title: "React Basics", description: "Learn the basics of React.js", link: "/react-basics" },
  { title: "Advanced CSS", description: "Master advanced CSS techniques", link: "/advanced-css" },
  { title: "Node.js Fundamentals", description: "Understand the fundamentals of Node.js", link: "/nodejs-fundamentals" },
];

export default Sidebar;