import { Box, Center, Textarea } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Index() {
  const [message, setMessage] = useState("");

  function displayMessage(evt: any) {
    var message;
    if (evt.origin !== "https://remix-vert-pi.vercel.app/") {
      message = JSON.stringify(evt.data);
      setMessage(message);
    }
  }

  function onChangeText(e: any) {
    setMessage(e.target.value);
  }

  useEffect(() => {
    if (window.addEventListener) {
      window.addEventListener("message", displayMessage, false);
    }
  }, [message]);

  return (
    <Center h="100vh" w="100vw" color={"green.300"}>
      <Box>
        <Textarea
          color={"black"}
          placeholder="Type something..."
          value={message}
          onChange={onChangeText}
          w={"300px"}
          h="400px"
        />
      </Box>
    </Center>
  );
}
