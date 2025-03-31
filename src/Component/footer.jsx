// src/components/footer.jsx
import { Flex, Text } from "@chakra-ui/react";
import icon from '../Pages/icons8-logo-50.png';
const footer = () => {
  return (
    <Flex
      as="footer"
      bg="#344E41"
      color="white"
      p={4}
      justifyContent="center"
      alignItems="center"
      h={"90px"}
      position="absolute" // Ensure the footer is positioned at the bottom
      bottom="0" // Stick to the bottom
      width="100%" // Make it span the full width of the page
    >
      <box>
        <img src={icon} alt="Logo" width="40px" height="40px"    />
        <Text fontSize="lg" ml={2} color="#DAD7CD">
          © 2023 fritz. All rights reserved.
        </Text>
      </box>
    </Flex>
  );
};

export default footer;