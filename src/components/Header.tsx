import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { ReactComponent as LightThemeIcon } from "../images/icon-sun.svg";
import { ReactComponent as DarkThemeIcon } from "../images/icon-moon.svg";

const Header = () => {
  return (
    <Flex align="center" justify="space-between" pb="3rem">
      <Heading
        textTransform="uppercase"
        color="#fff"
        fontWeight="700"
        fontSize="40px"
        lineHeight="40px"
        letterSpacing="15px"
      >
        Todo
      </Heading>
      <DarkThemeIcon />
    </Flex>
  );
};

export default Header;
