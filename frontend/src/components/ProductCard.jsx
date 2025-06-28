import { Box } from "@chakra-ui/react";
import { Image, Heading, Text, HStack } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IconButton } from "@chakra-ui/react";
import { useProductStore } from "../store/product";
import { toaster } from "@/components/ui/toaster";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const textColor = useColorModeValue("gray.800", "whiteAlpha.900");
  const bg = useColorModeValue("white", "gray.700");

  const { deleteProduct, fetchProducts } = useProductStore();

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm(
      `Bạn có chắc chắn muốn xóa sản phẩm "${product.name}" không?`
    );

    if (!isConfirmed) {
      return;
    }

    const { success, message } = await deleteProduct(id);
    if (!success) {
      toaster.error({
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    await fetchProducts();
    toaster.success({
      description: message,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleEdit = () => {
    navigate(`/update/${product._id}`);
  };

  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.2s"
      _hover={{ transform: "scale(1.05)" }}
      bg={bg}
    >
      <Image
        src={product.image}
        alt={product.name}
        objectFit="cover"
        h="48"
        w="full"
      />
      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {product.name}
        </Heading>

        <Text fontWeight="bold" fontSize="xl" color={textColor} mb={4}>
          ${product.price}
        </Text>

        <HStack spacing={2}>
          <IconButton
            isRound
            aria-label="Delete product"
            colorScheme="red"
            bg="red.500"
            variant="solid"
            _hover={{ bg: "red.300" }}
            onClick={() => handleDelete(product._id)}
          >
            <MdDeleteForever />
          </IconButton>
          <IconButton
            isRound
            aria-label="Edit product"
            colorScheme="blue"
            variant="solid"
            bg="blue.600"
            _hover={{ bg: "blue.300" }}
            onClick={handleEdit}
          >
            <FaEdit />
          </IconButton>
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
