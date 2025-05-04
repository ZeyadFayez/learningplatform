import React from "react";
import { Avatar, Button, Card, Flex, Box, Container, Heading, Text } from "@chakra-ui/react";

const homemain = () => {
  return (
    <Flex
      direction="column" 
      minH="100vh"
      justifyContent="space-between" 
      bg="#DAD7CD" 
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
      
       <Flex
        bg="#a3b18a"
        p={4}
        justifyContent="space-between"
        h="250px"
        borderRadius="md"
        boxShadow="lg"
        mb={140}
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
        <Heading size="2xl">ENROLLED COURSE</Heading>
       
        <Box Box bg="#344E41" fontWeight="bold" fontSize="sm"  mb={-100} h="130px" w={650} borderRadius={30} mt={20} p={2}  _hover={{ boxShadow: "2xl" }}
            transition={"all 0.2s ease-in-out"} > 
          <Text > coming soon </ Text>
        </Box>

        <Box Box bg="#344E41" fontWeight="bold" fontSize="sm"  mb={-100} h="130px" w={650} borderRadius={30} mt={20} p={2}  _hover={{ boxShadow: "2xl" }}
            transition={"all 0.2s ease-in-out"} > 
          <Text > coming soon </ Text>
        </Box>

        <Box Box bg="#344E41" fontWeight="bold" fontSize="sm"  mb={-100} h="130px" w={650} borderRadius={30} mt={20} p={2}  _hover={{ boxShadow: "2xl" }}
            transition={"all 0.2s ease-in-out"} > 
          <Text > coming soon </ Text>
        </Box>
      </Flex>
      

      
      <Container maxW="1200px" flex="1" px={4} ml={-0.5} mb={-100} mt={-100}>
        <Flex
          wrap="wrap" // Allow cards to wrap to the next row
          justify="space-between" // Center the cards horizontally
          justifyContent="flrex-start" 
          align="center" // Align the cards vertically
          gap={39.9} // Add spacing between the cards
        >
          <Card.Root
            width="320px"
            boxShadow="md"
            border={"#f2e8cf"}
            borderRadius="md"
            bg="#f2e8cf"
            p="4"
            _hover={{ boxShadow: "2xl" }}
            transition={"all 0.2s ease-in-out"}
          >
            <Card.Body gap="2">
              <Avatar.Root size="lg" shape="rounded">
                <Avatar.Image src="https://picsum.photos/200/300" />
                <Avatar.Fallback name="Nue Camp" />
              </Avatar.Root>
              <Card.Title mt="2" color="#22333b">
              Node.js
              </Card.Title>
              <Card.Description color="#22333b">
                
              Master the fundamentals of Node.js and build scalable, server-side applications. Learn how to handle APIs, manage databases, and create real-time web apps using JavaScript.
              </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
              <Button variant="surface" color={"#f2e8cf"} rounded="2xl">
                View
              </Button>
              <Button variant="surface" color={"#f2e8cf"} rounded="2xl">
                Join
              </Button>
            </Card.Footer>
          </Card.Root>

          <Card.Root
            width="320px"
            boxShadow="md"
            border={"#f2e8cf"}
            borderRadius="md"
            bg="#f2e8cf"
            p="4"
            _hover={{ boxShadow: "2xl" }}
            transition={"all 0.2s ease-in-out"}
          >
            <Card.Body gap="2">
              <Avatar.Root size="lg" shape="rounded">
                <Avatar.Image src="https://picsum.photos/200/300" />
                <Avatar.Fallback name="Nue Camp" />
              </Avatar.Root>
              <Card.Title mt="2" color="#22333b">
                UI/UX
              </Card.Title>
              <Card.Description color="#22333b">
              Learn the principles of user interface (UI) and user experience (UX) design to craft intuitive and engaging digital products. From wireframing to prototyping.
              </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
              <Button variant="surface" color={"#f2e8cf"} rounded="2xl">
                View
              </Button>
              <Button variant="surface" color={"#f2e8cf"} rounded="2xl">
                Join
              </Button>
            </Card.Footer>
          </Card.Root>

          <Card.Root
            width="320px"
            boxShadow="md"
            border={"#f2e8cf"}
            borderRadius="md"
            bg="#f2e8cf"
            p="4"
            _hover={{ boxShadow: "2xl" }}
            transition={"all 0.2s ease-in-out"}
          >
            <Card.Body gap="2">
              <Avatar.Root size="lg" shape="rounded">
                <Avatar.Image src="https://picsum.photos/200/300" />
                <Avatar.Fallback name="Nue Camp" />
              </Avatar.Root>
              <Card.Title mt="2" color="#22333b">
                Advanced CSS
              </Card.Title>
              <Card.Description color="#22333b">
              Take your CSS skills to the next level with advanced techniques like animations, responsive design, flexbox, and grid layouts. Create visually stunning and modern web designs with ease.
              </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
              <Button variant="surface" color={"#f2e8cf"} rounded="2xl">
                View
              </Button>
              <Button variant="surface" color={"#f2e8cf"} rounded="2xl">
                Join
              </Button>
            </Card.Footer>
          </Card.Root>

          <Card.Root
            width="1040px"
            boxShadow="md"
            border={"#f2e8cf"}
            borderRadius="md"
            bg="#f2e8cf"
            p="4"
            _hover={{ boxShadow: "2xl" }}
            transition={"all 0.2s ease-in-out"}
          >
            <Card.Body gap="2">
              <Avatar.Root size="lg" shape="rounded">
                <Avatar.Image src="https://picsum.photos/200/300" />
                <Avatar.Fallback name="Nue Camp" />
              </Avatar.Root>
              <Card.Title mt="2" color="#22333b">
                OOP
              </Card.Title>
              <Card.Description color="#22333b">
              Understand the core concepts of OOP, including classes, objects, inheritance, and polymorphism. 
              </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
              <Button variant="surface" color={"#f2e8cf"} rounded="2xl">
                View
              </Button>
              <Button variant="surface" color={"#f2e8cf"} rounded="2xl">
                Join
              </Button>
            </Card.Footer>
          </Card.Root>

        </Flex>
      </Container>

      <Flex 
         direction="column" 
         bg="#b6ad90" 
         color="white" 
         p={10} 
         h="auto" // Adjust height based on content
         W="auto"
         borderRadius="md" 
         boxShadow="lg" 
         _expanded={100}
         flex="1" // Take up less space compared to the cards
         ml={1250}
         mb={150}
         mt={-680}
         width="900px"
         position="sticky"
         shrink={100}
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
        <Box  bg="#b6ad90"  h="500px" fontWeight="bold" fontSize="lg">
          coming soon
        </Box>
        
        </Flex>
       

    </Flex>

    
  );
};

export default homemain;
