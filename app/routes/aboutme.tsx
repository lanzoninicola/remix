import { Center, VStack, Box, Textarea, Heading, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function AboutMe() {
  const [message, setMessage] = useState("");

  function onChangeText(e: any) {
    setMessage(e.target.value);
  }

  useEffect(() => {}, [message]);

  return (
    <Center
      h="100vh"
      w="300px"
      color={"black"}
      p="1rem"
      alignItems={"flex-start"}
    >
      <VStack>
        <Box>
          <Textarea
            color={"black"}
            placeholder="Type something..."
            value={message}
            onChange={onChangeText}
            w={"300px"}
            h="200px"
          />
        </Box>{" "}
        <Heading as="h1">ABOUT ME</Heading>
        <Heading as="h2">This is the H2</Heading>
        <Text>
          Sint ea pariatur ipsum ex Lorem. In occaecat velit mollit incididunt
          veniam voluptate incididunt laboris. Qui culpa qui deserunt nostrud
          amet culpa ut velit esse nostrud dolor. Esse aliqua duis quis eu.
          Occaecat ipsum elit aliquip duis enim Lorem commodo laborum ut quis
          occaecat. Ad aliqua reprehenderit aute culpa cillum proident aliqua.
          Enim pariatur consequat occaecat amet nulla. Occaecat ad reprehenderit
          dolor enim mollit labore tempor anim mollit.
        </Text>
      </VStack>
    </Center>
  );
}
