import {
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
  useColorMode,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import frame from "../../public/Frame-13.svg";

const Cart = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAplha");
  const secondaryTextColor = useColorModeValue("gray.600", "gray.400");

  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start" bg={bgColor}>
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your cart</Heading>
        <Text>
          If price is too hard on your eyes,{" "}
          <Button variant="link" colorScheme="black" fontWeight="bold" onClick={toggleColorMode}>
            try changing the theme.
          </Button>
        </Text>
      </VStack>
      <Flex justifyContent="space-between" w="full" alignItems="center" wrap={{ base: "wrap", md: "nowrap" }}>
        <Flex justifyContent="flex-start" gap={6} alignItems="center">
          <Image src={frame} alt="img" />
          <div>
            <Heading size="lg" fontSize={20}>
              Penny board
            </Heading>
            <Heading size="md" fontSize={18} fontWeight="normal">
              PNYCOMP27541
            </Heading>
          </div>
        </Flex>
        <Text fontSize={16} fontWeight="bold">
          $119.00
        </Text>
      </Flex>
      <VStack spacing={4} alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Subtotal</Text>
          <Heading size="sm">$119.00</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Shipping</Text>
          <Heading size="sm">$19.99</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Taxes (estimated)</Text>
          <Heading size="sm">$29.99</Heading>
        </HStack>
      </VStack>
      <Divider />
      <HStack justifyContent="space-between" w="full">
        <Text color={secondaryTextColor}>total</Text>
        <Heading size="lg">$162.79</Heading>
      </HStack>
    </VStack>
  );
};

export default Cart;
