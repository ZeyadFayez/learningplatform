import React from 'react'
import { Avatar, Button, Card, For, Flex, Box, Container, } from "@chakra-ui/react"

const homemain = () => {
    return (
     <Container maxW="1200px" pt="8rem" pb="4rem" px={4} bg="#DAD7CD">
       
         
         <Flex padding={30} mb={300} mt={-100}  justifyContent="center" alignItems="center" gap={70} overflowY="auto" borderRadius="md" >
      <Card.Root width="320px" boxShadow="md" border={"#f2e8cf"}  borderRadius="md" bg="#f2e8cf" p="4" mt="4" mb="4" _hover={{ boxShadow: "2xl" }} transition={"all 0.2s ease-in-out"}>
      <Card.Body gap="2">
        <Avatar.Root size="lg" shape="rounded">
          <Avatar.Image src="https://picsum.photos/200/300" />
          <Avatar.Fallback name="Nue Camp" />
        </Avatar.Root>
        <Card.Title mt="2" color="#22333b" >UI/UX</Card.Title>
        <Card.Description  color="#22333b">
          This is the card body. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
          Curabitur nec odio vel dui euismod fermentum.
        </Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button variant="surface" color={"#f2e8cf"} rounded="2xl">View</Button>
        <Button variant="surface"color={"#f2e8cf"} rounded="2xl">Join</Button>
      </Card.Footer>
    </Card.Root>

    <Card.Root width="320px" boxShadow="md" borderRadius="md" border={"#f2e8cf"} bg="#f2e8cf" p="4" mt="4" mb="4" _hover={{ boxShadow: "2xl" }} transition={"all 0.2s ease-in-out"}>
      <Card.Body gap="2">
        <Avatar.Root size="lg" shape="rounded">
          <Avatar.Image src="https://picsum.photos/200/300" />
          <Avatar.Fallback name="Nue Camp" />
        </Avatar.Root>
        <Card.Title mt="2" color="#22333b" >DATA STRCUTURES</Card.Title>
        <Card.Description  color="#22333b">
          This is the card body. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
          Curabitur nec odio vel dui euismod fermentum.
        </Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button variant="surface" color={"#f2e8cf"} rounded="2xl">View</Button>
        <Button variant="subtle" color={"#f2e8cf"} rounded="2xl">Join</Button>
      </Card.Footer>
    </Card.Root>


    <Card.Root width="320px" boxShadow="md" borderRadius="md" border={"#f2e8cf"} bg="#f2e8cf" p="4" mt="4" mb="4" _hover={{ boxShadow: "2xl" }} transition={"all 0.2s ease-in-out"}>
      <Card.Body gap="2">
        <Avatar.Root size="lg" shape="rounded">
          <Avatar.Image src="https://picsum.photos/200/300" />
          <Avatar.Fallback name="Nue Camp" />
        </Avatar.Root>
        <Card.Title mt="2" color="#22333b" >Nue Camp</Card.Title>
        <Card.Description  color="#22333b">
          This is the card body. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
          Curabitur nec odio vel dui euismod fermentum.
        </Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button variant="subtle" color={"#f2e8cf"} rounded="2xl">View</Button>
        <Button variant="surface" color={"#f2e8cf"} rounded="2xl">Join</Button>
      </Card.Footer>
    </Card.Root>
          
        
      </Flex>
      </Container>
    )
  }
  
  export default homemain
 