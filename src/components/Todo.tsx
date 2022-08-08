import { Container } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";
import TodoInput from "./TodoInput";

const Todo = () => {
  return (
    <Container minH="100vh" maxW="541px" mx="auto" p="4rem 0 3rem 0">
      <Header />
      <TodoInput />
    </Container>
  );
};

export default Todo;
