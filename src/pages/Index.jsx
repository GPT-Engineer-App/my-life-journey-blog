import { Box, Flex, Heading, Text, VStack, Link, Container } from "@chakra-ui/react";
import { FaHome, FaEnvelope, FaPenNib } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minH="100vh">
        <Box as="header" bg="brand.800" color="white" py={4}>
          <Flex as="nav" justify="space-between" align="center" maxW="container.md" mx="auto" px={4}>
            <Heading as="h1" size="lg">My Blog</Heading>
            <Flex as="ul" listStyleType="none">
              <Link as="li" mx={2} href="#about" p={2} _hover={{ bg: "brand.700" }}><FaHome /> About Me</Link>
              <Link as="li" mx={2} href="#posts" p={2} _hover={{ bg: "brand.700" }}><FaPenNib /> Blog Posts</Link>
              <Link as="li" mx={2} href="#contact" p={2} _hover={{ bg: "brand.700" }}><FaEnvelope /> Contact</Link>
            </Flex>
          </Flex>
        </Box>
        <Flex direction="column" flex="1" justify="center" align="center" bg="gray.50" p={4}>
          <VStack spacing={8} maxW="container.md" mx="auto">
            <Box id="about" p={4} shadow="md" bg="white">
              <Heading as="h2" size="md">About Me</Heading>
              <Text mt={2}>I'm a passionate writer and tech enthusiast sharing my thoughts and experiences with the world.</Text>
            </Box>
            <Box id="posts" p={4} shadow="md" bg="white">
              <Heading as="h2" size="md">Blog Posts</Heading>
              <Text mt={2}>Explore my latest blog posts on technology, lifestyle, and more.</Text>
            </Box>
            <Box id="contact" p={4} shadow="md" bg="white">
              <Heading as="h2" size="md">Contact</Heading>
              <Text mt={2}>Feel free to reach out to me via email or follow me on social media.</Text>
            </Box>
          </VStack>
        </Flex>
        <Box as="footer" bg="brand.800" color="white" py={4} textAlign="center">
          <Text>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;