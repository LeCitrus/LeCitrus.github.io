import { Box, HStack, Text, VStack, Link, Icon } from "@chakra-ui/react";
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';
import { SiDevpost } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      as="footer"
      mt={8}
      py={6}
      px={4}
      bg="blue.900"
      color="white"
    >
      <VStack spacing={4}>
        <HStack spacing={6}>
          <Link href="https://github.com/LeCitrus" isExternal _hover={{ opacity: 0.7 }}>
            <Icon as={AiFillGithub} boxSize={6} />
          </Link>
          <Link href="https://devpost.com/ctkan" isExternal _hover={{ opacity: 0.7 }}>
            <Icon as={SiDevpost} boxSize={6} />
          </Link>
          <Link href="https://www.linkedin.com/in/curtis-kan-33446a1b3/" isExternal _hover={{ opacity: 0.7 }}>
            <Icon as={AiFillLinkedin} boxSize={6} />
          </Link>
          <Link href="mailto:curtis.tl.kan@gmail.com" _hover={{ opacity: 0.7 }}>
            <Icon as={AiOutlineMail} boxSize={6} />
          </Link>
        </HStack>
        <Box width="100%" textAlign="right">
          <Text fontSize="sm">
            © {currentYear} Curtis Kan. All rights reserved.
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Footer;