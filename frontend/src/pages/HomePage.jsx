import { Container, VStack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import { SimpleGrid } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log(products);

  return (
    <Container maxW="container.md" py={12}>
      <VStack spacing={6}>
        <Text
          fontSize="2xl"
          fontWeight="bold"
          bg="blue.500"
          color="white"
          bgClip="text"
          textAlign="center"
        >
          Current Product
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6} spacing={6} w="full">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </SimpleGrid>

        <Text
          fontSize="xl"
          textAlign={"center"}
          fontWeight="bold"
          color="gray.500"
        >
          No products found
          <Link to={"/create"}>
            <Text
              as="span"
              color="blue.500"
              _hover={{ textDecoration: "underline" }}
            >
              Create a product
            </Text>
          </Link>
        </Text>
      </VStack>
    </Container>
  );
};

export default HomePage;
