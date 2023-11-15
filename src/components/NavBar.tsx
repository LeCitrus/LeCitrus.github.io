import {Box, Link, Center} from '@chakra-ui/react';
import {Link as ReachLink} from 'react-router-dom';
import { useColorMode } from "@chakra-ui/react"


/* https://react-bootstrap.github.io/components/navbar/ */
const NavBar = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  const gradient = colorMode === "dark" ? "linear(to-b, #00000F, #0000EB)" : "linear(to-b, #E8E8E8, #A9A9A9)";
  return (
    <Center>
      <Box bgGradient={gradient} width="100%" fontSize="2xl" px={200} py={5} my={5}  display="flex" justifyContent="space-between">
        <Link as={ReachLink} to="/" fontWeight="bold" style={{textDecoration: 'none'}} _hover={{color: 'black', transform: 'translateY(-5px)',
    transitionDuration: '0.5s',
    transitionTimingFunction: "ease-in-out"}}>LeCitrus</Link>
        <Link as={ReachLink} to="/about-me" fontWeight="bold" style={{textDecoration: 'none'}} _hover={{color: 'black', transform: 'translateY(-5px)',
    transitionDuration: '0.5s',
    transitionTimingFunction: "ease-in-out"}}>About me</Link>
        <Link as={ReachLink} to="/projects" fontWeight="bold" style={{textDecoration: 'none'}} _hover={{color: 'black', transform: 'translateY(-5px)',
    transitionDuration: '0.5s',
    transitionTimingFunction: "ease-in-out"}}>Projects</Link>
        <Link as={ReachLink} to="/hobbies" fontWeight="bold" style={{textDecoration: 'none'}} _hover={{color: 'black', transform: 'translateY(-5px)',
    transitionDuration: '0.5s',
    transitionTimingFunction: "ease-in-out"}}>Hobbies</Link>
      </Box>
    </Center>
  );
}

export default NavBar;
