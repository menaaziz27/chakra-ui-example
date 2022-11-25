import { Container, Flex } from "@chakra-ui/react";
import Cart from "../src/sections/Cart";
import Details from "../src/sections/Details";

export default function Home() {
  return (
    <Container maxWidth="container.xl" p={0}>
      {/* there're 3 ways for responsiveness in chakra ui 1. array syntax 2. object syntax 3. breakpointvalue syntax */}
      <Flex h={{ base: "auto", md: "100vh" }} py={[0, 10, 20]} flexDirection={{ base: "column", md: "row" }}>
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
}
