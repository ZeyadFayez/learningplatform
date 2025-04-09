import React from "react";
import { Tabs, Container, Flex, Box, Text, List, Heading, Button, ButtonGroup, For, Stack, Steps, Blockquote, Circle, Float } from "@chakra-ui/react";
import { Toaster, toaster } from "@/components/ui/toaster";
import { LuFolder, LuUser, LuQuote  } from "react-icons/lu";


const MainContent = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <Container maxW="1200px" pt="8rem" pb="4rem" px={4} bg="#DAD7CD" data-state="open"
    _open={{
      animationName: "fade-in, scale-in",
      animationDuration: "2000ms",
    }}
    _closed={{
      animationName: "fade-out, scale-out",
      animationDuration: "2000ms",
    }}>
         {/* upper Flex Container */}
         <Flex bg="#A3B18A" p={4} justifyContent="center" h="150px" overflowY="auto" borderRadius="md" boxShadow="lg" mb={130} mt={-100}>
         <Blockquote.Root colorPalette="teal" ps="8">
      <Float placement="middle-start">
        <Circle bg="#344E41" size="8" color="white">
          <LuQuote />
        </Circle>
      </Float>
      <Blockquote.Content cite="best wishes" >
      "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice."
      </Blockquote.Content>
      <Blockquote.Content cite="best wishes">
      "Break your study sessions into focused 25-minute intervals with short breaks in between for maximum productivity."
      </Blockquote.Content>
      <Blockquote.Caption>
        — <cite>best wishes</cite>
      </Blockquote.Caption>
    </Blockquote.Root>
    <Button onClick={() => setIsSidebarOpen(!isSidebarOpen)} ml={130} variant="outline" >
          {isSidebarOpen ? "Hide Sidebar" : "Show Sidebar"}
        </Button>
      </Flex>
      {/* Central Container */}
      <Box bg="#344E41" p={8} mb={300} mt={-100} h="850px" overflowY="auto" borderRadius="md" boxShadow="lg">
        <Heading size="4xl" color="#DAD7CD">
          intro to python
        </Heading>
        <Text color="#DAD7CD" fontSize="xl" mt={4}>
          Python is a high-level, interpreted programming language known for its readability and versatility. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming. Python is widely used for web development, data analysis, artificial intelligence, scientific computing, and more.
        </Text>

        {/* Tabs Layout */}
        <Tabs.Root defaultValue="members" variant="outline" mt={150}>
          <Tabs.List bg="bg.344E41" rounded="l3" p="1">
            <Tabs.Trigger value="members" mb={2}>
              <LuUser />
              labs
            </Tabs.Trigger>
            <Tabs.Trigger value="projects">
              <LuFolder />
              Projects
            </Tabs.Trigger>
            <Tabs.Trigger value="exam">
              <LuFolder />
              exam
            </Tabs.Trigger>
            <Tabs.Indicator rounded="l2" />
          </Tabs.List>

          {/* Tab Content */}
          <Tabs.Content value="members">
            <List.Root>
              <List.Item>
                <Button
                  variant="outline"
                  size="xs"
                  onClick={() =>
                    toaster.create({
                      description: "lab 1 saved successfully",
                      duration: 6000,
                    })
                  }
                >
                  lab 1
                </Button>
              </List.Item>
              <List.Item>
                <Button
                  mt={3}
                  variant="outline"
                  size="xs"
                  onClick={() =>
                    toaster.create({
                      description: "lab 2 saved successfully",
                      duration: 6000,
                    })
                  }
                >
                  lab 2
                </Button>
              </List.Item>
            </List.Root>
          </Tabs.Content>

          <Tabs.Content value="projects">
            <List.Root>
              <List.Item>
                <Button
                  variant="outline"
                  size="xs"
                  onClick={() =>
                    toaster.create({
                      description: "project 1 requirements saved successfully",
                      duration: 6000,
                    })
                  }
                >
                  1st project
                </Button>
              </List.Item>
              <List.Item>
                <Button
                  mt={3}
                  variant="outline"
                  size="xs"
                  onClick={() =>
                    toaster.create({
                      description: "project 2 requirements saved successfully",
                      duration: 6000,
                    })
                  }
                >
                  2nd project
                </Button>
              </List.Item>
            </List.Root>
          </Tabs.Content>

          {/* New Tab Content for "exam" */}
          <Tabs.Content value="exam">
            <List.Root>
              <List.Item>
                <Button
                  variant="outline"
                  size="xs"
                  onClick={() =>
                    toaster.create({
                      description: "exam  saved successfully",
                      duration: 6000,
                    })
                  }
                >
                  exam 
                </Button>
              </List.Item>
            </List.Root>
          </Tabs.Content>
        </Tabs.Root>

        <Stack gap="16">
                <Steps.Root size="md" count={steps.length} mt={200}>
            <Steps.List>
              {steps.map((step, index) => (
                <Steps.Item key={index} index={index} title={step.title}>
                  <Steps.Indicator />
                  <Steps.Title>{step.title}</Steps.Title>
                  <Steps.Separator />
                </Steps.Item>
              ))}
            </Steps.List>
            {steps.map((step, index) => (
              <Steps.Content key={index} index={index}>
                {step.description}
              </Steps.Content>
            ))}
            <Steps.CompletedContent>
              All steps are complete!
            </Steps.CompletedContent>

            <ButtonGroup size="sm" variant="outline">
              <Steps.PrevTrigger asChild>
                <Button>Prev</Button>
              </Steps.PrevTrigger>
              <Steps.NextTrigger asChild>
                <Button>Next</Button>
              </Steps.NextTrigger>
            </ButtonGroup>
          </Steps.Root>
            </Stack>
      </Box>
   
    </Container>
  );
};

const steps = [
  {
    title: "labs",
    description: "finish labs",
  },
  {
    title: "projects",
    description: "finish projects",
  },
  {
    title: "exam",
    description: "finish exam",
  },
]
export default MainContent;