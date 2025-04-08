import React from "react";
import { Avatar, Button, Card, Flex, Box, Container } from "@chakra-ui/react";

const homemain = () => {
  return (
    <Flex
      direction="column" // Align items in a column
      minH="100vh" // Make the Flex container span the full height of the viewport
      justifyContent="space-between" // Space out items vertically
      bg="#DAD7CD" // Background color
    >
      
      <Box
        bg="#A3B18A"
        p={4}
        justifyContent="center"
        h="150px"
        borderRadius="md"
        boxShadow="lg"
        mb={8}
      >
        <Box color="white" fontWeight="bold" fontSize="lg" textAlign="center">
          Top Section Content
        </Box>
      </Box>

      
      <Container maxW="1200px" flex="1" px={4} ml={-0.5}>
        <Flex
          wrap="wrap" // Allow cards to wrap to the next row
          justify="space-between" // Center the cards horizontally
          justifyContent="flrex-start" 
          align="center" // Align the cards vertically
          gap={10} // Add spacing between the cards
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
                UI/UX
              </Card.Title>
              <Card.Description color="#22333b">
                This is the card body. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
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
                This is the card body. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
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
                This is the card body. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
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

     

    </Flex>
  );
};

export default homemain;
