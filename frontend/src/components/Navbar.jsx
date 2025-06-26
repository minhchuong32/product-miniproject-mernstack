import { Container, Flex, Text, HStack, Button} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { FaPlusSquare } from "react-icons/fa";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

import {
  ColorModeButton,
  DarkMode,
  LightMode,
  useColorMode,
  useColorModeValue,
} from "@/components/ui/color-mode"
import { useProductStore } from "../store/product"

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { products } = useProductStore();
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          color={"black.500"}
          fontSize={{ base: "2xl", sm: "3xl" }}
          fontWeight={"bold"}
          textAlign={{ base: "center", sm: "left" }}
          textTransform={"uppercase"}
        >
          <Link to={"/"}>Product Store 🛒 </Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <FaPlusSquare />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>{colorMode === "light" ?  <IoMoon/>: <LuSun/>}</Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
