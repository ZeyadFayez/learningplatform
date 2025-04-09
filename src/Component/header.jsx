// src/components/header.js
import { Flex, Box, Text, Stack, Button, Portal, Menu} from "@chakra-ui/react";
import icon from '../Pages/icons8-logo-50.png';
import { Avatar, AvatarGroup } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"; // Import React Router's Link
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import React, { useState } from "react";
const header = () => {

  const [isOpen, setIsOpen] = useState(false);

  
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <Flex bg="#344E41" color="white" p={8}  alignItems="center"  data-state="open"
    _open={{
      animationName: "fade-in, scale-in",
      animationDuration: "2000ms",
    }}
    _closed={{
      animationName: "fade-out, scale-out",
      animationDuration: "2000ms",
    }} >
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
        
        <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Open Menu
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="rename">Rename</Menu.Item>
            <Menu.Item value="export">Export</Menu.Item>
            <Menu.Item
              value="delete"
              color="fg.error"
              _hover={{ bg: "bg.error", color: "fg.error" }}
            >
              Delete...
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>

        <RouterLink to="/" style={{ color: "white", textDecoration: "none" }} >
          Log Out
        </RouterLink>
        <RouterLink to="/homepage/Dashboard" style={{ color: "white", textDecoration: "none" }} >
          Dashboard
        </RouterLink>
        <RouterLink to="/homepage/Dashboard/assigment" style={{ color: "white", textDecoration: "none" }} >
        Assigment
        </RouterLink>
        <RouterLink to="/homepage/Dashboard/feedback" style={{ color: "white", textDecoration: "none" }} >
          Feedback
        </RouterLink>
      </Flex>
    </Flex>
  );
};

export default header;