import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Input,
  Container,
  VStack,
  Heading,
} from "@chakra-ui/react";
import {
    useColorModeValue,
  } from "@/components/ui/color-mode"
import { useProductStore } from "../store/product";
import { toaster } from "../components/ui/toaster";

const UpdatePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [updateProduct, setUpdateProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { getProductById, updateProduct: updateProductAction } =
    useProductStore();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProductById(id);
      if (product) {
        setUpdateProduct({
          name: product.name || "",
          price: product.price || "",
          image: product.image || "",
        });
      }
    };
    fetchProduct();
  }, [id, getProductById]);

  const handleUpdateProduct = async () => {
    const { success, message } = await updateProductAction(id, updateProduct);
    if (!success) {
      toaster.error({
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    toaster.success({
      description: message,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    navigate("/");
  };

  return (
    <Container maxW="container.sm" py={8}>
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" textAlign="center" mb={4}>
          Update Product
        </Heading>

        <Box
          w="full"
          bg={useColorModeValue("white", "gray.800")}
          p={6}
          rounded="lg"
          shadow="md"
        >
          <VStack spacing={4}>
            <Input
              placeholder="Product Name"
              borderColor={useColorModeValue("gray.300", "gray.600")}
              name="name"
              value={updateProduct.name}
              onChange={(e) =>
                setUpdateProduct({ ...updateProduct, name: e.target.value })
              }
            />
            <Input
              placeholder="Price"
              borderColor={useColorModeValue("gray.300", "gray.600")}
              name="price"
              type="number"
              value={updateProduct.price}
              onChange={(e) =>
                setUpdateProduct({ ...updateProduct, price: e.target.value })
              }
            />
            <Input
              placeholder="Image URL"
              name="image"
              borderColor={useColorModeValue("gray.300", "gray.600")}
              value={updateProduct.image}
              onChange={(e) =>
                setUpdateProduct({ ...updateProduct, image: e.target.value })
              }
            />
            <Button
              colorScheme="blue"
              onClick={handleUpdateProduct}
              width="full"
            >
              Update Product
            </Button>
            <Button
              colorScheme="gray"
              onClick={() => navigate("/")}
              width="full"
            >
              Cancel
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default UpdatePage;
