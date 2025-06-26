import { Container, Flex, Text, HStack, Button} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { FaPlusSquare } from "react-icons/fa";
import {
  ColorModeButton,
  DarkMode,
  LightMode,
  useColorMode,
  useColorModeValue,
} from "@/components/ui/color-mode"

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
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
          color={"blue.500"}
          fontSize={{ base: "2xl", sm: "3xl" }}
          fontWeight={"bold"}
          textAlign={{ base: "center", sm: "left" }}
          textTransform={"uppercase"}
        >
          <Link to="/">Product Store 🛒 </Link>
        </Text>

        <HStack spacing={2} mt={{ base: 4, sm: 0 }} alignItems={"center"}>
          <Link to="/create">
            <Button>
              <FaPlusSquare />
              Thêm sản phẩm
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>{colorMode === "light" ? "🌙":"☀️"}</Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
