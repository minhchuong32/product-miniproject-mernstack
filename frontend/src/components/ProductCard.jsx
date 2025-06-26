import { Box } from "@chakra-ui/react";
import { Image, Heading, Text, HStack } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const textColor = useColorModeValue("gray.800", "whiteAlpha.900");
  const bg = useColorModeValue("white", "gray.700");
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
          <MdDeleteForever />
          <FaEdit />
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
