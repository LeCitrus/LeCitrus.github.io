import {Container, Link} from '@chakra-ui/react';
import {Link as ReachLink} from 'react-router-dom';

/* https://react-bootstrap.github.io/components/navbar/ */
const NavBar = () => {

  return (
      <Container>
        <Link as={ReachLink} to="/">LeCitrus</Link>
        <Link as={ReachLink} to="/about-me">About me</Link>
        <Link as={ReachLink} to="/projects">Projects</Link>
        <Link as={ReachLink} to="/hobbies">Hobbies</Link>
      </Container>
  );
}

export default NavBar;