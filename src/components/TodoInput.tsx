import {
  Checkbox,
  Editable,
  EditableInput,
  EditablePreview,
} from "@chakra-ui/react";
import React from "react";

const TodoInput = () => {
  return (
    <Checkbox
      w="100%"
      bgColor="#fff"
      p="1rem 1.5rem"
      boxShadow="0px 35px 50px -15px rgba(194, 195, 214, 0.5)"
      borderRadius="5px"
    >
      <Editable placeholder="Enter your task...">
        <EditablePreview />
        <EditableInput />
      </Editable>
    </Checkbox>
  );
};

export default TodoInput;
