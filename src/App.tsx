import { Box } from "@chakra-ui/react";
import React from "react";
import "./App.css";
import Todo from "./components/Todo";
import BgImage from "./images/bg-desktop-light.jpg";

function App() {
  return (
    <Box bgImage={BgImage} bgPos="top" bgRepeat="no-repeat" minH="100vh">
      <Todo />
    </Box>
  );
}

export default App;
