import {
    Box,
    Button,
    Container,
    Heading,
    Input,
    VStack,
} from "@chakra-ui/react";
import React from "react";

import { toaster } from "@/components/ui/toaster";

import {
    useColorModeValue
} from "@/components/ui/color-mode";
import { useProductStore } from "../store/product";

const CreatePage = () => {
    // init state for new product
  const [newProduct, setNewProduct] = React.useState({
    name: "",
    price: "",
    image: "",
  });

  const {createProduct} = useProductStore();
  const handleAddProduct = async () => {
   const {success, message} = await createProduct(newProduct);
   console.log(success, message);
    // Check if the product was created successfully
   if(!success) {
     toaster.error({
       description: message,
       status: "error",
       duration: 3000,
       isClosable: true,
     });
     return;
   }
   else {
     toaster.success({
       description: message,
       status: "success",
       duration: 3000,
       isClosable: true,
     });
   }
   setNewProduct({ name: "", price: "", image: "" }); // Reset form
  };

  return (
    <Container maxW="container.sm" py={8}>
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" textAlign="center" mb={4}>
          Create New Product
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
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
            <Input
              placeholder="Price"
              borderColor={useColorModeValue("gray.300", "gray.600")}
              name="price"
              type="number"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
            <Input
              placeholder="Image URL"
              name="image"
              borderColor={useColorModeValue("gray.300", "gray.600")}
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />
            <Button colorScheme="blue" onClick={handleAddProduct} width="full">
              Create Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
