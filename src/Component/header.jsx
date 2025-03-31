// src/components/header.js
import { Flex, Box, Text, Heading, Stack } from "@chakra-ui/react";
import icon from '../Pages/icons8-logo-50.png';
import { Avatar, AvatarGroup } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"; // Import React Router's Link
import { chakra } from "@chakra-ui/react"

const header = () => {
  return (
    <Flex bg="#344E41" color="white" p={8}  alignItems="center" >
      <Box mr={6}> {/* Increase spacing between the logo and the site name */}
        <img src={icon} alt="Logo" width="40px" height="40px"  />
      </Box>
      <Stack ml={4}> {/* Add margin-left to move the site name closer to the logo */}
        <Text fontWeight="bold" color="#DAD7CD" textStyle="4xl">fritz</Text>
      </Stack>
      <Flex flex="1" justifyContent="flex-end" alignItems="center" gap={4}>
        <Avatar.Root size="lg">
          <Avatar.Fallback />
        </Avatar.Root>
        <RouterLink to="/" style={{ color: "white", textDecoration: "none" }} >
          Log Out
        </RouterLink>
      </Flex>
    </Flex>
  );
};

export default header;