import {Box, Link, Center} from '@chakra-ui/react';
import {Link as ReachLink} from 'react-router-dom';

/* https://react-bootstrap.github.io/components/navbar/ */
const NavBar = () => {

  return (
    <Center>
      <Box bgGradient='radial(#000000, #00008B)' width="100%" fontSize="2xl" px={200} py={5} my={5}  display="flex" justifyContent="space-between">
        <Link as={ReachLink} to="/">LeCitrus</Link>
        <Link as={ReachLink} to="/about-me">About me</Link>
        <Link as={ReachLink} to="/projects">Projects</Link>
        <Link as={ReachLink} to="/hobbies">Hobbies</Link>
      </Box>
    </Center>
  );
}

export default NavBar;
