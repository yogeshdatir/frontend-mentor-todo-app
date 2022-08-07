import { Container } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";

const Todo = () => {
  return (
    <Container minH="100vh" maxW="541px" mx="auto" p="4rem 0 3rem 0">
      <Header />
      Todo
    </Container>
  );
};

export default Todo;
