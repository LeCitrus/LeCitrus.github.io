import {Box, Link, Center} from '@chakra-ui/react';
import {Link as ReachLink} from 'react-router-dom';

/* https://react-bootstrap.github.io/components/navbar/ */
const NavBar = () => {

  return (
    <Center>
      <Box bgGradient='linear(to-b, #00000F, #0000EB)' width="100%" fontSize="2xl" px={200} py={5} my={5}  display="flex" justifyContent="space-between">
        <Link as={ReachLink} to="/" fontWeight="bold">LeCitrus</Link>
        <Link as={ReachLink} to="/about-me" fontWeight="bold">About me</Link>
        <Link as={ReachLink} to="/projects" fontWeight="bold">Projects</Link>
        <Link as={ReachLink} to="/hobbies" fontWeight="bold">Hobbies</Link>
      </Box>
    </Center>
  );
}

export default NavBar;
